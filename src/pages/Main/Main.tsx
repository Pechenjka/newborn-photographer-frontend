import React, { Fragment, useEffect } from "react";
import "./Main.scss";
import PhotoGalleryOfTheMainPage from "./components/PhotoGalleryOfTheMainPage/PhotoGalleryOfTheMainPage";
// import PopularPackets from "../../components/PopularPackets/PopularPackets";
import { SliderComponent } from "../../components/SliderComponent";
import { MetaData } from "../../helpers/MetaData";
// import { AboutNewborn } from "./components/AboutNewborn";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
//import { getPacketsPinned } from "../../redux/Reducers/packetSlice";
import { Instagram } from "../../components/Instagram";
import { handleGetInstagramProfile } from "../../redux/Reducers/appSlice";
import { ComparePhotos } from "../../components/ComparePhotos";
import JsonLd from "../../helpers/JsonLD";
import { InvestmentOnMainPage } from "./components/InvestmentOnMainPage";

export const Main: React.FC = () => {
  const dispatch = useAppDispatch();
  // const { language } = useAppSelector((state) => state.app);

  useEffect(() => {
    //  dispatch(getPacketsPinned({ pinned: true }));
    dispatch(handleGetInstagramProfile());
  }, []);


  const webSiteDataMain = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "@id": "https://alenalobacheva.com/#website-main",
    name: "Alena Lobacheva Photography | NYC Newborn Photographer",
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
    name: "Alena Lobacheva Photography | Newborn Photography in New York, NY",
    description:
      "Professional Photographer in NYC, specializing in Newborn, Family, Baby, Maternity, Christening, and Lifestyle Photography. Book your in-home session",
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
      "Professional Photographer in NYC, specializing in Newborn, Family, Baby, Maternity, Christening, and Lifestyle Photography. Book your in-home session",
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn11.webp",
    url: "https://alenalobacheva.com/",
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
      <JsonLd data={webSiteDataMain} />
      <JsonLd data={webPageDataMain} />
      <JsonLd data={localBusinessDataMain} />
      <MetaData
        title="Alena Lobacheva Photography | NYC Newborn Photographer"
        description="Professional Photographer in New York City, specializing in Newborn, Family, Baby, Maternity, Christening, and Lifestyle Photography. Book your in-home session"
        imageOG="https://cdn.alenalobacheva.com/gallery/newborn/newborn11.webp"
        imageAltOG="Newborn Photography"
        titleOG="Alena Lobacheva Photography | NYC Newborn Photographer"
        descriptionOG="Professional Photographer in New York City, specializing in Newborn, Family, Baby, Maternity, Christening, and Lifestyle photography. Book your in-home session"
        canonicalLink="https://alenalobacheva.com/"
      />
      <main className="main">
        <SliderComponent />
        <PhotoGalleryOfTheMainPage />
        <InvestmentOnMainPage />
        <ComparePhotos />
        <Instagram />
        {/*<PopularPackets editStyleForPrice={window.innerWidth < 768 && true} />*/}
      </main>
    </Fragment>
  );
};
