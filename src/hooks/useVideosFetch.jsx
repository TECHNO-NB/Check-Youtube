import axios from "axios";
import React, { useState, useEffect } from "react";

const useVideosFetch = (url) => {
  const [videos, setData] = useState([]);
  const [load, setLoader] = useState(false);
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
        setLoader(false)
      })();
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }, [url]);
  return { videos, load, error };
};

export default useVideosFetch;
