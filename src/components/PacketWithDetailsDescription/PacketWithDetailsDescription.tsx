import Styles from "./style.module.scss";
import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import { getPacketWithDetailsDescription, handlerAddPacketInBasket } from "../../redux/Reducers/packetSlice";
import { Button } from "../Button";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import PreLoader from "../PreLoader/PreLoader";
import { IPacket } from "../../types";

export const PacketWithDetailsDescription: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { packetWithDetailsDescription, loading, error, packetInBasket } = useAppSelector((state) => state.packets);
  const [disabledButton, setDisabledButton] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getPacketWithDetailsDescription(id));
  }, []);

  useEffect(() => {
    if (packetInBasket) {
      packetInBasket.some((item) => {
        if (item._id === id) {
          setDisabledButton(true);
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
      <BackgroundImage />
      {packetWithDetailsDescription !== null && (
        <div className={Styles.packetDetails}>
          <div className={Styles.packetDetails__containerImage}>
            <h3 className={Styles.packetDetails__title}>{packetWithDetailsDescription.namePacket}</h3>
            <img
              className={Styles.packetDetails__image}
              src={packetWithDetailsDescription.imageDescription}
              alt="img-description"
            />
            <div className={Styles.packetDetails__aboutPacket}>
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
                  {packetWithDetailsDescription.photosessionType}
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
              <Button
                styleButton="ping"
                type="button"
                disabled={disabledButton}
                onClick={() => handlerClickAddPacketInTheBasket(packetWithDetailsDescription)}
              >
                Добавить пакет в корзину
              </Button>
              {disabledButton && <p className={Styles.packetDetails__alreadyInBasket}>Этот пакет уже в корзине</p>}
            </div>
          </div>
          <div className={Styles.packetDetails__containerDescription}>
            <p className={Styles.packetDetails__titleDescription}>Описание пакета</p>
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
          </div>
        </div>
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
