import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

export interface placeholderData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePlaceholderData = () => {
  const [data, setData] = useState<placeholderData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = () => {
    setError(null);
    setData([]);

    axios
      .get<placeholderData[]>("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data);
      })
      .catch((err: AxiosError) => {
        setError(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { data, error, retry: fetchData };
};

export default usePlaceholderData;
