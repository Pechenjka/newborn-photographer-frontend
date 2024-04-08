import React from "react";
import Styles from "./style.module.scss";
import { useLocation } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";
import { SessionArticle } from "./components/SessionArticle";
import JsonLd from "../../helpers/JsonLD";

export const AboutPhotoSession: React.FC = () => {
  const { pathname } = useLocation();

  const article = [
    {
      imgLink: "https://cdn.alenalobacheva.com/staticPhotos/aboutPhotoSession/newborn-session.webp",
      imgLinkMobile: "https://cdn.alenalobacheva.com/staticPhotos/aboutPhotoSession/newborn-session-mobile.webp",
      imgLinkMobile1: "https://cdn.alenalobacheva.com/staticPhotos/aboutPhotoSession/newborn-session-mobile-1.webp",
      title: "Newborn session",
      description:
        "Discover our professional tips and recommendations for capturing photographs of your newborn. From determining the optimal shooting time to creating a cozy atmosphere, our guide covers all aspects necessary for creating unforgettable and endearing newborn photos. Immerse yourself in the world of delicate poses and adorable moments with our Newborn Photography Recommendations.",
      nameLink: "Newborn",
      path: "/newborn-session",
      link: "Read more about newborn session",
      gradientDirection: "to-left",
    },
    {
      imgLink: "https://cdn.alenalobacheva.com/staticPhotos/aboutPhotoSession/family-session.webp",
      imgLinkMobile: "https://cdn.alenalobacheva.com/staticPhotos/aboutPhotoSession/family-session-mobile.webp",
      imgLinkMobile1: "https://cdn.alenalobacheva.com/staticPhotos/aboutPhotoSession/family-session-mobile-1.webp",
      title: "Family session",
      description:
        "Welcome to the world of creating everlasting family memories with our Family Photo shoot Guide. Our valuable tips on choosing the perfect location, coordinating outfits, and capturing authentic moments will help you create unique family photos. Let this guide be your companion in crafting a photo shoot that eloquently tells your story.",
      nameLink: "Family",
      path: "/family-session",
      link: "Read more about family session",
      gradientDirection: "to-right",
    },
  ];

  const webPageDataAboutSessions = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#webpage-aboutSessions`,
    name: "How to be ready for a session | Alena Lobacheva Photography, NY",
    description: "This guide includes all necessary information regarding the preparation for the photo session",
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp",
    url: `https://alenalobacheva.com${pathname}`,
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessDataAboutSessions = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alenalobacheva.com${pathname}#localbusiness-aboutSessions`,
    name: "How to be ready for a session | Alena Lobacheva Photography",
    description: "This guide includes all necessary information regarding the preparation for the photo session",
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

  const serviceDataAboutSessions = {
    "@context": "http://schema.org",
    "@type": "Service",
    "@id": `https://alenalobacheva.com${pathname}#service-aboutSessions`,
    name: "How to be ready for a session | Alena Lobacheva Photography",
    description: "This guide includes all necessary information regarding the preparation for the photo session",
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

  return (
    <section className={Styles.aboutPhotoSession}>
      <JsonLd data={webPageDataAboutSessions} />
      <JsonLd data={localBusinessDataAboutSessions} />
      <JsonLd data={serviceDataAboutSessions} />
      <MetaData
        title="How to be ready for a session | Alena Lobacheva Photography"
        description="This guide includes all necessary information regarding the preparation for the photo session"
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageAltOG="https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp"
        imageOG="https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp"
        titleOG="How to be ready for a photo session | Alena Lobacheva Photography"
        descriptionOG="This guide includes all necessary information regarding the preparation for the photo session"
      />
      <div className={Styles.aboutPhotoSession__container}>
        <h1 className={Styles.aboutPhotoSession__title}>Preparing a successful photo session</h1>
        {article.map((article) => {
          return <SessionArticle article={article} key={article.nameLink} />;
        })}
      </div>
    </section>
  );
};
