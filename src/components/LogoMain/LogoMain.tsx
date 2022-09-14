import React from "react";
import photographer from "../../images/logo-header-photographer.webp";

const LogoMain: React.FC = () => {
  return (
    <img
      className="mainLogo"
      style={{ width: "100%", height: "100%", display: "block" }}
      src={photographer}
      alt="лого фотографа"
    />
  );
};

export default LogoMain;
