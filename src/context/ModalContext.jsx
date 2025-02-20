import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const showhidemodal = createContext();
const ModalContext = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [videoData, setVideoData] = useState({});
  const [progress, setProgress] = useState(0);
  const uplodeVideo = async () => {
    console.log(videoData);
    try {
      const uploadVideoToserver = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/videoupload`,
        videoData,
        {
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          },
        }
      );
      setProgress(100);
      setModal(false);
    } catch (error) {
      console.log(error);
      setModal(false);
    } finally {
      setTimeout(() => {
        setProgress(0);
        setModal(false);
      }, 1000);

      setModal(false);
    }
  };

  useEffect(() => {
    uplodeVideo();
  }, [modal]);

  return (
    <showhidemodal.Provider value={{ modal, setModal, setVideoData, progress }}>
      {children}
    </showhidemodal.Provider>
  );
};

export default ModalContext;
