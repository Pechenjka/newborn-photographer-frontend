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
    name: "How to prepare for a photo session | Alena Lobacheva Photography",
    description: "This guide provides tips and useful insights on preparing for a photo session, whether it's for a newborn, baby, family, or maternity shoot.",
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
    name: "Alena Lobacheva Photography",
    description: "Photography services specializing in newborn, baby, maternity, and family sessions. Explore helpful information for preparing your photo shoot.",
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp",
    url: `https://alenalobacheva.com${pathname}`,
    telephone: "+1-516-468-4837",
    address: {
      "@type": "PostalAddress",
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
        latitude: "35.2271", // Центр Charlotte, NC
        longitude: "-80.8431",
      },
      geoRadius: "150.0",
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
    name: "Photography session preparation guide",
    description: "A detailed guide for clients to prepare for their upcoming photo shoot — including newborn, baby, family, and maternity sessions.",
    serviceType: "Photography",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "35.2271",
        longitude: "-80.8431",
      },
      geoRadius: "150.0",
    },
  };

  return (
    <section className={Styles.aboutPhotoSession}>
      <JsonLd data={webPageDataAboutSessions} />
      <JsonLd data={localBusinessDataAboutSessions} />
      <JsonLd data={serviceDataAboutSessions} />
      <MetaData
        title="How to prepare for a photo session | Alena Lobacheva Photography"
        description="Discover essential tips and expert advice to get ready for your upcoming photo session — from newborn and baby shoots to family and maternity photography."
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageAltOG="Preparation tips for your photo session"
        imageOG="https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp"
        titleOG="How to prepare for a photo session | Alena Lobacheva Photography"
        descriptionOG="Discover essential tips and expert advice to get ready for your upcoming photo session — from newborn and baby shoots to family and maternity photography."
      />
      <div className={Styles.aboutPhotoSession__container}>
        <h1 className={Styles.aboutPhotoSession__title}>How to successfully prepare for your upcoming photo session</h1>
        {article.map((article) => {
          return <SessionArticle article={article} key={article.nameLink} />;
        })}
      </div>
    </section>
  );
};
