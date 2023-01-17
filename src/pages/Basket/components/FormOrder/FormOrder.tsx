import Styles from "./style.module.scss";
import React, { Fragment } from "react";
import { IOrderFields, IPacketInOrder } from "../../../../types";
import { MyTextField } from "../../../../components/MyTextField";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { FormikFormComponent } from "../../../../components/FormikFormComponent";
import { Link } from "react-router-dom";
import BackgroundImage from "../../../../components/BackgroundImage/BackgroundImage";
import { Order } from "./components/Order";
import { handleConfirmSendOrder, newOrder } from "../../../../redux/Reducers/orderSlice";
import MessageToTheUser from "../../../../components/MessageToTheUser/MessageToTheUser";
import { validationSchemaOrderForm } from "../../../../validationForms";

export const FormOrder: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { packetInBasket } = useAppSelector((state) => state.packets);
  const { user } = useAppSelector((state) => state.user);
  const { loading, error, confirmSendOrder } = useAppSelector((state) => state.order);
  const initialValues: IOrderFields = {
    name: user.name,
    email: user.email,
    phone: user && user.phone ? user.phone : "",
    text: "",
  };

  const orderNumber = (): string => {
    const dataOrder = new Date();
    const orderNumber = Math.random().toString(16).slice(2);
    return `${dataOrder.getFullYear()}-${dataOrder.getMonth()}-${dataOrder.getDay()}-${orderNumber}`;
  };

  const packetsInOrder = packetInBasket.map((packet): IPacketInOrder => {
    const { namePacket, photosessionType, price } = packet;
    return { namePacket, photosessionType, price, link: "" };
  });

  const handleOrderNumber = orderNumber() as string;

  const handleSubmit = (values: { name: string; email: string; phone: string; text?: string }): void => {
    dispatch(
      newOrder({
        orderNumber: handleOrderNumber,
        packets: packetsInOrder,
        name: values.name,
        email: values.email,
        phone: values.phone,
        text: values.text,
      })
    );
  };

  const handleClick = (): void => {
    dispatch(handleConfirmSendOrder(false));
    navigate("/");
  };

  return (
    <Fragment>
      <BackgroundImage />
      <section className={Styles.formOrder}>
        {confirmSendOrder ? (
          <MessageToTheUser title="Заказ отправлен" onClose={handleClick} />
        ) : (
          <Fragment>
            <div className={Styles.formOrder__containerHeader}>
              <Link className={Styles.formOrder__linkBack} to="/basket">
                Вернуться в корзину
              </Link>
              <h3 className={Styles.formOrder__formTitle}>Оформление заказа</h3>
            </div>
            <div className={Styles.formOrder__containerOrder}>
              <Order orderData={packetsInOrder} title="Заказ" />
            </div>
            {error.newOrder ? (
              <p className={Styles.formOrder__formDescription_error}>{error.newOrder}</p>
            ) : (
              <p className={Styles.formOrder__formDescription}>
                Для оформления заказа, укажите ваши контактные данные!
              </p>
            )}

            <FormikFormComponent
              initialValues={initialValues}
              validationSchema={validationSchemaOrderForm}
              onSubmit={handleSubmit}
              buttonProps={{
                style: "ping",
                title: "Отправить заказ",
                editStyle: "buttonSubmitOrder",
                edit: true,
              }}
              styleForm="order"
              loading={loading.newOrder}
            >
              <MyTextField
                nameLabel="Имя"
                type="text"
                name="name"
                component="input"
                id="name"
                editStyleContainer="nameOrder"
                editStyleField="nameOrder"
              />
              <MyTextField
                nameLabel="Email"
                type="email"
                name="email"
                component="input"
                id="email"
                editStyleContainer="emailOrder"
                editStyleField="emailOrder"
              />
              <MyTextField
                nameLabel="Телефон"
                type="phone"
                name="phone"
                component="input"
                id="phone"
                editStyleContainer="telOrder"
                editStyleField="telOrder"
              />
              <MyTextField
                nameLabel="Сообщение"
                type="text"
                name="text"
                component="textarea"
                id="text"
                editStyleContainer="textOrder"
                editStyleField="textOrder"
                placeholder="Здесь можно написать комментарий к заказу"
              />
            </FormikFormComponent>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};
