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
      "In my blog, discover tips for capturing newborns, babies, families, maternity, and christenings. I'll share the best locations.",
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
      "In my blog, discover tips for capturing newborns, babies, families, maternity, and christenings. I'll share the best locations.",
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp",
    url: `https://alenalobacheva.com${pathname}`,
    telephone: "+1-516-468-4837",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York", // Город
      addressRegion: "NY", // Штат или регион
      addressCountry: "US", // Страна
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-516-468-4837", // Ваш номер телефона
      contactType: "customer support", // Тип контактной информации
    },
    geo: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.4251", // Широта вашего местоположения
        longitude: "74.0021", // Долгота вашего местоположения
      },
      geoRadius: "200.0", // Радиус области в километрах (примерно)
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
      "In my blog, discover tips for capturing newborns, babies, families, maternity, and christenings. I'll share the best locations.",
    serviceType: "Photography",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "40.4251",
        longitude: "74.0021",
      },
      geoRadius: "200.0",
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
        description="In my blog, discover tips for capturing newborns, babies, families, maternity, and christenings. I'll share the best locations."
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageAltOG="blog photography"
        imageOG="https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp"
        titleOG="Blog | Alena Lobacheva Photography"
        descriptionOG="In my blog, discover tips for capturing newborns, babies, families, maternity, and christenings. I'll share the best locations."
      />
      <div className={Styles.blog}>
        <h1 className={Styles.blog__title}>Blog</h1>
        <BlogArticles />
      </div>
    </Fragment>
  );
};
