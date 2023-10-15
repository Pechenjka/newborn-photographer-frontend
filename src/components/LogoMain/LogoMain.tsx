import React from "react";
import logoPhotographer from "../../images/logo-header-photographer.webp";
import { Link } from "react-router-dom";

const LogoMain: React.FC = () => {
  return (
    <Link to="/" title="go to home page" aria-label="go to home page">
      <img
        className="mainLogo"
        style={{ width: "100%", height: "100%", display: "block" }}
        src={logoPhotographer}
        alt="logo photographer Alena Lobacheva"
      />
    </Link>
  );
};

export default LogoMain;
