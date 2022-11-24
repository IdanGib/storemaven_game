import { useCallback, useEffect, useState } from "react";
const defaultErrMsg = 'something went wrong';
export function useFetchJson<T>(
  url: string, errMsg = defaultErrMsg
): [ T | undefined, boolean, string] {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');
  const [data, setData] = useState<T>();
  const fetchJson = useCallback(async (url: string) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      setData(json);
    } catch (e) {
      setErr(errMsg);
    } finally {
      setLoading(false);
    }
  }, [errMsg]);
  useEffect(() => {
    fetchJson(url);
  }, [url, fetchJson]);
  return [data, loading, err];
}