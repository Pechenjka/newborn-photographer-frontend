import "./Contacts.scss";
import React, { Fragment } from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import ContactMeForm from "../../components/ContactMeForm/ContactMeForm";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import MyContacts from "../../components/MyContacts/MyContacts";
import { useLocation } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";
import { useTranslation } from "react-i18next";

const Contacts: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  return (
    <Fragment>
      <MetaData
        title="My contacts | Newborn photographer in New York Alena Lobacheva"
        description="Do you have question about photo session? Here you can always be in touch with me."
        canonicalLink={`https://alenalobacheva.net${pathname}`}
      />
      <BackgroundImage />
      <section className="contacts">
        <h1 className="contacts__title">{t("contacts title")}</h1>
        <MyContacts />
        <SocialLinks />
        <ContactMeForm title={t("contactMeForm title")} />
      </section>
    </Fragment>
  );
};

export default Contacts;
