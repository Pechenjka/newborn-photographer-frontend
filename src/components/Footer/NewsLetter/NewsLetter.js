import "./NewsLetter.scss";
import newsLetterButtonIcon from "../../../images/newsLetter-button-icon.svg";
import useFormWithValidation from "../../../hooks/useForm";
import { useDispatch } from "react-redux";
import { handleNewsLetter } from "../../../redux/Actions/userAction";

function NewsLetter() {
  const dispatch = useDispatch();
  const { values, isValid, resetForm, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(handleNewsLetter(values));
    resetForm();
  };

  return (
    <div className="footer__newsLetter">
      <form className="footer__newsLetter-form" onSubmit={handleSubmit}>
        <fieldset className="footer__newsLetter-form-fieldset">
          <label className="footer__newsLetter-form-label">
            Интересна информация <br />
            об акциях и проектах?
          </label>
          <input
            className={`footer__newsLetter-form-input ${!isValid ? "footer__newsLetter-form-input_unValid" : ""}`}
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={values.email || ""}
            onChange={handleChange}
            maxLength="30"
          />
          <button className="footer__newsLetter-form-button" type="submit">
            <img src={newsLetterButtonIcon} alt="лого кнопки" />
          </button>
          <span className="footer__newsLetter-form-span">Пример: example@gmail.com</span>
        </fieldset>
      </form>
    </div>
  );
}

export default NewsLetter;
