import React from "react";
import { useAuth } from "./Auth";
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const RequireAuth = ({ children }) => {
  const location = useLocation();
  const auth = useAuth();
  if (!auth.user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};

export default RequireAuth;
