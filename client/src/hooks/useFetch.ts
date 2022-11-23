import { useCallback, useEffect, useRef, useState } from "react";
const defaultErrMsg = 'something went wrong';
export function useFetchJson<T>(url: string, errMsg = defaultErrMsg) {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState('');
  const [data, setData] = useState(true);
  const ref = useRef<T>(null);
  const fetchJson = useCallback(async (url: string) => {
    try {
      const res = await fetch(url);
      const json = await res.json();
      ref.current && setData(json);
    } catch (e) {
      console.error(e);
      ref.current && setErr(errMsg);
    } finally {
      ref.current && setLoading(false);
    }
  }, [errMsg]);
  useEffect(() => {
    fetchJson(url);
  }, [url, fetchJson]);
  return [loading, err, data];
}