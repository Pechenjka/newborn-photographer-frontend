import "./ContactMeForm.scss";

function ContactMeForm(props) {
  const { onChange, onSubmit, title, values, errors, isValid } = props;
  console.log(errors.tel);
  return (
    <div className="contactMeForm">
      <h3 className="contactMeForm__title">{title}</h3>
      <form className="contactMeForm__form form" onSubmit={onSubmit}>
        <fieldset className="form__fieldset">
          <label
            className={`form__label form__label_required ${errors.name === "" ? "form__label_required_true" : ""}`}
            for="name"
          >
            Имя
          </label>
          <input
            className="form__input"
            type="text"
            name="name"
            id="name"
            minLength="2"
            required
            onChange={onChange}
            value={values.name || ""}
          />
          <span className="form__span" id="text-name">
            {errors.name}
          </span>
          <label
            className={`form__label form__label_required ${errors.email === "" ? "form__label_required_true" : ""}`}
            for="email"
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
          <label className="form__label" for="tel">
            Телефон
          </label>
          <input className="form__input" type="tel" name="tel" id="tel" onChange={onChange} value={values.tel || ""} />
          <span className="form__span" id="tel-error">
            {errors.tel}
          </span>
          <label
            className={`form__label form__label_required ${errors.text === "" ? "form__label_required_true" : ""}`}
            for="text"
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
        <button
          className={`contactMeForm__button ${!isValid ? "contactMeForm__button_disabled" : ""}`}
          type="submit"
          disabled={!isValid}
        >
          Отправить
        </button>
      </form>
    </div>
  );
}

export default ContactMeForm;
