import Styles from "./style.module.scss";
import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { getPacketWithDetailsDescription, handlerAddPacketInBasket } from "../../redux/Reducers/packetSlice";
import { Button } from "../Button";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import PreLoader from "../PreLoader/PreLoader";
import { IPacket } from "../../types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";

export const PacketWithDetailsDescription: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { packetWithDetailsDescription, loading, error, packetInBasket } = useAppSelector((state) => state.packets);
  const [showGoToBasket, setShowGoToBasket] = useState<boolean>(false);
  const { pathname } = useLocation();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPacketWithDetailsDescription(id));
  }, []);

  useEffect(() => {
    if (packetInBasket) {
      packetInBasket.some((item) => {
        if (item._id === id) {
          setShowGoToBasket(true);
        }
      });
    }
  }, [packetInBasket]);

  const handlerClickAddPacketInTheBasket = (packet: IPacket) => {
    if (packetInBasket.indexOf(packet) === -1) {
      dispatch(handlerAddPacketInBasket(packet));
    }
    return;
  };

  return (
    <Fragment>
      <MetaData
        title={`Пакет ${packetWithDetailsDescription?.namePacket} | Фотограф в Москве Алена Лобачева`}
        description={`В пакет включено: ${packetWithDetailsDescription?.getFromPhotosession}`}
        canonicalLink={`https://alenalobacheva.net${pathname}`}
      />
      <BackgroundImage />
      {packetWithDetailsDescription !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={Styles.packetDetails}
        >
          {window.innerWidth > 768 && (
            <Link
              className={Styles.packetDetails__linkBack}
              to={`/prices/${packetWithDetailsDescription.photosessionType}`}
            >
              вернуться к выбору пакета
            </Link>
          )}
          <div className={Styles.packetDetails__containerImage}>
            <h2 className={Styles.packetDetails__title}>Пакет {packetWithDetailsDescription.namePacket}</h2>
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={Styles.packetDetails__image}
              src={
                window.innerWidth <= 1024
                  ? packetWithDetailsDescription.imageDescriptionMobile
                  : packetWithDetailsDescription.imageDescription
              }
              alt="img-description"
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={Styles.packetDetails__aboutPacket}
            >
              <p className={Styles.packetDetails__price}>{packetWithDetailsDescription.price}p</p>
              <div className={Styles.packetDetails__getFromPhotosession}>
                <span className={Styles.packetDetails__getFromPhotosession_title}>Что получаете с фотосессии:</span>
                <ul className={Styles.packetDetails__getFromPhotosessionList}>
                  {packetWithDetailsDescription.getFromPhotosession.split("\n").map((str, i) => (
                    <li className={Styles.packetDetails__getFromPhotosessionList_item} key={i}>
                      {str}
                    </li>
                  ))}
                </ul>
              </div>
              <p className={Styles.packetDetails__category}>
                Тип съемки:
                <span className={Styles.packetDetails__category_span}>
                  {packetWithDetailsDescription.photosessionType.includes("discharge-christening")
                    ? packetWithDetailsDescription.namePacket.includes("Выписка")
                      ? "discharge"
                      : "christening"
                    : packetWithDetailsDescription.photosessionType}
                </span>
              </p>
              <p className={Styles.packetDetails__category}>
                Продолжительность съемки:
                <span className={Styles.packetDetails__category_span}>
                  {packetWithDetailsDescription.duration} часа
                </span>
              </p>
              <p className={Styles.packetDetails__category}>
                Количество локаций:
                <span className={Styles.packetDetails__category_span}>
                  {packetWithDetailsDescription.countLocations} образа
                </span>
              </p>
              <div>
                <Button
                  styleButton="ping"
                  editStyle={showGoToBasket ? "green" : ""}
                  type="button"
                  edit
                  onClick={
                    showGoToBasket
                      ? () => history.push("/basket")
                      : () => handlerClickAddPacketInTheBasket(packetWithDetailsDescription)
                  }
                >
                  {showGoToBasket ? "Перейти к оформлению" : "Добавить пакет в корзину"}
                </Button>
                {showGoToBasket && <p className={Styles.packetDetails__alreadyInBasket}>Этот пакет уже в корзине</p>}
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={Styles.packetDetails__containerDescription}
          >
            <h3 className={Styles.packetDetails__titleDescription}>Описание пакета</h3>
            <ul className={Styles.packetDetails__containerListDescription}>
              {packetWithDetailsDescription.description.split("\n").map((str, i) => {
                return (
                  <li className={Styles.packetDetails__descriptionItem} key={i}>
                    {str.includes(":") ? (
                      <ul className={Styles.packetDetails__itemListContainer}>
                        {str.split("*").map((el, index) => {
                          return (
                            <li className={Styles.packetDetails__itemList} key={index}>
                              {el}
                            </li>
                          );
                        })}
                      </ul>
                    ) : (
                      str
                    )}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
      {loading.getPacketWithDetailsDescription && (
        <div style={{ height: "50vh", margin: "auto" }}>
          <PreLoader />
        </div>
      )}
      {error.packetDetail && <p style={{ padding: "30px" }}>{error.packetDetail}</p>}
    </Fragment>
  );
};
