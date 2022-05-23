import Styles from "./style.module.scss";
import React, { Fragment, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useParams } from "react-router-dom";
import { getPacketWithDetailsDescription, handlerAddPacketInBasket } from "../../redux/Reducers/packetSlice";
import Button from "../Button/Button";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import PreLoader from "../PreLoader/PreLoader";

const PacketWithDetailsDescription: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const { packetWithDetailsDescription, loading, error } = useAppSelector((state) => state.packets);

  useEffect(() => {
    dispatch(getPacketWithDetailsDescription(id));
  }, []);

  return (
    <Fragment>
      <BackgroundImage />
      {packetWithDetailsDescription !== null && (
        <div className={Styles.packetDetails}>
          <div className={Styles.packetDetails__containerImage}>
            <img
              className={Styles.packetDetails__image}
              src={packetWithDetailsDescription.imageDescription}
              alt="image-description"
            />
            <div className={Styles.packetDetails__aboutPacket}>
              <h3 className={Styles.packetDetails__title}>{packetWithDetailsDescription.title}</h3>
              <p className={Styles.packetDetails__price}>{packetWithDetailsDescription.price}p</p>
              <p className={Styles.packetDetails__getFromPhotosession}>
                Что получаете с фотосессии: <br />
                <ul className={Styles.packetDetails__getFromPhotosessionList}>
                  {packetWithDetailsDescription.getFromPhotosession.split("\n").map((str, i) => (
                    <li className={Styles.packetDetails__getFromPhotosessionList_item} key={i}>
                      {str}
                    </li>
                  ))}
                </ul>
              </p>
              <p className={Styles.packetDetails__category}>
                Тип съемки:
                <span className={Styles.packetDetails__category_span}>{packetWithDetailsDescription.packet}</span>
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
                onClick={() => dispatch(handlerAddPacketInBasket(packetWithDetailsDescription))}
              >
                Добавить пакет в корзину
              </Button>
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
      {loading && <PreLoader />}
      {error && <p style={{ padding: "30px" }}>{error}</p>}
    </Fragment>
  );
};

export default PacketWithDetailsDescription;
