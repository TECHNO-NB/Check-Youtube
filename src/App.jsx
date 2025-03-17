import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import VideoDetails from "./pages/VideoDetails";
import Home from "./pages/Home";
import NotFoundPage from "./pages/NotFoundPage";
import VideoUpload from "./pages/VideoUpload";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import ProtectedRoute from "./proctedroute/ProctedRoute";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import OtherProfile from "./pages/OtherProfile";
import UserVerfier from "./components/UserVerfier";
import ForgetPassword from "./pages/ForgetPassword";
import Footer from "./components/Footer";
import Subscribers from "./pages/Subscribers";
import Collections from "./pages/Collections";
import UpoldeNavLoader from "./components/uploadloader/UpoldeNavLoader";
import LikedVideos from "./pages/LikedVideos";

function App() {
  return (
    <>
      <BrowserRouter>
        <UserVerfier />
        <Navbar />
        <UpoldeNavLoader />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/videodetails/:videoId"
            element={<VideoDetails />}
          ></Route>
          <Route
            path="/uploadvideo"
            element={
              <ProtectedRoute>
                <VideoUpload />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/getlikedby"
            element={
              <ProtectedRoute>
                <LikedVideos />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/collections"
            element={
              <ProtectedRoute>
                <Collections />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>

          <Route
            path="/otherprofile/:username"
            element={<OtherProfile />}
          ></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>

          <Route
            path="/subscribers"
            element={
              <ProtectedRoute>
                <Subscribers />
              </ProtectedRoute>
            }
          ></Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
        <ToastContainer theme="dark" position="top-right" />
      </BrowserRouter>
    </>
  );
}

export default App;
