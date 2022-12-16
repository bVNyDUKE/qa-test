import { useEffect, useState } from 'react';
import type { Post, User, Comment } from '@/types';
import { BASEURL } from '@/config';

interface ResponseTypes {
  '/users': User[];
  '/posts': Post[];
  '/comments': Comment[];
}

export function useFetch<Endpoint extends keyof ResponseTypes>(
  endpoint: Endpoint | `${Endpoint}?${string}`,
) {
  const [data, setData] = useState<ResponseTypes[Endpoint]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError('');
      try {
        const res = await fetch(`${BASEURL}${endpoint}`);
        const resData = await res.json();
        setData(resData);
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
        console.error(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [endpoint]);

  return {
    data,
    loading,
    error,
  };
}
