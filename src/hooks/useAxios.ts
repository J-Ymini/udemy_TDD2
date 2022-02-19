import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (fetchUrl: string) => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState<boolean>(false);

  const getDataList = async (fetchUrl: string) => {
    try {
      const response = await axios.get(fetchUrl);
      const data = response.data;
      return data;
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    getDataList(fetchUrl).then((data) => setItems(data));
  }, []);

  return { items, error };
};

export default useAxios;
