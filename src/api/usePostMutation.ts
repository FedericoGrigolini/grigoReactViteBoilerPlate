// Api
import { useMutation } from '@tanstack/react-query';

// Utils
import { parseUrl } from 'utils/api';

import { MutationOptions, UrlParam } from 'types/structs';
import useAxios from './useAxios';
import { useDispatch } from 'react-redux';

function usePostMutation<T = any, R = any, C = R>(url: string, options?: MutationOptions<R, C>) {
    // hook
    const { getAxiosInstance } = useAxios();
    // Async function
    type MutationType = (variables: { data: T; params?: UrlParam[] }) => Promise<C>;

    const dispatch = useDispatch();

    const request: MutationType = async variables => {
        const myaxios = getAxiosInstance({ forceAuth: options?.forceAuth });
        const res = await myaxios.post<R>(
            parseUrl(url, variables.params),
            variables.data,
            options?.isFormData ? { headers: { 'Content-Type': 'multipart/form-data' } } : undefined
        );
        return options?.transform ? options.transform(res.data) : (res.data as unknown as C);
    };

    // Mutation
    const mutation = useMutation(request, {
        retry: 0,
        onSuccess: res => {
            options?.onSuccess && options.onSuccess(res);
        },
        onError: err => {
            console.log('$$ err:', err);

            // dispatch(
            //     setError({
            //         error: (err as any).response
            //             ? (err as any).response.data.message
            //             : 'errors.serviceUnreachable'
            //     })
            // );
        }
    });

    // Methods
    const mutate = (variables: T, params?: UrlParam[]) => {
        return params
            ? mutation.mutate({ data: variables, params })
            : mutation.mutate({ data: variables });
    };

    const mutateAsync = (variables: T, params?: UrlParam[]) => {
        return params
            ? mutation.mutateAsync({ data: variables, params })
            : mutation.mutateAsync({ data: variables });
    };

    return {
        ...mutation,
        mutate,
        mutateAsync
    };
}

export default usePostMutation;
