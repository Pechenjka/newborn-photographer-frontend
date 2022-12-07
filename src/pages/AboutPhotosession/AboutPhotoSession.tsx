import React, { useEffect } from "react";
import Styles from "./style.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { TabsAboutPhotoSession } from "./components/TabsAboutPhotoSession";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Link } from "react-router-dom";
import { getTextOnPage } from "../../redux/Reducers/editorSlice";
import { MetaData } from "../../helpers/MetaData";

export const AboutPhotoSession: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.user);

  useEffect(() => {
    dispatch(getTextOnPage());
  }, []);

  return (
    <section className={Styles.aboutPhotoSession}>
      <BackgroundImage />
      {user.role.includes("ADMIN") && (
        <Link to="/editor" className={Styles.aboutPhotoSession__linkOnEditor}>
          Добавить текст
        </Link>
      )}
      <div className={Styles.aboutPhotoSession__container}>
        <MetaData
          title="Как подготовиться к сьемке/фотосессии | Фотограф в Москве Алена Лобачева"
          description="Инструкция, в которой я подробно рассказываю о подготовке к фотосессии, помогаю советом в подборке образов, где лучше проводить фотосессию и много другой полезной информации."
          canonicalLink="https://alenalobacheva.net/aboutPhotosession/"
        />
        <h1 className={Styles.aboutPhotoSession__title}>Как подготовиться к съемке</h1>
          <TabsAboutPhotoSession />
      </div>
    </section>
  );
};
