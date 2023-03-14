// Api

// Types
import { UrlParam } from 'types/structs';

// Others
import { AxiosResponse } from 'axios';
import { BASE_URL } from 'config/servers';

export const parseUrl = (url: string, params: UrlParam[] = []) => {
    let parsedUrl = url;
    const queryParams: UrlParam[] = [];

    params.forEach(p => {
        if (parsedUrl.includes(`:${p.key}`))
            parsedUrl = parsedUrl.replace(`:${p.key}`, p.value);
        else queryParams.push(p);
    });

    queryParams.forEach((q, i) => {
        parsedUrl += i === 0 ? '?' : '&';
        parsedUrl += `${q.key}=${q.value}`;
    });
    return parsedUrl;
};

export const buildUrl = (url: string, params: UrlParam[] = []) => {
    const tmp =
        BASE_URL.slice(-1) === '/'
            ? `${BASE_URL}${parseUrl(url, params)}`
            : `${BASE_URL}/${parseUrl(url, params)}`;
    return tmp;
};

const tempUrl = 'http://192.168.100.249:5001';

export const buildTempUrl = (url: string, params: UrlParam[] = []) =>
    tempUrl.slice(-1) === '/'
        ? `${tempUrl}${parseUrl(url, params)}`
        : `${tempUrl}/${parseUrl(url, params)}`;

export const concurrentPromises = (promises: Promise<any>[]) => {
    return Promise.all(
        promises.map(p =>
            p.catch(() => {
                return null;
            })
        )
    );
};

export const formatResponse = (r: AxiosResponse): string =>
    `HTTP ${r.status} ${r.data.message ? ` - ${r.data.message}` : ''}
    Response:
    ${JSON.stringify(
        {
            data: r.data,
            status: r.status,
            statusText: r.statusText,
            headers: r.headers
        },
        null,
        4
    )}
    Request:
    ${JSON.stringify(
        {
            method: r.config.method,
            baseURL: r.config.baseURL,
            url: r.config.url,
            params: r.config.params,
            data: r.config.data,
            headers: r.config.headers
        },
        null,
        4
    )}
    `;
