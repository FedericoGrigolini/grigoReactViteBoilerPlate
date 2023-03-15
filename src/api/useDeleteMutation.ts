// Api
import { useMutation } from '@tanstack/react-query';

// Utils
import { parseUrl } from 'utils/api';

// Types
import { MutationOptions, UrlParam } from 'types/structs';
import useAxios from './useAxios';

function useDeleteMutation<T = any, R = any, C = R>(url: string, options?: MutationOptions<R, C>) {
    // Hooks
    const { getAxiosInstance } = useAxios();

    // Async function
    type MutationType = (variables: { data: T; params?: UrlParam[] }) => Promise<C>;
    const request: MutationType = async variables => {
        const res = await getAxiosInstance().delete<R>(parseUrl(url, variables.params), {
            data: variables.data
        });
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

export default useDeleteMutation;
