import Styles from "./style.module.scss";
import React, { Fragment, useEffect } from "react";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, updateUser } from "../../redux/Reducers/userSlice";
import { IUserProfile } from "../../types";
import { DataUser } from "./components/DataUser";
import { FormikFormComponent } from "../../components/FormikFormComponent";
import { MyTextField } from "../../components/MyTextField";
import { deleteMeOrders, getMeOrders } from "../../redux/Reducers/orderSlice";
import { Order } from "../Basket/components/FormOrder/components/Order";
import { validationSchemaUserInProfile } from "../../validationForms";

export const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const { user, loading } = useAppSelector((state) => state.user);
  const { meOrders, error } = useAppSelector((state) => state.order);

  const handlerClickExitFromProfile = (): void => {
    const jwt = localStorage.getItem("token");
    if (jwt) localStorage.removeItem("token");
    dispatch(logOut());
    dispatch(deleteMeOrders());
    history.push("/");
  };

  useEffect(() => {
    user._id !== "" && user.role === "USER" && dispatch(getMeOrders());
  }, [user]);

  const initialValues: IUserProfile = {
    name: user.name,
    email: user.email,
    phone: user.phone,
  };

  const handleSubmit = (values: IUserProfile) => {
    dispatch(updateUser({ name: values.name, email: values.email, phone: values.phone ? values.phone : "" }));
  };

  return (
    <Fragment>
      <BackgroundImage />
      <section className={Styles.profile}>
        <h3 className={Styles.profile__title}>
          Привет, <span>{user.name}!</span>
        </h3>
        <div className={Styles.profile__container}>
          <DataUser title="Мои данные">
            <FormikFormComponent
              initialValues={initialValues}
              validationSchema={validationSchemaUserInProfile}
              onSubmit={handleSubmit}
              buttonProps={{ title: "редактировать", style: "transparent", onDirty: true }}
              styleForm="userProfile"
              loading={loading}
            >
              <MyTextField
                nameLabel="Имя"
                type="text"
                name="name"
                component="input"
                id="name"
                editStyleField="userProfile"
              />
              <MyTextField
                nameLabel="Почта"
                type="text"
                name="email"
                component="input"
                id="email"
                editStyleField="userProfile"
              />
              <MyTextField
                nameLabel="Телефон"
                type="text"
                name="phone"
                component="input"
                id="phone"
                editStyleField="userProfile"
                placeholder="Номер вашего телефона "
              />
            </FormikFormComponent>
          </DataUser>
          {meOrders.length > 0 &&
            user.role !== "ADMIN" &&
            (error.length ? (
              <p style={{ margin: "50px auto" }}>{error}</p>
            ) : (
              <DataUser title="Мои заказы">
                {meOrders.map((item) => {
                  return (
                    <Order
                      orderInMyProfile
                      orderData={item.packets}
                      orderNumber={item.orderNumber}
                      title="Номер заказа"
                      key={item.orderNumber}
                    />
                  );
                })}
              </DataUser>
            ))}
          {/*)}*/}
          {/*<DataUser title="Мои предыдущие заказы">*/}
          {/*  <InfoCard data={user.prevOrders} />*/}
          {/*</DataUser>*/}
        </div>
        <Button styleButton="ping" type="button" onClick={handlerClickExitFromProfile}>
          Выйти из аккаунта
        </Button>
      </section>
    </Fragment>
  );
};
