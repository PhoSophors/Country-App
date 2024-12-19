import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useApi = <T>(url: string) => {
  const { data, error } = useSWR<T>(url, fetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};