import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useAppSelector } from "../redux/hooks";
import { allRoutes } from "./config";
import { IRoute } from "../types";
import { Layout } from "../layout";

export const RouterComponent: React.FC = () => {
  const { pathname } = useLocation();
  const { auth } = useAppSelector((state) => state.user);
  const { basketIsNotEmpty } = useAppSelector((state) => state.packets);
  const staff = true;

  useEffect(() => {
    if (pathname) {
      // @ts-ignore
      window.ym(90939090, "hit", window.location.href);
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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
            <Route
              path={path}
              key={route.name}
              element={
                <ProtectedRoute authorization={authorization(route)}>
                  <route.component />
                </ProtectedRoute>
              }
            />
          ) : (
            <Route
              index={route?.index}
              path={typeof route.path ? route.path : ""}
              key={route.name}
              element={
                Array.isArray(route.path) ? <Route path={path} element={<route.component />} /> : <route.component />
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
};
