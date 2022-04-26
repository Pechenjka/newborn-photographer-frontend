import "./Contacts.scss";
import { Fragment } from "react";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ContactMeForm from "../ContactMeForm/ContactMeForm";
import SocialLinks from "../SocialLinks/SocialLinks";
import MyContacts from "../MyContacts/MyContacts";
import {useDispatch} from "react-redux";
//import { handleGetInTouch } from "../../redux/Actions/userAction";
import useFormWithValidation from "../../hooks/useForm";

function Contacts({ timerRef }) {
  const dispatch = useDispatch();
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const handleSubmitGetInTouch = (evt) => {
    evt.preventDefault();
 //   dispatch(handleGetInTouch(resetForm, values));
  };

  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <BackgroundImage />
      <section className="contacts anim-items">
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
      </section>
      <Footer />
    </Fragment>
  );
}

export default Contacts;
