import "./Contacts.scss";
import React, { Fragment } from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import ContactMeForm from "../../components/ContactMeForm/ContactMeForm";
import SocialLinks from "../../components/SocialLinks/SocialLinks";
import MyContacts from "../../components/MyContacts/MyContacts";

const Contacts: React.FC = () => {

  return (
    <Fragment>
      <BackgroundImage />
      <section className="contacts">
        <MyContacts />
        <SocialLinks />
        <ContactMeForm
          title="Свяжитесь со мной"
        />
      </section>
    </Fragment>
  );
};

export default Contacts;
