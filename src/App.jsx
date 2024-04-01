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
import ProctedRoute from "./proctedroute/ProctedRoute"
import Register from "./pages/Register"


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/videodetails" element={<VideoDetails />}></Route>
          <Route path="/uploadvideo" element={<ProctedRoute><VideoUpload /></ProctedRoute>}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <ToastContainer theme="dark" position="top-right"/>
      </BrowserRouter>
    </>
  );
}

export default App;
