import useSWR from 'swr';
import { apiClient } from '../services/apiClient';

export function useFetch<Data = any>(url: string) {
    const { data, error } = useSWR<Data>(url, async (url) => {
        const response = await apiClient.get(url);

        return response.data;
    });

    return { data, error };
}
