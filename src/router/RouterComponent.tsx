import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useAppSelector } from "../redux/hooks";
import { allRoutes, routes } from "./config";
import { IRoute } from "../types";

export const RouterComponent: React.FC = () => {
  const { pathname } = useLocation();
  const { auth } = useAppSelector((state) => state.user);
  const { basketIsNotEmpty } = useAppSelector((state) => state.packets);
  const staff = true;

  return (
    <Switch>
      {allRoutes.map((route: IRoute) => {
        const path = Array.isArray(route.path)
          ? route.path.filter((item: string) => item === pathname && item)[0]
          : route.path;

        const authorization = (route: IRoute): boolean => {
          if (route.isAuth) return auth;
          if (route.isAdmin) return staff;
          if (route.protectRouteBasket) return basketIsNotEmpty;
          return false;
        };

        const protectedRoutes = route.isAdmin || route.isAuth || route.protectRouteBasket;
        return protectedRoutes ? (
          <ProtectedRoute
            component={route.component}
            authorization={authorization(route)}
            exact
            path={path}
            key={route.name}
          />
        ) : (
          <Route exact path={route.path} key={route.name} component={route.component} />
        );
      })}
      <Route path="*">
        <Redirect to="/not-found" />
      </Route>
    </Switch>
  );
};
