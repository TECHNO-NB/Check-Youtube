import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TailSpin, Hourglass } from "react-loader-spinner";
import { toast } from "react-toastify";

const UploadVideos = () => {
  const notifyE = (msg) => toast.error(msg);
  const notifyS = (msg) => toast.success(msg);
  const [video, setVideo] = useState(null);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const uploadVideo = async (e) => {
    try {
      setIsLoading(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("video", video);
    formData.append("thumbnail", thumbnail);
    formData.append("title", title);
    formData.append("description", description);

    const uploadVideoToserver = await axios.post(
      "http://localhost:4000/api/v1/videoupload",
      formData,
      {
        headers:{
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjAxNzA2YTk3NTk3NjMxN2NjZjgzOTMiLCJlbWFpbCI6Im5hcmVzaEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRodXJrb3QiLCJmdWxsTmFtZSI6ImtpbmcgYm95IiwiaWF0IjoxNzExNTE5ODYyLCJleHAiOjE3MTIzODM4NjJ9.QXON_jeT1C5g0qiwwhmZQe1IfuMjQJ3gRt1pftnlmGM"
        }
      }
    );
    setIsLoading(true);
    notifyS("Uploaded Video Successfully :)");
    navigate("/");
    console.log(uploadVideoToserver.data);
    setIsLoading(false); 
    } catch (error) {
      notifyE("Network Connection Or Server Errors:(");
      setIsLoading(false); 
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
              {isLoading ? (
                <Hourglass
                  className="items-center ml-40"
                  visible={true}
                  height="40"
                  width="40"
                  ariaLabel="hourglass-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  colors={["#306cce", "#72a1ed"]}
                />
              ) : null}

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
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadVideos;
