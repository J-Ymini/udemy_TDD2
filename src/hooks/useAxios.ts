import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (fetchUrl: string) => {
  const [items, setItems] = useState([]);

  const getDataList = async (fetchUrl: string) => {
    try {
      const response = await axios.get(fetchUrl);
      const data = response.data;
      return data;
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getDataList(fetchUrl).then((data) => setItems(data));
  }, []);

  return { items };
};

export default useAxios;
