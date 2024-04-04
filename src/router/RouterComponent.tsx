import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useAppSelector } from "../redux/hooks";
import { allRoutes } from "./config";
import { IRoute } from "../types";
import { Layout } from "../layout";
import { BlogArticleDetails } from "../pages/Blog/components/BlogArticleDetails";

export const RouterComponent: React.FC = () => {
  const { pathname } = useLocation();
  const { auth } = useAppSelector((state) => state.user);
  const { basketIsNotEmpty } = useAppSelector((state) => state.packets);
  //temporaryroute.path
  const staff = true;

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
          ) : pathname.includes(route.path) && route.path === "blog/:url" ? (
            // Если маршрут соответствует "blog/:url", то передаем параметр :url в компонент BlogArticleDetails
            <Route
              index={route?.index}
              path={handleSubPath}
              key={route.path}
              element={<BlogArticleDetails />} // Передаем параметр :url
            />
          ) : (
            <Route index={route?.index} path={handleSubPath} key={route.path} element={<route.component />} />
          );
        })}
        <Route path="*" element={<Navigate to="not-found" />} />
      </Route>
    </Routes>
  );
};
