import "./Contacts.scss";
import React, { Fragment } from "react";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import ContactMeForm from "../ContactMeForm/ContactMeForm";
import SocialLinks from "../SocialLinks/SocialLinks";
import MyContacts from "../MyContacts/MyContacts";
import useFormWithValidation from "../../hooks/useForm";
import { sendMessageGetInTouch } from "../../redux/Reducers/appSlice";
import { useAppDispatch } from "../../redux/hooks";

const Contacts: React.FC = () => {
  const dispatch = useAppDispatch();
  const { values, errors, isValid, handleChange, resetForm } = useFormWithValidation();

  const handlerSubmitGetInTouch = (evt: React.FormEvent): void => {
    evt.preventDefault();
    dispatch(sendMessageGetInTouch({ data: values }));
    resetForm();
  };

  return (
    <Fragment>
      <BackgroundImage />
      <section className="contacts anim-items">
        <MyContacts />
        <SocialLinks />
        <ContactMeForm
          onChange={handleChange}
          onSubmit={handlerSubmitGetInTouch}
          title={"Свяжитесь со мной"}
          values={values}
          errors={errors}
          isValid={isValid}
        />
      </section>
    </Fragment>
  );
};

export default Contacts;
