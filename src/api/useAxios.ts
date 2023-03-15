import axios from 'axios';
import { BASE_URL } from 'config/servers';

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 20 * 1000
});

function useAxios() {
    const getAxiosInstance = (options?: { forceAuth?: boolean; forceUnath?: boolean }) => {
        return axiosInstance;
    };

    const getAxiosCleanInstance = () => {
        return axios.create();
    };

    return { getAxiosInstance, getAxiosCleanInstance };
}

export default useAxios;
