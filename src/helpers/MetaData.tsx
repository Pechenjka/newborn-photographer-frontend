import React from "react";
import { Helmet } from "react-helmet-async";

interface PropsMetaData {
  title: string;
  description: string;
  canonicalLink?: string;
}

export const MetaData: React.FC<PropsMetaData> = ({ title, description, canonicalLink }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalLink} />
    </Helmet>
  );
};
