import "./PreLoader.scss";
import React from "react";

const PreLoader: React.FC = () => {
  return (
    <div id="loading-bar-spinner" className="spinner">
      <div className="spinner-icon"></div>
    </div>
  );
};

export default PreLoader;
