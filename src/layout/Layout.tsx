import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { RouterComponent } from "../router";
import { useLocation } from "react-router-dom";
import { allRoutes } from "../router/config";
import { IRoute } from "../types";

export const Layout: React.FC = () => {
  const { pathname } = useLocation<string>();
  const isAdminRoutes: (string | Array<string>)[] = allRoutes
    .filter((route: IRoute) => (route.isAdmin || route.withOutHeaderAndFooter) && route)
    .map((route) => route.path);

  const withOutHeaderAndFooter: (string | Array<string>)[] = [...isAdminRoutes];

  return (
    <section style={{ width: "100%", height: "100%" }}>
      {!withOutHeaderAndFooter.includes(pathname) && <Header />}
      <RouterComponent />
      {!withOutHeaderAndFooter.includes(pathname) && <Footer />}
    </section>
  );
};
