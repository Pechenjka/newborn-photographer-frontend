import "./AboutMe.scss";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";
import { useTranslation } from "react-i18next";
import JsonLd from "../../helpers/JsonLD";

export const AboutMe: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const webPageDataAboutMe = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#webpage-about`,
    name: "Professional Newborn Photographer in NY | Alena Lobacheva",
    description:
      "I'm a Newborn, Family and Baby Photographer in New York City. Let's prepare for your Photo Shoot together: choose the perfect outfits and a convenient location",
    image: "https://cdn.alenalobacheva.com/staticPhotos/aboutMe-image.webp",
    url: `https://alenalobacheva.com${pathname}`,
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessDataAboutMe = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alenalobacheva.com${pathname}#localbusiness-about`,
    name: "Newborn Photographer in NYC, Alena Lobacheva",
    description:
      "I'm a Newborn, Family and Baby Photographer in New York City. Let's prepare for your Photo Shoot together: choose the perfect outfits and a convenient location",
    image: "https://cdn.alenalobacheva.com/staticPhotos/aboutMe-image.webp",
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
    ],
  };

  return (
    <Fragment>
      <JsonLd data={webPageDataAboutMe}/>
      <JsonLd data={localBusinessDataAboutMe}/>
      <MetaData
        title="Professional Newborn Photographer in NY | Alena Lobacheva"
        description="I'm a Newborn, Family and Baby Photographer in New York City. Let's prepare for your Photo Shoot together: choose the perfect outfits and a convenient location"
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageOG="https://cdn.alenalobacheva.com/staticPhotos/aboutMe-image.webp"
        imageAltOG="photography Alena Lobacheva"
        titleOG="Professional Newborn Photographer in NY | Alena Lobacheva"
        descriptionOG="I'm a Newborn, Family and Baby Photographer in New York City. Let's prepare for your Photo Shoot together: choose the perfect outfits and a convenient location"
      />
      <section className="aboutMe">
        <div className="aboutMe__container">
          <img
            src='https://cdn.alenalobacheva.com/staticPhotos/aboutMe-image.webp'
            className="aboutMe__image"
            alt="photographer Alena Lobacheva"
            title="photographer Alena Lobacheva"
          />
          <h1 className="aboutMe__title">{t("aboutMe title")}</h1>
          <div className="aboutMe__text-container">
            <p className="aboutMe__text">{t("aboutMe part1")}</p>
            <p className="aboutMe__text">{t("aboutMe part2")}</p>
            <p className="aboutMe__text">{t("aboutMe part3")}</p>
            <p className="aboutMe__text">{t("aboutMe part4")}</p>
            <p className="aboutMe__text">{t("aboutMe part5")}</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
