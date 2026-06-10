// Lab VIII.1.2.
import { useEffect, useState } from "react";

type UseFetchResult<T> = {
  data: T | null;
  isLoading: boolean;
  error: string;
};

export function useFetch<T>(url: string): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError("");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Oops! We couldn't load the posts. Please check your internet connection and try again.");
        }

        const json = (await response.json()) as T;
        setData(json);
      } catch (err) {
        setError("Oops! We couldn't load the posts. Please try again.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return {
    data,
    isLoading,
    error,
  };
}