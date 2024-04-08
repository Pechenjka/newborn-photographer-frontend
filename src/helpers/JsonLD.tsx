import React, { useEffect } from "react";

const JsonLd: React.FC<{ data: any }> = ({ data }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
};

export default JsonLd;
