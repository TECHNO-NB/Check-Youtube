import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

const ProctedRoute = ({ children }) => {
  const navigate=useNavigate();
  const [auth, setAuth] = useState(true);
  return(
  auth ? (
  children
  ) : (
  <Navigate to="/login" replace/>
  )
  )
};

export default ProctedRoute;
