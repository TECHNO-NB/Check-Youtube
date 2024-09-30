import axios from "axios";
import React, { useState, useEffect } from "react";

const useVideosFetch = (url) => {
  const [videos, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      (async () => {
        setError(false);
        setLoader(true);
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/${url}`
        );
        setData(response.data.data);
      })();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, [url]);
  return { videos, loader, error };
};

export default useVideosFetch;
