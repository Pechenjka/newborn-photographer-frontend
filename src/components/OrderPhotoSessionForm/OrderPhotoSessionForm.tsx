import React from "react";
import "./OrderPhotoSessionForm.scss";
import logo from "../../images/logo-header-photographer.png";
import Spinner from "../Spinner/Spinner";
import { useAppSelector } from "../../redux/hooks";
import { PropsOrderPhotoSessionForm } from "../../types";
import Button from "../Button/Button";

const OrderPhotoSessionForm: React.FC<PropsOrderPhotoSessionForm> = (props) => {
  const { loading } = useAppSelector((state) => state.app);
  const { values, errors, isValid, handleChange, onClose, onSubmit, dataOrder } = props;

  return (
    <div className="orderForm" onClick={(event) => event.stopPropagation()}>
      <button className="orderForm__closeButton" aria-label="Закрытие модального окна" onClick={onClose} />
      <img className="orderForm__logo" src={logo} alt="лого фотографа" />
      <div className="orderForm__container">
        <h3 className="orderForm__title">Оформление заказа</h3>
        <div className="orderForm__list-order">
          <table className="orderForm__order-table table-order">
            <thead>
              <tr className="table-order__header-container">
                <th className="table-order__header">Категория</th>
                <th className="table-order__header">Пакет</th>
                <th className="table-order__header">Стоимость</th>
                <th className="table-order__header">Кол-во образов</th>
              </tr>
            </thead>
            <tbody>
              <tr className="table-order__row-container">
                <td className="table-order__row">{dataOrder.type}</td>
                <td className="table-order__row">{dataOrder.title}</td>
                <td className="table-order__row">{dataOrder.price}</td>
                <td className="table-order__row">{dataOrder.location}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="orderForm__form-container">
          <h3 className="orderForm__form-title">Ваши данные</h3>
          <form className="orderForm__form" onSubmit={onSubmit} noValidate>
            <fieldset className="orderForm__fieldset">
              <input
                type="text"
                name="name"
                className="orderForm__input orderForm__input_name"
                value={values.name || ""}
                placeholder="Имя"
                onChange={handleChange}
                id="name"
                minLength={2}
                required
              />
              <span className="orderForm__span orderForm__span_name" id="name-error">
                {errors.name}
              </span>
              <input
                type="email"
                name="email"
                className="orderForm__input orderForm__input_email"
                value={values.email || ""}
                placeholder="Email"
                onChange={handleChange}
                id="email"
                required
              />
              <span className="orderForm__span orderForm__span_email" id="email-error">
                {errors.email}
              </span>
              <input
                type="tel"
                name="tel"
                className="orderForm__input orderForm__input_phone"
                value={values.tel || ""}
                placeholder="Телефон"
                onChange={handleChange}
                id="tel"
                required
              />
              <span className="orderForm__span orderForm__span_phone" id="tel-error">
                {errors.tel}
              </span>
              <textarea
                className="orderForm__textarea"
                name="text"
                id="text"
                placeholder="Сообщение"
                onChange={handleChange}
                value={values.text || ""}
              />
              <span className="orderForm__span orderForm__span_textarea">{errors.text}</span>
            </fieldset>
            <Button styleButton='ping' type='submit' disabled={!isValid} editStyle='buttonOrder' edit>{loading ? <Spinner /> : "Отправить"}</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OrderPhotoSessionForm;
