import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.login);

  if (!user || !user.username) {
    return <Navigate to="/login" replace />;
  } else return children;
};

export default ProtectedRoute;
