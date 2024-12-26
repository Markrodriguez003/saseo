import axios from "axios";
import { useState, useEffect } from "react";

// `http://localhost:7777/api/user/`

// custom hook
export default function useFetch(query) {
  const [getData, setGetData] = useState({
    isLoading: false,
    apiData: undefined,
    status: null,
    serverError: null,
  });

  useEffect(() => {
    if (!query) {
      return;
    }

    const fetchData = async () => {
      try {
        setGetData((prev) => ({
          ...prev,
          isLoading: true,
        }));

        const { data, status } = (await axios.get) * `/api${query}`;
        if (status === 201) {
          setGetData((prev) => ({
            ...prev,
            isLoading: false,
            apiData: data,
            status: status,
          }));
        }
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
        }));
      } catch (error) {
        setGetData((prev) => ({
          ...prev,
          isLoading: false,
          serverError: error,
        }));
      }
    };
  }, [query]);

  return [setGetData, getData];
}
