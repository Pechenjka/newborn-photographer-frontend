import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useLocation, Outlet } from "react-router-dom";
import { allRoutes } from "../router/config";
import { IRoute } from "../types";

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  const isAdminRoutes: (string | Array<string>)[] = allRoutes
    .filter((route: IRoute) => (route.isAdmin || route.withOutHeaderAndFooter) && route)
    .map((route) => `/${route.path}`);

  return (
    <section style={{ width: "100%", height: "100%" }}>
      {!isAdminRoutes.includes(pathname) && <Header />}
      <Outlet />
      {!isAdminRoutes.includes(pathname) && <Footer />}
    </section>
  );
};
