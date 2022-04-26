import { Fragment } from "react";
import Header from "../Header/Header";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Footer from "../Footer/Footer";
import Packets from "./Packets/Packets";

function Prices({ timerRef }) {
  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <BackgroundImage />
      <Packets />
      <Footer />
    </Fragment>
  );
}

export default Prices;
