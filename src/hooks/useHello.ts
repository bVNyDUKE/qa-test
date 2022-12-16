import { useEffect } from 'react';

export function useHello(msg: string) {
  useEffect(() => console.log(msg), []);
}
