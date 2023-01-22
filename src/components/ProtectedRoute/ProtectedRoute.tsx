import React from "react";
import { Navigate } from "react-router-dom";
import { PropsProtectedRoute } from "../../types";

export const ProtectedRoute: React.FC<PropsProtectedRoute> = ({ authorization, children }) => {
  return !authorization ? <Navigate to="/" /> : children;
};
