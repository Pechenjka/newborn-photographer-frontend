import React, { useEffect } from "react";
import { Route, Routes, useLocation, Navigate, } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useAppSelector } from "../redux/hooks";
import { allRoutes } from "./config";
import { IRoute } from "../types";
import { Layout } from "../layout";

export const RouterComponent: React.FC = () => {
  const { pathname } = useLocation();
  const { auth } = useAppSelector((state) => state.user);
  const { basketIsNotEmpty } = useAppSelector((state) => state.packets);
  //temporary
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
          const handleSubPath = Array.isArray(route.subPath)
            ? route.subPath.filter((item: string) => {
                return pathname.includes(item);
              })[0]
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
              path={route.path}
              key={route.name}
              element={
                <ProtectedRoute authorization={authorization(route)}>
                  <route.component />
                </ProtectedRoute>
              }
            />
          ) : (
            <Route index={route?.index} path={handleSubPath} key={route.path} element={<route.component />} />
          );
        })}
      </Route>
      <Route path="*" element={<Navigate to="not-found" />} />
    </Routes>
  );
};
