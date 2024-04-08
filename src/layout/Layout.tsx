import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useLocation, Outlet } from "react-router-dom";
import { allRoutes } from "../router/config";
import { IRoute } from "../types";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  const isAdminRoutes: (string | Array<string>)[] = allRoutes
    .filter((route: IRoute) => (route.isAdmin || route.withOutHeaderAndFooter) && route)
    .map((route) => `/${route.path}`);

  return (
    <section style={{ width: "100%", height: "100%" }}>
      {!isAdminRoutes.includes(pathname) && <Header />}
      {(!pathname.startsWith('/admin') && pathname !== '/' ) && <BackgroundImage/>}
      <Outlet />
      {!isAdminRoutes.includes(pathname) && <Footer />}
    </section>
  );
};
