import React, { Fragment, useEffect, useState } from "react";
import Styles from "./style.module.scss";
import Packets from "../../components/Packets/Packets";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { getArrPackets, getPacketsCategories, handlerErrorGetArrPackets } from "../../redux/Reducers/packetSlice";
import { useLocation } from "react-router-dom";
import PreLoader from "../../components/PreLoader/PreLoader";
import { MetaData } from "../../helpers/MetaData";
import { framerMotionPhotosAndPackets, hiddenAndScale, hiddenUnderLine } from "../../helpers/framerMotion";
import { ICategory } from "../../types";
import { motion } from "framer-motion";
import { useWindowResize } from "../../hooks/useWindowResize";
import JsonLd from "../../helpers/JsonLD";
import NoteImportantPrices from "./components/NoteImportantPrices";

const Prices: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getPackets, packetsCategories, loading, error } = useAppSelector((state) => state.packets);
  const { pathname } = useLocation();
  const [typePhotosession, setTypePhotosession] = useState<string>("");

  useEffect(() => {
    dispatch(getPacketsCategories());
  }, []);

  useEffect(() => {
    if (getPacketsCategories.length > 0) {
      packetsCategories.map((category: ICategory) => {
        if (pathname.includes(category.title)) {
          dispatch(getArrPackets({ photosessionType: category.title }));
        }
      });
    } else {
      dispatch(handlerErrorGetArrPackets("Error, the package has not been uploaded!"));
    }
  }, [pathname, packetsCategories, dispatch]);

  const { width } = useWindowResize();
  const { container, item } = framerMotionPhotosAndPackets();

  const allType = {
    newborn: "newborn",
    baby: "baby",
    family: "family",
    christening: "christening",
    woman: "woman",
  };

  const handleTypePhotosession = (allType: any) => {
    for (let key in allType) {
      if (pathname.includes(key)) {
        setTypePhotosession(allType[key]);
      }
    }
  };

  useEffect(() => {
    if (pathname) handleTypePhotosession(allType);
  }, [pathname]);

  const sortPackets = [...getPackets].sort((a, b) => Number(a.price) - Number(b.price));

  const UpOneLetterPhotoSession =
    typePhotosession.length > 1 && typePhotosession[0].toUpperCase() + typePhotosession.slice(1);

  const webPageDataPrices = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#webpage-prices`,
    name: `Prices for ${UpOneLetterPhotoSession} photography | Charlotte ${UpOneLetterPhotoSession} Photographer, Alena Lobacheva`,
    description: `Discover the investment details for ${UpOneLetterPhotoSession} Photography: explore prices, packages, and conditions. Book your session with Alena Lobacheva Photography in North Carolina.`,
    image: `https://cdn.alenalobacheva.com/gallery/${typePhotosession}/${typePhotosession}3.webp`,
    url: `https://alenalobacheva.com${pathname}`,
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessDataPrices = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alenalobacheva.com${pathname}#localbusiness-prices`,
    name: `Charlotte ${UpOneLetterPhotoSession} Photographer, Alena Lobacheva`,
    description: `Discover the investment details for ${UpOneLetterPhotoSession} Photography: explore prices, packages, and conditions. Book your session with Alena Lobacheva Photography in Charlotte, NC.`,
    image: `https://cdn.alenalobacheva.com/gallery/${typePhotosession}/${typePhotosession}3.webp`,
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
      geoRadius: "200.0",
    },
    sameAs: [
      "https://www.instagram.com/lobachevaphotography/",
      "https://www.facebook.com/Alen4ikLobacheva?mibextid=9R9pXO",
      "https://www.tiktok.com/@lobachevaphotography/",
    ],
  };

  const serviceDataPrices = {
    "@context": "http://schema.org",
    "@type": "Service",
    "@id": `https://alenalobacheva.com${pathname}#service-prices`,
    name: `${UpOneLetterPhotoSession} Photography Sessions`,
    description: `Offering professional ${UpOneLetterPhotoSession} Photography sessions in Charlotte, Huntersville, Ballantyne, Weddington.`,
    serviceType: "Photography",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "35.2271",
        longitude: "-80.8431",
      },
      geoRadius: "200.0",
    },
  };

  const pricingTitles:Record<string, string> = {
    Newborn: "Newborn Photography Pricing and Session Packages",
    Baby: "Baby Photography Session Pricing and Packages",
    Family: "Family and Maternity Photography Packages and Pricing",
    Christening: "Christening Photography Prices and Booking Information",
  };
  
  return (
    <Fragment>
      <JsonLd data={webPageDataPrices} />
      <JsonLd data={localBusinessDataPrices} />
      <JsonLd data={serviceDataPrices} />
      <MetaData
        title={`Prices for ${UpOneLetterPhotoSession} Photography`}
        description={`Discover the investment details for ${UpOneLetterPhotoSession} Photography: explore prices, packages, and conditions. Book your session with Alena Lobacheva Photography in Cleveland, Solon`}
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageAltOG={`${UpOneLetterPhotoSession} Photography`}
        imageOG={`https://cdn.alenalobacheva.com/gallery/${typePhotosession}/${typePhotosession}3.webp`}
        titleOG={`Prices for ${UpOneLetterPhotoSession} Photography`}
        descriptionOG={`Discover the investment details for ${UpOneLetterPhotoSession} Photography: explore prices, packages, and conditions. Book your session with Alena Lobacheva Photography in Cleveland, Solon`}
      />
      <motion.section className={Styles.prices} initial="hidden" animate="visible">
        {packetsCategories.map((item: ICategory, index: number) => {
          const key =
            item.nameEN === "Family & Maternity"
              ? "Family"
              : item.nameEN;

          const matchedTitle = pricingTitles[key as keyof typeof pricingTitles];

          const pathMatches =
            item.title && pathname.includes(item.title.toLowerCase());

          return (
            pathMatches && matchedTitle && (
              <motion.h1
                variants={hiddenAndScale}
                custom={1}
                className={Styles.prices__title}
                key={index}
              >
                {matchedTitle}
              </motion.h1>
            )
          );
        })}
        {!loading.getArrPackets && (
          <motion.div
            className={Styles.prices__titleUnderLine}
            variants={hiddenUnderLine}
            custom={{ delay: 2, widthFull: width > 567 ? 500 : 320 }}
          />
        )}
        <div className={Styles.prices__container}>
          {loading.getArrPackets ? (
            <div style={{ gridColumn: "1/-1", marginTop: "50px" }}>
              <PreLoader />
            </div>
          ) : (
            (
              <>
                <Packets
                  getPackets={sortPackets}
                  item={item}
                  container={container}
                  styleContainer={Styles.prices__packets}
                />
              </>
            ) ||
            (error.packets && <p style={{ gridColumn: "1/-1" }}>{error.packets}</p>)
          )}
        </div>
        {getPackets.length > 0 && <NoteImportantPrices />}
      </motion.section>
    </Fragment>
  );
};

export default Prices;
