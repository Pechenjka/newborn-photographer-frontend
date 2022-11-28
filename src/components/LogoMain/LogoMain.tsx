import React from "react";
import photographer from "../../images/logo-header-photographer.webp";
import { Link } from "react-router-dom";

const LogoMain: React.FC = () => {
  return (
    <Link to='/'>
      <img
        className="mainLogo"
        style={{ width: "100%", height: "100%", display: "block" }}
        src={photographer}
        alt="logo-photographer"
      />
    </Link>
  );
};

export default LogoMain;
