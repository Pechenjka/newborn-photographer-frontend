import React from "react";
import { Helmet } from "react-helmet-async";

interface PropsMetaData {
  title: string;
  description: string;
  canonicalLink?: string;
  imageOG?: string;
  imageAltOG?: string;
  titleOG?: string;
  descriptionOG?: string;
  type?: string;
}

export const MetaData: React.FC<PropsMetaData> = ({
  title,
  description,
  canonicalLink,
  type = "website",
  imageOG,
  imageAltOG,
  titleOG,
  descriptionOG,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={canonicalLink} />
      <meta name="description" content={description} />
      <meta property="og:image" content={imageOG} />
      <meta property="og:image:alt" content={imageAltOG} />
      <meta property="og:title" content={titleOG} />
      <meta property="og:description" content={descriptionOG} />
      <meta property="og:url" content={canonicalLink} />
      <meta property="og:type" content={type} />
    </Helmet>
  );
};
