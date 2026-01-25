import "./PhotoGallery.scss";
import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Photos from "../../components/Photos/Photos";
import { photosCategoryInGallery } from "../../utils/config";
import { motion } from "framer-motion";
import {
  fetchPhotos,
  handlerShowAddPhotos,
  handlerOpenChangeSortPhotos,
  saveChangeSortPhotos,
  getPhotoCategories,
} from "../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { ICategory, IPhoto, PhotoPostPage } from "../../types";
import { Button } from "../../components/Button";
import PreLoader from "../../components/PreLoader/PreLoader";
import { MetaData } from "../../helpers/MetaData";
import { animationTitleCategory } from "../../helpers/framerMotion";
import JsonLd from "../../helpers/JsonLD";
import { useWindowResize } from "../../hooks/useWindowResize";

const PhotoGallery: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { width } = useWindowResize();
  const { showPhotos, getPhotos, loading, error, openChangeSortPhotos, photoCategories } = useAppSelector(
    (state) => state.photos
  );
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    photosCategoryInGallery.some((item: string) => {
      if (pathname.includes(item)) {
        dispatch(fetchPhotos({ type: item, order: "sort" }));
      }
    });
  }, [pathname]);

  useEffect(() => {
    dispatch(getPhotoCategories());
  }, []);

  const addPhotos = (photos: IPhoto[]): IPhoto[] => {
    if (width >= 1025) {
      return getPhotos.slice(0, photos.length + 4);
    }
    if (width >= 769) {
      return getPhotos.slice(0, photos.length + 3);
    }
    if (width >= 320) {
      return getPhotos.slice(0, photos.length + 2);
    }
    return getPhotos;
  };

  const handlerClickAddPhotos = (): void => {
    dispatch(handlerShowAddPhotos(addPhotos(showPhotos)));
  };

  const handlerHideButton = showPhotos.length === getPhotos.length;

  const handleChangeSortPhotos = (): void => {
    if (!openChangeSortPhotos) {
      dispatch(handlerOpenChangeSortPhotos(true));
    } else {
      dispatch(saveChangeSortPhotos(showPhotos));
      dispatch(handlerOpenChangeSortPhotos(false));
    }
  };

  const typePhoto: string = photosCategoryInGallery.filter((item) => pathname.includes(item) && item).join("");

  const webPageDataGallery = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#webpage-gallery`,
    name: `${typePhoto[0].toUpperCase() + typePhoto.slice(1)} Photography NC | Alena Lobacheva - ${
      typePhoto[0].toUpperCase() + typePhoto.slice(1)
    } Photographer in Charlotte`,
    description: `Magic of ${
      typePhoto[0].toUpperCase() + typePhoto.slice(1)
    } in Photography Gallery. Ready to capture your own beautiful moments? Book a ${
      typePhoto[0].toUpperCase() + typePhoto.slice(1)
    } session today`,
    image: `https://cdn.alenalobacheva.com/gallery/${typePhoto}/${typePhoto}-imageOG.webp`,
    url: `https://alenalobacheva.com${pathname}`,
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessDataGallery = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alenalobacheva.com${pathname}#localbusiness-gallery`,
    name: `${typePhoto[0].toUpperCase() + typePhoto.slice(1)} Photography NC | Alena Lobacheva - ${
      typePhoto[0].toUpperCase() + typePhoto.slice(1)
    } Photographer in Charlotte`,
    description: `Magic of ${
      typePhoto[0].toUpperCase() + typePhoto.slice(1)
    } in Photography Gallery. Ready to capture your own beautiful moments? Book a ${
      typePhoto[0].toUpperCase() + typePhoto.slice(1)
    } session today`,
    image: `https://cdn.alenalobacheva.com/gallery/${typePhoto}/${typePhoto}-imageOG.webp`,
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
        latitude: "35.2271", // Charlotte, NC
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

  return (
    <Fragment>
      <JsonLd data={webPageDataGallery} />
      <JsonLd data={localBusinessDataGallery} />
      <MetaData
        title={`${typePhoto[0].toUpperCase() + typePhoto.slice(1)} Photography | Alena Lobacheva Photographer Charlotte`}
        description={`Magic of ${
          typePhoto[0].toUpperCase() + typePhoto.slice(1)
        } in Photography Gallery. Ready to capture your own beautiful moments? Book a ${
          typePhoto[0].toUpperCase() + typePhoto.slice(1)
        } session today`}
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageOG={`https://cdn.alenalobacheva.com/gallery/${typePhoto}/${typePhoto}-imageOG.webp`}
        imageAltOG={`${typePhoto} photography`}
        titleOG={`${typePhoto[0].toUpperCase() + typePhoto.slice(1)} Photography NC | Alena Lobacheva - ${
          typePhoto[0].toUpperCase() + typePhoto.slice(1)
        } Photographer in Charlotte`}
        descriptionOG={`Magic of ${
          typePhoto[0].toUpperCase() + typePhoto.slice(1)
        } in Photography Gallery. Ready to capture your own beautiful moments? Book a ${
          typePhoto[0].toUpperCase() + typePhoto.slice(1)
        } session today`}
      />
      <motion.section className="photoGallery" id="photoGallery" initial="hidden" animate="visible">
        {photoCategories.map((item: ICategory, index: number) => {
          return (
            pathname.includes(item.title) && (
              <motion.h1 variants={animationTitleCategory} className="photoGallery__title" key={index}>
                {item.nameEN}
              </motion.h1>
            )
          );
        })}
        {loading ? (
          <div style={{ height: "1000px" }}>
            <PreLoader />
          </div>
        ) : (
          <>
            {user.role.includes("ADMIN") && (
              <Button styleButton="ping" type="button" onClick={handleChangeSortPhotos}>
                {!openChangeSortPhotos ? "Изменить последовательность фотографий" : "Сохранить"}
              </Button>
            )}
            {showPhotos?.length > 0 && (
              <Photos
                onClick={handlerClickAddPhotos}
                hide={handlerHideButton}
                photoPostPage={PhotoPostPage.photoGalleryPage}
                buttonName="Show more photos"
              />
            )}
          </>
        )}
        {error && <p>{error}</p>}
      </motion.section>
    </Fragment>
  );
};

export default PhotoGallery;
