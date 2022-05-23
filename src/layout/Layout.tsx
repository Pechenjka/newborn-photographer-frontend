import React, { useRef } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RouterComponent from "../router/RouterComponent";

const Layout: React.FC = () => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <section>
      <Header timerRef={timerRef} />
      <RouterComponent timerRef={timerRef} />
      <Footer />
    </section>
  );
};

export default Layout;
