import React from "react";
import Styles from "./style.module.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { TabsAboutPhotoSession } from "./components/TabsAboutPhotoSession";
import { useAppSelector } from "../../redux/hooks";
import { Link, useLocation } from "react-router-dom";

import { MetaData } from "../../helpers/MetaData";

export const AboutPhotoSession: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();
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
          title="How to be ready for a photo session | Family photographer Alena Lobacheva"
          description="This guide includes all necessary information regarding the preparation for the photo shoot"
          canonicalLink={`https://alenalobacheva.net${pathname}`}
        />
        <h1 className={Styles.aboutPhotoSession__title}>Как подготовиться к съемке</h1>
        <TabsAboutPhotoSession />
      </div>
    </section>
  );
};
