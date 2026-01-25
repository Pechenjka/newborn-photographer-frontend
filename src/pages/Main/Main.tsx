import React, { Fragment } from "react";
import "./Main.scss";
import PhotoGalleryOfTheMainPage from "./components/PhotoGalleryOfTheMainPage/PhotoGalleryOfTheMainPage";
// import PopularPackets from "../../components/PopularPackets/PopularPackets";
import { SliderComponent } from "../../components/SliderComponent";
import { MetaData } from "../../helpers/MetaData";
import { ComparePhotos } from "../../components/ComparePhotos";
import JsonLd from "../../helpers/JsonLD";
import { InvestmentOnMainPage } from "./components/InvestmentOnMainPage";

export const Main: React.FC = () => {
  const webSiteDataMain = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "@id": "https://alenalobacheva.com/#website-main",
    name: "Alena Lobacheva Photography | Charlotte Newborn Photographer",
    url: "https://alenalobacheva.com/",
    sameAs: [
      "https://www.instagram.com/lobachevaphotography/",
      "https://www.facebook.com/Alen4ikLobacheva?mibextid=9R9pXO",
      "https://www.tiktok.com/@lobachevaphotography/",
    ],
  };

  const webPageDataMain = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": "https://alenalobacheva.com/#webpage-main",
    name: "Alena Lobacheva Photography | Newborn Photography in Charlotte, NC",
    description:
      "Professional Photographer in Charlotte, NC, specializing in Newborn, Family, Baby, Maternity, Christening, and Lifestyle Photography. Book your in-home session.",
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn16.webp",
    url: "https://alenalobacheva.com/",
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessDataMain = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://alenalobacheva.com/#localbusiness-main",
    name: "Alena Lobacheva Photography",
    description:
      "Photographer in Charlotte, NC, specializing in Newborn, Family, Baby, Maternity, Christening, and Lifestyle. Book your in-home session.",
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn11.webp",
    url: "https://alenalobacheva.com/",
    telephone: "+1-516-468-4837", // Если номер не меняется, можно оставить
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
        latitude: "35.2271",   // Центр Шарлотты, NC
        longitude: "-80.8431",
      },
      geoRadius: "50.0", // Радиус в км, можно уменьшить, т.к. область меньше чем в предыдущем варианте
    },
    sameAs: [
      "https://www.instagram.com/lobachevaphotography/",
      "https://www.facebook.com/Alen4ikLobacheva?mibextid=9R9pXO",
      "https://www.tiktok.com/@lobachevaphotography/",
    ],
  };

  return (
    <Fragment>
      <JsonLd data={webSiteDataMain} />
      <JsonLd data={webPageDataMain} />
      <JsonLd data={localBusinessDataMain} />
      <MetaData
        title="Alena Lobacheva Photography | Charlotte Newborn Photographer"
        description="Photographer in Charlotte, NC specializing in Newborn, Family, Baby, Maternity, Christening, and Lifestyle. Book your in-home session."
        imageOG="https://cdn.alenalobacheva.com/gallery/newborn/newborn11.webp"
        imageAltOG="Newborn Photography"
        titleOG="Alena Lobacheva Photography | Charlotte Newborn Photographer"
        descriptionOG="Photographer in Charlotte, NC specializing in Newborn, Family, Baby, Maternity, Christening, and Lifestyle. Book your in-home session."
        canonicalLink="https://alenalobacheva.com/"
      />
      <main className="main">
        <SliderComponent />
        <PhotoGalleryOfTheMainPage />
        <InvestmentOnMainPage />
        <ComparePhotos />
        {/*<PopularPackets editStyleForPrice={window.innerWidth < 768 && true} />*/}
      </main>
    </Fragment>
  );
};
