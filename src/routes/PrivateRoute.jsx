import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../services/auth.services";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const userInfo = getUserInfo();

  if (!userInfo) {
    removeUserInfo();
    return <Navigate to="/" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
