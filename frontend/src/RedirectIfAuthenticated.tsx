import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectCurrentToken } from "./features/auth/authSlice";

interface IProps {
  children: React.ReactNode;
}

const RedirectIfAuthenticated: React.FC<IProps> = ({ children }) => {
  const token = useSelector(selectCurrentToken);

  if (token) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default RedirectIfAuthenticated;
