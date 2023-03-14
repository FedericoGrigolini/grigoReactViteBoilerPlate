export type Option = {
    name: string;
    label?: string;
    value: any;
};

export type UrlParam = {
    key: string;
    value: string;
};

export type ApiOptions<T, C> = {
    forceAuth?: boolean;
    avoidErrors?: boolean;
    transform?: (data: T) => C;
    onSuccess?: (res: C) => any;
    isFormData?: any;
};

export type MutationOptions<T, C> = ApiOptions<T, C> & { direct?: boolean };

export type QueryOptions<T, C> = ApiOptions<T, C> & {
    direct?: boolean;
    enable?: boolean;
    params?: UrlParam[];
    refetchInterval?: number;
};

export type NavigationItem = {
    name: string;
    href: string;
    icon?: (
        props: React.SVGProps<SVGSVGElement> & {
            title?: string | undefined;
            titleId?: string | undefined;
        }
    ) => JSX.Element;
    children?: NavigationItem[];
};
