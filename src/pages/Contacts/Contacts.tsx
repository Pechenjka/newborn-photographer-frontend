import "./Contacts.scss";
import React, { Fragment } from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import ContactMeForm from "../../components/ContactMeForm/ContactMeForm";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import MyContacts from "../../components/MyContacts/MyContacts";
import { useLocation } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";

const Contacts: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <MetaData
        title="Мои контакты | Фотограф новорожденных в Москве Алена Лобачева"
        description="Есть вопросы по выбору фотосесиии? Вы всегда можете связаться со мной."
        canonicalLink={`https://alenalobacheva.net${pathname}`}
      />
      <BackgroundImage />
      <section className="contacts">
        <h1 className='contacts__title'>Мои контакты</h1>
        <MyContacts />
        <SocialLinks />
        <ContactMeForm title="Напишите мне" />
      </section>
    </Fragment>
  );
};

export default Contacts;
