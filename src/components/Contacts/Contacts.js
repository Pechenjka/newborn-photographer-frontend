import "./Contacts.scss";
import { Fragment, useEffect } from "react";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Instagram from "../Instagram/Instagram";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ContactMeForm from "../ContactMeForm/ContactMeForm";
import SocialLinks from "../SocialLinks/SocialLinks";
import MyContacts from "../MyContacts/MyContacts";
import { useDispatch } from "react-redux";
import {
  handleGetInTouch,
  myContacts,
  openPopupConfirmationGetLetterFromTheUser,
} from "../../redux/Actions/userAction";
import useFormWithValidation from "../../hooks/useForm";

function Contacts({ timerRef }) {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  useEffect(() => {
    dispatch(myContacts());
  }, [dispatch]);

  const handleSubmitGetInTouch = (evt) => {
    evt.preventDefault();
    dispatch(handleGetInTouch(values));
    dispatch(openPopupConfirmationGetLetterFromTheUser());
    resetForm();
  };

  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <section className="contacts">
        <BackgroundImage />
        <MyContacts />
        <SocialLinks />
        <ContactMeForm
          onChange={handleChange}
          onSubmit={handleSubmitGetInTouch}
          title={"Свяжитесь со мной"}
          values={values}
          errors={errors}
          isValid={isValid}
        />
        <Instagram />
      </section>
      <Footer />
    </Fragment>
  );
}

export default Contacts;
