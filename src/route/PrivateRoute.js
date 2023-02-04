import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userInfo } from "../context/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(userInfo);
  console.log(user)
  if (user) {
    return children;
  }
  return <Navigate to="/"></Navigate>;
};

export default PrivateRoute;
