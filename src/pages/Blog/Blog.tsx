import React, { Fragment, useEffect } from "react";
import Styles from "./style.module.scss";
import { BlogArticles } from "./components/BlogArticles";
import { useLocation } from "react-router-dom";
import JsonLd from "../../helpers/JsonLD";
import { MetaData } from "../../helpers/MetaData";
import { takeEraseArticleDetails } from "../../redux/Reducers/blogSlice";
import { useAppDispatch } from "../../redux/hooks";

export const Blog: React.FC = () => {
  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const webPageDataBlog = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#blog`,
    name: "Blog | Alena Lobacheva Photography",
    description:
      "Expert tips for newborn, family, maternity, and christening photography in Charlotte, Ballantyne, SouthPark, Weddington & Indian Land — best locations & advice.",
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp",
    url: `https://alenalobacheva.com${pathname}`,
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessDataBlog = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alenalobacheva.com${pathname}#blog`,
    name: "Blog | Alena Lobacheva Photography",
    description:
      "Expert tips for newborn, family, maternity, and christening photography in Charlotte, Ballantyne, SouthPark, Weddington & Indian Land — best locations & advice.",
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp",
    url: `https://alenalobacheva.com${pathname}`,
    telephone: "+1-516-468-4837",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Charlotte",
      addressRegion: "NC",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-516-468-4837",
      contactType: "customer support",
    },
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "35.2271",
        longitude: "-80.8431",
      },
      geoRadius: "50.0",
    },

    sameAs: [
      "https://www.instagram.com/lobachevaphotography/",
      "https://www.facebook.com/Alen4ikLobacheva?mibextid=9R9pXO",
      "https://www.tiktok.com/@lobachevaphotography/",
      "https://pin.it/7K3PuQTuv",
    ],
  };

  const serviceDataBlog = {
    "@context": "http://schema.org",
    "@type": "Service",
    "@id": `https://alenalobacheva.com${pathname}#blog`,
    name: "Blog | Alena Lobacheva Photography",
    description:
      "Expert tips for newborn, family, maternity, and christening photography in Charlotte, Ballantyne, SouthPark, Weddington & Indian Land — best locations & advice.",
    serviceType: "Photography",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "35.2271",
        longitude: "-80.8431",
      },
      geoRadius: "50.0",
    },
  };

  useEffect(() => {
    dispatch(
      takeEraseArticleDetails({
        title: "",
        url: "",
        imagePrev: "",
        typePhotoSession: "",
        // _id: "",
        createdAt: "",
        details: {
          images: [],
          description: "",
        },
      })
    );
  }, []);

  return (
    <Fragment>
      <JsonLd data={webPageDataBlog} />
      <JsonLd data={localBusinessDataBlog} />
      <JsonLd data={serviceDataBlog} />
      <MetaData
        title="Blog | Alena Lobacheva Photography"
        description="Expert tips for newborn, family, maternity, and christening photography in Charlotte, Ballantyne, SouthPark, Weddington & Indian Land — best locations & advice."
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageAltOG="blog photography"
        imageOG="https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp"
        titleOG="Blog | Alena Lobacheva Photography"
        descriptionOG="Expert tips for newborn, family, maternity, and christening photography in Charlotte, Ballantyne, SouthPark, Weddington & Indian Land — best locations & advice."
      />
      <div className={Styles.blog}>
        <h1 className={Styles.blog__title}>Photography Blog: Newborn, Family, Maternity & Baby Tips</h1>
        <BlogArticles />
      </div>
    </Fragment>
  );
};
