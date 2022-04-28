import "./NewsLetter.scss";
import newsLetterButtonIcon from "../../../images/newsLetter-button-icon.svg";
import useFormWithValidation from "../../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { sendEmail } from "../../../redux/Reducers/appSlice";
import InfoToolTip from "../../InfoToolTip/InfoToolTip";

const NewsLetter = () => {
  const dispatch = useDispatch();
  const { errorSendEmail, confirmationSendEmail } = useSelector((state) => state.app);
  const { values, isValid, resetForm, handleChange } = useFormWithValidation();

  const handlerSubmit = (evt) => {
    evt.preventDefault();
    dispatch(sendEmail({ data: values }));
    resetForm();
  };

  const handleDisplayInfoToolTip = () => {
    if (confirmationSendEmail) {
      return <InfoToolTip text="Подписка оформлена" />;
    }
    if (errorSendEmail) {
      return <InfoToolTip text="Произошла ошибка на сервере, попробуйте позже" />;
    }
  };

  return (
    <div className="newsLetter">
      <form className="newsLetter__form" onSubmit={handlerSubmit}>
        <fieldset className="newsLetter__form-fieldset">
          {handleDisplayInfoToolTip() || (
            <label className="newsLetter__form-label">
              Интересна информация <br />
              об акциях и проектах?
            </label>
          )}
          <input
            className="newsLetter__form-input"
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange}
            required
          />
          <button
            className={`newsLetter__form-button ${!isValid ? "newsLetter__form-button_disabled" : ""}`}
            type="submit"
            disabled={!isValid}
          >
            <img src={newsLetterButtonIcon} alt="лого кнопки" />
          </button>
          <span
            className={`newsLetter__form-span ${
              !isValid && values.email !== undefined ? "newsLetter__form-span_notValid" : ""
            }`}
            id="email-error"
          >
            Пример: example@gmail.com
          </span>
        </fieldset>
      </form>
    </div>
  );
};

export default NewsLetter;
