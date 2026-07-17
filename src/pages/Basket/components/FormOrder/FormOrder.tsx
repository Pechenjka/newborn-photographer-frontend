import Styles from "./style.module.scss";
import React, { Fragment } from "react";
import { IOrderFields, IPacketInOrder } from "../../../../types";
import { MyTextField } from "../../../../components/MyTextField";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { FormikFormComponent } from "../../../../components/FormikFormComponent";
import { Order } from "./components/Order";
import { newOrder } from "../../../../redux/Reducers/orderSlice";
import { validationSchemaOrderForm } from "../../../../validationForms";
import Spinner from "../../../../components/Spinner/Spinner";
import { BackLink } from "../../../../components/BackLink";
import { handlerDeletePacketFromBasket } from "../../../../redux/Reducers/packetSlice";
import { handleOrderSuccessfullySent } from "../../../../redux/Reducers/orderSlice";

export const FormOrder: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { packetInBasket } = useAppSelector((state) => state.packets);
  const { user } = useAppSelector((state) => state.user);
  const { loading, error } = useAppSelector((state) => state.order);
  const initialValues: IOrderFields = {
    name: user.name,
    email: user.email,
    phone: user && user.phone ? user.phone : "",
    text: "",
  };

  const orderNumber = (): string => {
    const dataOrder = new Date();
    const orderNumber = Math.random().toString(16).slice(2);
    return `${dataOrder.getFullYear()}-${dataOrder.getMonth()}-${dataOrder.getDate()}-${orderNumber}`;
  };

  const packetsInOrder = packetInBasket.map((packet): IPacketInOrder => {
    const { namePacket, photosessionType, price } = packet;
    return { namePacket, photosessionType, price, link: "" };
  });

  const handleSubmit = async (values: { name: string; email: string; phone: string; text?: string }): Promise<void> => {
    const result = await dispatch(
      newOrder({
        orderNumber: orderNumber(),
        packets: packetsInOrder,
        name: values.name,
        email: values.email,
        phone: values.phone,
        text: values.text,
      })
    );
    if (newOrder.fulfilled.match(result)) {
      dispatch(handlerDeletePacketFromBasket(null));
      dispatch(handleOrderSuccessfullySent(true));
      navigate("/order-success");
    }
  };

  return (
    <Fragment>
      <section className={Styles.formOrder}>
        <Fragment>
          <div className={Styles.formOrder__containerHeader}>
            <BackLink linkName="Back to cart" path={-1} />
            <h3 className={Styles.formOrder__formTitle}>Checkout order</h3>
          </div>
          <div className={Styles.formOrder__containerOrder}>
            <Order orderData={packetsInOrder} title="Order" />
          </div>
          {loading.newOrder && (
            <div style={{ margin: "20px auto" }}>
              <Spinner />
            </div>
          )}
          {error.newOrder ? (
            <p className={Styles.formOrder__formDescription_error}>{error.newOrder}</p>
          ) : (
            <p className={Styles.formOrder__formDescription}>For checkout order, leave your contact!</p>
          )}

          <FormikFormComponent
            initialValues={initialValues}
            validationSchema={validationSchemaOrderForm}
            onSubmit={handleSubmit}
            buttonProps={{
              style: "ping",
              title: "Send order",
              editStyle: "buttonSubmitOrder",
              edit: true,
            }}
            styleForm="order"
            loading={loading.newOrder}
          >
            <MyTextField
              nameLabel="Name"
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
              nameLabel="Phone"
              type="phone"
              name="phone"
              component="input"
              id="phone"
              editStyleContainer="telOrder"
              editStyleField="telOrder"
            />
            <MyTextField
              nameLabel="Message"
              type="text"
              name="text"
              component="textarea"
              id="text"
              editStyleContainer="textOrder"
              editStyleField="textOrder"
              placeholder="Write your message here"
            />
          </FormikFormComponent>
        </Fragment>
      </section>
    </Fragment>
  );
};
