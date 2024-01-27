import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useMeQuery } from "../redux/api/user";
import { removeUserInfo } from "../services/auth.services";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();

  const { isError } = useMeQuery();

  if (isError) {
    removeUserInfo();
    return <Navigate to="/" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
