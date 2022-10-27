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
        title="Контактная информация"
        description="telegram: @newbornphoto_lobacheva, instagram: @newbornphoto_lobacheva, whatsApp: +7-926-936-11-10, email: newbornphoto_lobacheva@mail.ru"
        canonicalLink={`https://alenalobacheva.net${pathname}`}
      />
      <BackgroundImage />
      <section className="contacts">
        <MyContacts />
        <SocialLinks />
        <ContactMeForm title="Свяжитесь со мной" />
      </section>
    </Fragment>
  );
};

export default Contacts;
