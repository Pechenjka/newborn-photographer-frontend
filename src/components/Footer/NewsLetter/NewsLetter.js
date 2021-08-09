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

  console.log(values.name)

  return (
    <div className="newsLetter">
      <form className="newsLetter__form" onSubmit={handleSubmit}>
        <fieldset className="newsLetter__form-fieldset">
          <label className="newsLetter__form-label">
            Интересна информация <br />
            об акциях и проектах?
          </label>
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
          <span className={`newsLetter__form-span ${(!isValid && values.email !== undefined) ? "newsLetter__form-span_notValid" : ""}`}  id="email-error">Пример: example@gmail.com</span>
        </fieldset>
      </form>
    </div>
  );
}

export default NewsLetter;
