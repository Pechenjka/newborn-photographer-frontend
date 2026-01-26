import React, { Fragment, useEffect } from "react";
import Styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { Navigate, useLocation, useParams } from "react-router-dom";
import { fetchArticleDetail, takeEraseArticleDetails } from "../../../../redux/Reducers/blogSlice";
import { BackLink } from "../../../../components/BackLink";
import { motion } from "framer-motion";
import { CreatedAtArticle } from "../CreatedAtArticle/createdAtArticle";
import JsonLd from "../../../../helpers/JsonLD";
import { MetaData } from "../../../../helpers/MetaData";
import PreLoader from "../../../../components/PreLoader/PreLoader";
import { ShareTo } from "../../../../components/ShareTo";

export const BlogArticleDetails: React.FC = () => {
  const { pathname } = useLocation();
  const { url } = useParams<{ url: string }>();
  const dispatch = useAppDispatch();
  const { articleDetails, loading } = useAppSelector((state) => state.blog);
  console.log(pathname, url, articleDetails);
  useEffect(() => {
    dispatch(fetchArticleDetail(url));
  }, [url, dispatch]);

  const formattedDate = new Date(articleDetails.createdAt).toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const webPageDataBlogArticle = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#blog-article`,
    name: `${articleDetails?.title}`,
    description: `Article about ${articleDetails?.typePhotoSession} photo session, published on ${formattedDate}`,
    image: `${articleDetails?.imagePrev}`,
    url: `https://alenalobacheva.com${pathname}`,
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessBlogArticle = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alenalobacheva.com${pathname}#blog-article`,
    name: `${articleDetails?.title}`,
    description: `Article about ${articleDetails?.typePhotoSession} photo session, published on ${formattedDate}`,
    image: `${articleDetails?.imagePrev}`,
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
      "https://pin.it/7K3PuQTuv",
    ],
  };

  const serviceDataBlogArticle = {
    "@context": "http://schema.org",
    "@type": "Service",
    "@id": `https://alenalobacheva.com${pathname}#blog-article`,
    name: `${articleDetails?.title}`,
    description: `Article about ${articleDetails?.typePhotoSession} photo session, published on ${formattedDate}`,
    serviceType: "Photography",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "41.379748941510286",
        longitude: "-81.43406290994038",
      },
      geoRadius: "200.0",
    },
  };

  const onClickButtonBack = () => {
    dispatch(
      takeEraseArticleDetails({
        title: "",
        url: "",
        imagePrev: "",
        typePhotoSession: "",
        createdAt: "",
        details: {
          images: [],
          description: "",
        },
      })
    );
  };

  if (loading.getArticleDetail) {
    return <PreLoader />;
  }

  return (
    <Fragment>
      <JsonLd data={webPageDataBlogArticle} />
      <JsonLd data={localBusinessBlogArticle} />
      <JsonLd data={serviceDataBlogArticle} />
      <MetaData
        title={`${articleDetails?.title}`}
        description={`Article about ${articleDetails?.typePhotoSession} photo session, published on ${formattedDate}`}
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageAltOG="blog photography"
        imageOG={articleDetails?.imagePrev}
        type="article"
        titleOG={`${articleDetails?.title}`}
        descriptionOG={`Article about ${articleDetails?.typePhotoSession} photo session, published on ${formattedDate}`}
      />
      {articleDetails ? (
        <div className={Styles.blogArticleDetails}>
          <div className={Styles.blogArticleDetails__linkBackContainer}>
            <BackLink linkName="back" path="/blog" onClick={onClickButtonBack} />
            <ShareTo articleDetails={articleDetails} />
          </div>
          <h1 className={Styles.blogArticleDetails__title}>{articleDetails?.title}</h1>
          <motion.div className={Styles.blogArticleDetails__titleUnderLine} />
          <h2 className={Styles.blogArticleDetails__typePhotoSession}>{`${articleDetails?.typePhotoSession}`}</h2>
          <div className={Styles.blogArticleDetails__typeContainer}>
            <CreatedAtArticle createdAt={articleDetails?.createdAt} />
          </div>
          <div
            className={Styles.blogArticleDetails__descriptionContainer}
            dangerouslySetInnerHTML={{ __html: articleDetails?.details.description }}
          />
          <ul className={Styles.blogArticleDetails__imagesContainer}>
            {articleDetails?.details.images.map((image: string, index: number) => {
              return (
                <img
                  className={Styles.blogArticleDetails__image}
                  src={image}
                  alt={`${articleDetails?.title}, image-${index + 1}`}
                  key={index}
                />
              );
            })}
          </ul>
        </div>
      ) : (
        <Navigate to="not-found" />
      )}
    </Fragment>
  );
};
