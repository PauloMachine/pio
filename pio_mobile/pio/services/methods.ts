import api from './api';

export const get = async <T>(url: string): Promise<T> => {
    const { data } = await api.get<T>(url);
    return data;
};

export const post = async <T, R>(url: string, payload?: R): Promise<T> => {
    const { data } = await api.post<T>(url, payload);
    return data;
};