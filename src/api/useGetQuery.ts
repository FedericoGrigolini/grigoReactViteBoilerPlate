// Api
import { useQuery } from '@tanstack/react-query';

// Utils
import { parseUrl } from 'utils/api';

// Types
import { QueryOptions } from 'types/structs';
import useAxios from './useAxios';
import { useDispatch } from 'react-redux';
// import { setError } from 'store/slices/statusSlice';

function useGetQuery<T = any, C = T>(key: string[], url: string, options?: QueryOptions<T, C>) {
    // Hooks
    const { getAxiosInstance, getAxiosCleanInstance } = useAxios();

    // Async function
    type QueryType = () => Promise<C>;
    const request: QueryType = async () => {
        const res = options?.direct
            ? await getAxiosCleanInstance().get<T>(parseUrl(url, options?.params))
            : await getAxiosInstance().get<T>(parseUrl(url, options?.params));
        return options?.transform ? options.transform(res.data) : (res.data as unknown as C);
    };

    // Query
    const query = useQuery(key, request, {
        retry: 0,
        refetchInterval: options?.refetchInterval,
        onSuccess: res => {
            options?.onSuccess && options.onSuccess(res);
        },
        onError: err => {
            console.log('$$ err:', err);
            // dispatch(setError({ error: 'Connection error' }));
        }
    });

    return {
        ...query
    };
}

export default useGetQuery;
