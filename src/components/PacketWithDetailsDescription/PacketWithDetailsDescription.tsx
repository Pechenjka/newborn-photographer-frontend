import Styles from "./style.module.scss";
import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { getPacketWithDetailsDescription, handlerAddPacketInBasket } from "../../redux/Reducers/packetSlice";
import { Button } from "../Button";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import PreLoader from "../PreLoader/PreLoader";
import { IPacket } from "../../types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";
import { useTranslation } from "react-i18next";

export interface PropsPacketWithDetails {
  packet: IPacket;
}

export const PacketWithDetailsDescription: React.FC<PropsPacketWithDetails> = ({ packet }) => {
  const dispatch = useAppDispatch();
  // const { id } = useParams<{ id: string }>();
  const { packetWithDetailsDescription, loading, error, packetInBasket } = useAppSelector((state) => state.packets);
  const [showGoToBasket, setShowGoToBasket] = useState<boolean>(false);
  // const { pathname } = useLocation();
  const navigate = useNavigate();
  const { t } = useTranslation();

  // useEffect(() => {
  //   if (id != null) {
  //     dispatch(getPacketWithDetailsDescription(id));
  //   }
  // }, []);

  useEffect(() => {
    if (packetInBasket) {
      packetInBasket.some((item) => {
        if (item._id === packet._id) {
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
      {/*<MetaData*/}
      {/*  title={`Пакет ${packetWithDetailsDescription?.namePacket} | Фотограф в Москве Алена Лобачева`}*/}
      {/*  description={`В пакет включено: ${packetWithDetailsDescription?.getFromPhotosession}`}*/}
      {/*  canonicalLink={`https://alenalobacheva.net${pathname}`}*/}
      {/*/>*/}
      {/*<BackgroundImage />*/}
      {/*{packetWithDetailsDescription !== null && (*/}
      {packet.getFromPhotosessionEN &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className={Styles.packetDetails}
        >
          {/*{window.innerWidth > 768 && (*/}
          {/*  <Link*/}
          {/*    className={Styles.packetDetails__linkBack}*/}
          {/*    to={`/prices/${packet.photosessionType}`}*/}
          {/*  >*/}
          {/*    вернуться к выбору пакета*/}
          {/*  </Link>*/}
          {/*)}*/}
          <div className={Styles.packetDetails__containerImage}>
            <h2 className={Styles.packetDetails__title}>{packet.namePacket}</h2>
            <motion.img
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={Styles.packetDetails__image}
              src={window.innerWidth <= 1024 ? packet.imageDescriptionMobile : packet.imageDescription}
              alt="img-description"
            />
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className={Styles.packetDetails__aboutPacket}
            >
              <p className={Styles.packetDetails__price}>$ {packet.price}</p>
              {/*<ul>*/}
              {/*  <li>35 image collection Approximately: 1-2 hours in your home*/}
              {/*    • Baby & family - 35 fully edited digital image collection*/}
              {/*    • Photos in master bedroom, living space & nursery. I suggest lots of light in the rooms and this will be discussed at booking. I will only provide wraps and hats or headbands for the session, you may provide other comfortable outfits for baby. The photos will be light and airy and not posed or using studio lighting.*/}
              {/*    • Private online gallery to share with friends/family*/}
              {/*    • Retainer fee - $100***/}
              {/*    • Additional fee added for transport expenses. The amount start from 60$ and depends on your address.*/}
              {/*  </li>*/}
              {/*</ul>*/}
              <div className={Styles.packetDetails__containerDescription}>
                {/*<span className={Styles.packetDetails__getFromPhotosession_title}>{t("package description")}</span>*/}
                <ul className={Styles.packetDetails__containerListDescription}>
                  {packet.descriptionEN &&
                    packet.descriptionEN.split("\n").map((str, i) => (
                      <li className={Styles.packetDetails__descriptionItem} key={i}>
                        {str}
                      </li>
                    ))}
                </ul>
              </div>
              <div className={Styles.packetDetails__getFromPhotosession}>
                <span className={Styles.packetDetails__getFromPhotosession_title}>{t("what you get")}</span>
                <ul className={Styles.packetDetails__getFromPhotosessionList}>
                  {packet.getFromPhotosessionEN &&
                    packet.getFromPhotosessionEN.split("\n").map((str, i) => (
                      <li className={Styles.packetDetails__getFromPhotosessionList_item} key={i}>
                        {str}
                      </li>
                    ))}
                </ul>
                {/*</div>*/}
                {/*/!*<p className={Styles.packetDetails__category}>*!/*/}
                {/*/!*  Тип съемки:*!/*/}
                {/*/!*  <span className={Styles.packetDetails__category_span}>*!/*/}
                {/*/!*    {packet.photosessionType.includes("discharge-christening")*!/*/}
                {/*/!*      ? packet.namePacket.includes("Выписка")*!/*/}
                {/*/!*        ? "discharge"*!/*/}
                {/*/!*        : "christening"*!/*/}
                {/*/!*      : packet.photosessionType}*!/*/}
                {/*/!*  </span>*!/*/}
                {/*/!*</p>*!/*/}
                {/*/!*<p className={Styles.packetDetails__category}>*!/*/}
                {/*/!*  Продолжительность съемки:*!/*/}
                {/*/!*  <span className={Styles.packetDetails__category_span}>*!/*/}
                {/*/!*    {packet.duration} часа*!/*/}
                {/*/!*  </span>*!/*/}
                {/*/!*</p>*!/*/}
                {/*/!*<p className={Styles.packetDetails__category}>*!/*/}
                {/*/!*  Количество локаций:*!/*/}
                {/*/!*  <span className={Styles.packetDetails__category_span}>*!/*/}
                {/*/!*    {packet.countLocations} образа*!/*/}
                {/*/!*  </span>*!/*/}
                {/*/!*</p>*!/*/}
                {/*<div>*/}
                <Button
                  styleButton="ping"
                  editStyle={showGoToBasket ? "green" : ""}
                  type="button"
                  edit
                  onClick={showGoToBasket ? () => navigate("/basket") : () => handlerClickAddPacketInTheBasket(packet)}
                >
                  {showGoToBasket ? `${t("go to order")}` : `${t("add package to cart")}`}
                </Button>
                {showGoToBasket && <p className={Styles.packetDetails__alreadyInBasket}>{t("btn add cart")}</p>}
              </div>
            </motion.div>
          </div>
          {/*<motion.div*/}
          {/*  initial={{ opacity: 0, y: 30 }}*/}
          {/*  animate={{ opacity: 1, y: 0 }}*/}
          {/*  transition={{ duration: 1 }}*/}
          {/*  className={Styles.packetDetails__containerDescription}*/}
          {/*>*/}
          {/*  /!*<h3 className={Styles.packetDetails__titleDescription}>Описание пакета</h3>*!/*/}
          {/*  /!*<ul className={Styles.packetDetails__containerListDescription}>*!/*/}
          {/*  /!*  {packet.description.split("\n").map((str, i) => {*!/*/}
          {/*  /!*    return (*!/*/}
          {/*  /!*      <li className={Styles.packetDetails__descriptionItem} key={i}>*!/*/}
          {/*  /!*        {str.includes(":") ? (*!/*/}
          {/*  /!*          <ul className={Styles.packetDetails__itemListContainer}>*!/*/}
          {/*  /!*            {str.split("*").map((el, index) => {*!/*/}
          {/*  /!*              return (*!/*/}
          {/*  /!*                <li className={Styles.packetDetails__itemList} key={index}>*!/*/}
          {/*  /!*                  {el}*!/*/}
          {/*  /!*                </li>*!/*/}
          {/*  /!*              );*!/*/}
          {/*  /!*            })}*!/*/}
          {/*  /!*          </ul>*!/*/}
          {/*  /!*        ) : (*!/*/}
          {/*  /!*          str*!/*/}
          {/*  /!*        )}*!/*/}
          {/*  /!*      </li>*!/*/}
          {/*  /!*    );*!/*/}
          {/*  /!*  })}*!/*/}
          {/*  /!*</ul>*!/*/}
          {/*</motion.div>*/}
        </motion.div>
        // )
      }
      {loading.getPacketWithDetailsDescription && (
        <div style={{ height: "50vh", margin: "auto" }}>
          <PreLoader />
        </div>
      )}
      {error.packetDetail && <p style={{ padding: "30px" }}>{error.packetDetail}</p>}
    </Fragment>
  );
};
