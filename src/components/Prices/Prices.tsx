import React, { Fragment } from "react";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Packets from "./Packets/Packets";

const Prices: React.FC = () => {
  return (
    <Fragment>
      <BackgroundImage />
      <Packets />
    </Fragment>
  );
};

export default Prices;
