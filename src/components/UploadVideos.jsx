import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import Uploadloader from "./uploadloader/Uploadloader";
import { showhidemodal } from "../context/ModalContext";
import ButtonLoader from "./ButtonLoader";

const UploadVideos = () => {
  const navigate = useNavigate();

  const items = useSelector((state) => state.login);

  const notifyE = (msg) => toast.error(msg);
  const notifyS = (msg) => toast.success(msg);
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { modal, setModal } = useContext(showhidemodal);

  const uploadVideo = async (e) => {
    try {
      setIsLoading(true);
      setModal(true);
      e.preventDefault();
      const formData = new FormData();
      formData.append("video", video);
      formData.append("thumbnail", thumbnail);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("owner", items._id);

      const uploadVideoToserver = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/videoupload`,
        formData
      );
      setIsLoading(true);

      notifyS("Uploaded Video Successfully :)");
      navigate("/");
      console.log(uploadVideoToserver.data);
      setIsLoading(false);
      setModal(false);
    } catch (error) {
      notifyE("Network Connection Or Server Errors:(");
      setIsLoading(false);
      setModal(false);
    }
  };
  return (
    <div className="min-h-[75vh]  flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-900">
          Upload Video
        </h2>
      </div>
      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form
            className="space-y-6"
            method="POST"
            onSubmit={(e) => uploadVideo(e)}
          >
            <div>
              {/* {modal ? <Uploadloader /> : null} */}

              <label
                htmlFor="video"
                className="block text-sm font-medium text-purple-900"
              >
                Video
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setVideo(e.target.files[0])}
                  id="video"
                  name="video"
                  type="file"
                  accept="video/*"
                  required
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-purple-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-purple-900"
              >
                Image
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setThumbnail(e.target.files[0])}
                  id="image"
                  name="image"
                  type="file"
                  accept="image/*"
                  required
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-purple-300 rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-purple-900"
              >
                Title
              </label>
              <div className="mt-1">
                <input
                  onChange={(e) => setTitle(e.target.value)}
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="title"
                  required
                  className="focus:ring-indigo-500 border-2 border-purple-800 focus:border-indigo-500 block w-full shadow-sm sm:text-sm  rounded-md"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-purple-900"
              >
                Description
              </label>
              <div className="mt-1">
                <textarea
                  onChange={(e) => setDescription(e.target.value)}
                  id="description"
                  name="description"
                  rows="3"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-2 border-purple-800 rounded-md"
                ></textarea>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-900 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {isLoading ? <ButtonLoader/> : 'Upload'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadVideos;
