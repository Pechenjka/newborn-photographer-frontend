import React, { Fragment, useEffect, useState } from "react";
import Styles from "./style.module.scss";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import classNames from "classnames/bind";
import { PropsDataTabs, PropsText } from "../../../../types";
import { Button } from "../../../../components/Button";
import { deleteTextBlock, handlerEditNote, handlerEditTextBlock } from "../../../../redux/Reducers/editorSlice";
import { useDisabledScroll } from "../../../../hooks/useDisabledScroll";
import { useLocation, useNavigate } from "react-router-dom";
import { MetaData } from "../../../../helpers/MetaData";
import JsonLd from "../../../../helpers/JsonLD";

export interface PropsTabsAboutPhotoSession {
  session: PropsDataTabs;
}

export const TabsAboutPhotoSession: React.FC<PropsTabsAboutPhotoSession> = ({ session }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { error, textBlock } = useAppSelector((state) => state.editor);
  const { user } = useAppSelector((state) => state.user);
  const [openNote, setOpenNote] = useState<boolean>(false);
  const { handlerDisabledScroll } = useDisabledScroll;
  const cx = classNames.bind(Styles);

  const StyleCoverContainerNote = cx("tabs__coverContainerNote", {
    tabs__coverContainerNote_open: openNote,
  });

  useEffect(() => {
    handlerDisabledScroll(openNote);
  }, [openNote]);

  const handlerOpenNoteTextBlock = (typeAboutPhotoSession: PropsText[], id: string) => {
    typeAboutPhotoSession.some((textBlock: PropsText) => {
      if (textBlock._id === id) dispatch(handlerEditTextBlock(textBlock));
    });
    setOpenNote(true);
  };

  const handlerCloseNoteTextBlock = (): void => {
    dispatch(handlerEditTextBlock({ text: "", _id: "", typePhotoSession: "" }));
    setOpenNote(false);
  };

  const handlerDeleteTExtBlock = (itemId: string): void => {
    dispatch(deleteTextBlock(itemId));
    setOpenNote(false);
  };

  const handleEditTextBlock = (): void => {
    setOpenNote(false);
    dispatch(handlerEditNote(true));
    navigate("/editor");
  };

  const webPageDataSession = {
    "@context": "http://schema.org",
    "@type": "WebPage",
    "@id": `https://alenalobacheva.com${pathname}#webpage-${session.labelName}`,
    name: session.metaTitle,
    description: session.metaDescription,
    image: "https://cdn.alenalobacheva.com/gallery/newborn/newborn-imageOG.webp",
    url: `https://alenalobacheva.com${pathname}`,
    potentialAction: {
      "@type": "ReadAction",
    },
  };

  const localBusinessDataSession = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://alenalobacheva.com${pathname}#localbusiness-${session.labelName}`,
    name: session.metaTitle,
    description: session.metaDescription,
    image: session.metaImage,
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

  const serviceDataSession = {
    "@context": "http://schema.org",
    "@type": "Service",
    "@id": `https://alenalobacheva.com${pathname}#service-${session.labelName}`,
    name: session.metaTitle,
    description: session.metaDescription,
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
  console.log(session.getText)
  return (
    <div className={Styles.tabs}>
      <JsonLd data={webPageDataSession} />
      <JsonLd data={localBusinessDataSession} />
      <JsonLd data={serviceDataSession} />
      <MetaData
        title={session.metaTitle}
        description={session.metaDescription}
        canonicalLink={`https://alenalobacheva.com${pathname}`}
        imageAltOG={session.metaImage}
        imageOG={session.metaImage}
        titleOG={session.metaTitle}
        descriptionOG={session.metaDescription}
      />
      <h1 className={Styles.tabs__title}>{`What you need to know for a ${session.nameSession} photo shoot`}</h1>
      <Fragment key={session.id}>
        <input className={Styles.tabs__radio} type="radio" name="tab" id={session.id} defaultChecked={true} />
        <label className={Styles.tabs__labelRadio} htmlFor={session.id} />
        <div className={Styles.tabs__content} id={session.idContent}>
          {error.getTextsAboutPhotoSession ? (
            <p>{error.getTextsAboutPhotoSession}</p>
          ) : (
            session.getText?.map((el: PropsText, index: number) => {
              const showTabs = textBlock?._id === el._id;
              return (
                <div className={Styles.tabs__textContainer} key={index}>
                  <div className={Styles.tabs__blockText} dangerouslySetInnerHTML={{ __html: el.text }} />
                  {user.role.includes("ADMIN") && (
                    <div className={Styles.tabs__noteContainer}>
                      <button
                        className={Styles.tabs__noteButton}
                        onClick={() => handlerOpenNoteTextBlock(session.getText, el._id)}
                      />
                      <div className={StyleCoverContainerNote} onClick={handlerCloseNoteTextBlock} />
                      <div className={`${Styles.tabs__note} ${showTabs && Styles.tabs__note_open}`}>
                        <Button styleButton="simply" type="button" onClick={handleEditTextBlock}>
                          Редактировать
                        </Button>
                        <Button styleButton="simply" type="button" onClick={() => handlerDeleteTExtBlock(el._id)}>
                          Удалить блок
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </Fragment>
    </div>
  );
};
