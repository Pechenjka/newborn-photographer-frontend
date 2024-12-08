import "./AboutMe.scss";
import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";
import JsonLd from "../../helpers/JsonLD";

export const AboutMe: React.FC = () => {
  const { pathname } = useLocation();

  const webPageDataAboutMe = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#webpage-about`,
    name: "Professional Newborn Photographer in  Cleveland, Columbus, Solon | Alena Lobacheva",
    description:
      "I'm a Newborn, Family and Baby Photographer in Cleveland, Solon, Columbus. Let's prepare for your Photo Shoot together: choose the perfect outfits and a convenient location",
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
    name: "Newborn Photographer in Cleveland, Columbus, Solon, Alena Lobacheva",
    description:
      "I'm a Newborn, Family and Baby Photographer in Cleveland. Let's prepare for your Photo Shoot together: choose the perfect outfits and a convenient location",
    image: "https://cdn.alenalobacheva.com/staticPhotos/aboutMe-image.webp",
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
      <JsonLd data={webPageDataAboutMe}/>
      <JsonLd data={localBusinessDataAboutMe}/>
      <MetaData
        title="Professional Newborn Photographer in OHIO, NY | Alena Lobacheva"
        description="I'm a Newborn, Family and Baby Photographer in Cleveland, Pittsburgh. Let's prepare for your Photo Shoot together: choose the perfect outfits and a convenient location"
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageOG="https://cdn.alenalobacheva.com/staticPhotos/aboutMe-image.webp"
        imageAltOG="photography Alena Lobacheva"
        titleOG="Professional Newborn Photographer in OHIO, NY | Alena Lobacheva"
        descriptionOG="I'm a Newborn, Family and Baby Photographer in Cleveland. Let's prepare for your Photo Shoot together: choose the perfect outfits and a convenient location"
      />
      <section className="aboutMe">
        <div className="aboutMe__container">
          <img
            src='https://cdn.alenalobacheva.com/staticPhotos/aboutMe-image.webp'
            className="aboutMe__image"
            alt="photographer Alena Lobacheva"
            title="photographer Alena Lobacheva"
          />
          <h1 className="aboutMe__title">About Me</h1>
          <div className="aboutMe__text-container">
            <p className="aboutMe__text">My name is Alena Lobacheva and I am a professional newborn photographer.</p>
            <p className="aboutMe__text">Thank you for visiting  my site. I am very pleased that you paid attention to my work ♥.</p>
            <p className="aboutMe__text">I am a mother of a wonderful boy, who inspired me to take the shoots of newborn babies. Many thanks to him for this, because I am the happiest mother and I have the best job ever in the world!</p>
            <p className="aboutMe__text">I have more than seven years experience of working with babies. Every child has its own character and for all of them I can find the own approach. They are still so small, but each has its own great personality).</p>
            <p className="aboutMe__text">And no matter what the baby is, we always find a common language with each other, and the whole family gets inexpressible pleasure from the shooting process, and mothers are guaranteed to become owners of unique pictures for a long memory for themselves and their loved ones. Such shots are priceless, and I will be happy to capture your emotions filled with long-awaited happiness, love, caress and warmth of your tender embrace.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
