import React from "react";
import "./ContactMeForm.scss";
import Spinner from "../Spinner/Spinner";
import { useAppSelector } from "../../redux/hooks";
import { PropsContactMeForm } from "../../types";
import Button from "../Button/Button";

const ContactMeForm: React.FC<PropsContactMeForm> = (props) => {
  const { onChange, onSubmit, title, values, errors, isValid } = props;
  const { loading } = useAppSelector((state) => state.app);
  return (
    <div className="contactMeForm">
      <h3 className="contactMeForm__title">{title}</h3>
      <form className="contactMeForm__form form" onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
          <label
            className={`form__label form__label_required ${errors.name === "" ? "form__label_required_true" : ""}`}
            htmlFor="name"
          >
            Имя
          </label>
          <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            minLength={2}
            required
            onChange={onChange}
            value={values.name || ""}
          />
          <span className="form__span" id="text-name">
            {errors.name}
          </span>
          <label
            className={`form__label form__label_required ${errors.email === "" ? "form__label_required_true" : ""}`}
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            required
            onChange={onChange}
            value={values.email || ""}
          />
          <span className="form__span" id="text-email">
            {errors.email}
          </span>
          <label className="form__label" htmlFor="tel">
            Телефон
          </label>
          <input className="form__input" type="tel" name="tel" id="tel" onChange={onChange} value={values.tel || ""} />
          <span className="form__span" id="tel-error">
            {errors.tel}
          </span>
          <label
            className={`form__label form__label_required ${errors.text === "" ? "form__label_required_true" : ""}`}
            htmlFor="text"
          >
            Ваше сообщение
          </label>
          <textarea
            className="form__textarea"
            name="text"
            id="text"
            onChange={onChange}
            value={values.text || ""}
            required
          />
          <span className="form__span" id="text-error">
            {errors.text}
          </span>
        </fieldset>
        <Button styleButton="ping" disabled={!isValid} type="submit" editStyle='buttonFormContact' edit>
          {loading ? <Spinner /> : "Отправить сообщение"}
        </Button>
      </form>
    </div>
  );
};

export default ContactMeForm;
