import { Fragment } from "react";
import Header from "../Header/Header";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Instagram from "../Instagram/Instagram";
import Footer from "../Footer/Footer";
import Packets from "./Packets/Packets";

function Prices({ timerRef }) {
  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <BackgroundImage />
      <Packets />
      <Instagram />
      <Footer />
    </Fragment>
  );
}

export default Prices;
