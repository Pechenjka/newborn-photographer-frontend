import React, { Fragment } from "react";
import "./Contacts.scss";
import ContactMeForm from "../../components/ContactMeForm/ContactMeForm";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import MyContacts from "../../components/MyContacts/MyContacts";
import { useLocation } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";
import logoPhotographer from "../../images/logo-header-photographer.webp";
import JsonLd from "../../helpers/JsonLD";
import { Map } from "../../components/Map";

const Contacts: React.FC = () => {
  const { pathname } = useLocation();

  const webPageDataContacts = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#webpage-contactMe`,
    name: "Contact Alena Lobacheva | Cleveland, Solon, Newborn Photographer",
    description:
      "Have questions about a photo session? Stay in touch with me here at Alena Lobacheva Photography. Your queries are always welcome",
    image: "https://cdn.alenalobacheva.com/gallery/family/family-imageOG.webp",
    url: `https://alenalobacheva.com${pathname}`,
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessDataContacts = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alenalobacheva.com${pathname}#localbusiness-contactMe`,
    name: "Contact Alena Lobacheva | Cleveland, Solon, Newborn Photographer",
    description:
      "Professional photographer in OHIO, newborn photography, family photography, baby photography, maternity photography.",
    image: "https://cdn.alenalobacheva.com/gallery/family/family19.webp",
    url: `https://alenalobacheva.com${pathname}`,
    telephone: "+1-516-468-4837",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Solon", // Город
      addressRegion: "OH", // Штат или регион
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
        latitude: "41.379748941510286", // Широта вашего местоположения
        longitude: "-81.43406290994038", // Долгота вашего местоположения
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
      <JsonLd data={webPageDataContacts} />
      <JsonLd data={localBusinessDataContacts} />
      <MetaData
        title="Contact Alena Lobacheva | Cleveland, OHIO, Newborn Photographer"
        description="Have questions about a photo session? Stay in touch with me here at Alena Lobacheva Photography. Your queries are always welcome"
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageOG="https://cdn.alenalobacheva.com/gallery/family/family19.webp"
        imageAltOG="Family Photography"
        titleOG="Contact Alena Lobacheva | Cleveland, OHIO, Newborn Photographer"
        descriptionOG="Have questions about a photo session? Stay in touch with me here at Alena Lobacheva Photography. Your queries are always welcome"
      />
      <section className="contacts">
        <h1 className="contacts__title">
          Contact <br />
          <span className="contacts__title_span">Schedule your photo session today</span>
        </h1>
        <img
          className="contacts__logoAuth"
          src={logoPhotographer}
          width="283"
          height="80"
          alt="Alena Lobacheva photography"
          title="Alena Lobacheva photography"
        />
        <MyContacts />
        <SocialLinks />
        <ContactMeForm title="Get In Touch With Me" />
        <Map />
      </section>
    </Fragment>
  );
};

export default Contacts;
