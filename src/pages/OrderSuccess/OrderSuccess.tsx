import React from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./style.module.scss";
import { useAppDispatch } from "../../redux/hooks";
import { handleOrderSuccessfullySent } from "../../redux/Reducers/orderSlice";

export const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleBackHome = () => {
    dispatch(handleOrderSuccessfullySent(false));
    navigate("/");
  };

  return (
    <section className={Styles.orderSuccess}>
      <div className={Styles.orderSuccess__container}>
        <div className={Styles.orderSuccess__icon}>✓</div>
        <h1 className={Styles.orderSuccess__title}>Thank you for your order</h1>
        <p className={Styles.orderSuccess__text}>Your photo session request has been sent successfully.</p>
        <p className={Styles.orderSuccess__description}>
          I will contact you shortly to discuss your session details and scheduling.
        </p>
        <p className={Styles.orderSuccess__description}>
          A confirmation email has also been sent to your email address.
        </p>
        <button className={Styles.orderSuccess__button} onClick={handleBackHome}>
          Back to Home
        </button>
      </div>
    </section>
  );
};

export default OrderSuccess;
