// Utils
import { getEnv } from 'utils/getEnv';
import process from 'process';

export default function isDev(): boolean {
    return !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
}

export const CLIENT_ID = '$$p1zz41s4w3s4m3$$-webapp';
export const REFRESH_INTERVAL = getEnv('REFRESH_INTERVAL', 1790000);
export const APP_ADDRESS = getEnv('APP_ADDRESS', `localhost`);
export const PROTOCOL = getEnv('PROTOCOL', `http`);
export const APP_PORT = getEnv('APP-PORT', `3000`);
export const PORT = getEnv('PORT', `3001`);

export const BASE_URL = isDev()
    ? `http://192.168.1.122:8080`
    : `${PROTOCOL}://${APP_ADDRESS}`;

export const getAddress = () => {
    const candidate: string = `${PROTOCOL}://${BASE_URL}:${PORT}`;
    if (!candidate.startsWith('https://')) return 'https://' + candidate;
    return candidate;
};
