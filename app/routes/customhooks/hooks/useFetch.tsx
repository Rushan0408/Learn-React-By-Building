import { useEffect, useState } from "react";

const useFetch = <T,>(url : string) => {
  const [data, setData] = useState<T | null>(null);
  const [loading,setLoading] = useState<Boolean>(false);
  const [error,setError] = useState<string | null>(null);

  async function apicall() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setError(null);
      setLoading(false);
    }
    catch(e) {
      setError(e instanceof Error ? e.message : "An error occurred");
      setLoading(false);
    }
  }

  useEffect(() => {
    apicall();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
