// Api
import { useMutation } from '@tanstack/react-query';

// Utils
import { parseUrl } from 'utils/api';

// Types
import { MutationOptions, UrlParam } from 'types/structs';
import useAxios from './useAxios';

function useGetMutation<T = any, C = T>(url: string, options?: MutationOptions<T, C>) {
    // Hooks
    const { getAxiosInstance, getAxiosCleanInstance } = useAxios();

    // Async function
    type MutationType = (params?: UrlParam[]) => Promise<C>;
    const request: MutationType = async params => {
        const res = options?.direct
            ? await getAxiosCleanInstance().get<T>(parseUrl(url, params))
            : await getAxiosInstance({ forceAuth: options?.forceAuth }).get<T>(
                  parseUrl(url, params)
              );
        return options?.transform ? options.transform(res.data) : (res.data as unknown as C);
    };

    // Mutation
    const mutation = useMutation(request, {
        retry: 0,
        onSuccess: res => {
            options?.onSuccess && options.onSuccess(res);
        }
    });

    // Methods
    const mutate = (params?: UrlParam[]) => {
        return params ? mutation.mutate(params) : mutation.mutate([]);
    };

    const mutateAsync = (params?: UrlParam[]) => {
        return params ? mutation.mutateAsync(params) : mutation.mutateAsync([]);
    };

    return {
        ...mutation,
        mutate,
        mutateAsync
    };
}

export default useGetMutation;
