import React from "react";
import { Redirect, Route } from "react-router-dom";
import {PropsProtectedRoute} from "../../types";

export const ProtectedRoute: React.FC<PropsProtectedRoute> = ({ component, exact, path, authorization }) => {
  return authorization ? <Route exact={exact} path={path} component={component} /> : <Redirect to="/" />;
};


