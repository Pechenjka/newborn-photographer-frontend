import React from "react";
import "./NewsLetter.scss";
import newsLetterButtonIcon from "../../../../../images/newsLetter-button-icon.svg";
import useFormWithValidation from "../../../../../hooks/useForm";
import { sendEmail } from "../../../../../redux/Reducers/appSlice";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { ShowInfoToolTip } from "../../../../../components/ShowInfoToolTip";

const NewsLetter: React.FC = () => {
  const dispatch = useAppDispatch();

  const { errorSendEmail, confirmationSendEmail } = useAppSelector((state) => state.app);
  const { values, isValid, resetForm, handleChange } = useFormWithValidation();

  const handlerSubmit = (evt: React.FormEvent): void => {
    evt.preventDefault();
    dispatch(sendEmail({ data: values }));
    resetForm();
  };

  return (
    <div className="newsLetter">
      <form className="newsLetter__form" onSubmit={handlerSubmit}>
        <fieldset className="newsLetter__form-fieldset">
          {errorSendEmail || confirmationSendEmail ? (
            <ShowInfoToolTip
              confirmation={confirmationSendEmail}
              error={errorSendEmail}
              textConfirmMessage="Подписка оформлена"
              textErrorMessage="Произошла ошибка на сервере, попробуйте позже"
            />
          ) : (
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
            <img className="newsLetter__form-button_icon" src={newsLetterButtonIcon} alt="лого кнопки" />
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
