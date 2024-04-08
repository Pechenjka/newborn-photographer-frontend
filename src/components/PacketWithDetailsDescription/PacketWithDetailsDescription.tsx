import Styles from "./style.module.scss";
import React, { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useNavigate } from "react-router-dom";
import { handlerAddPacketInBasket } from "../../redux/Reducers/packetSlice";
import { Button } from "../Button";
import PreLoader from "../PreLoader/PreLoader";
import { IPacket } from "../../types";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useWindowResize } from "../../hooks/useWindowResize";
import * as Scroll from "react-scroll";

export interface PropsPacketWithDetails {
  packet: IPacket;
}

export const PacketWithDetailsDescription: React.FC<PropsPacketWithDetails> = ({ packet }) => {
  const dispatch = useAppDispatch();
  const { loading, error, packetInBasket } = useAppSelector((state) => state.packets);
  const { language } = useAppSelector((state) => state.app);
  const [showGoToBasket, setShowGoToBasket] = useState<boolean>(false);

  const navigate = useNavigate();
  const { t } = useTranslation();
  const { width } = useWindowResize();
  const LinkScroll = Scroll.Link;

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
      {
        packet.getFromPhotosessionEN && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={Styles.packetDetails}
          >
            <div className={Styles.packetDetails__containerImage}>
              <h2 className={Styles.packetDetails__title}>{packet.namePacket}</h2>
              <motion.img
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className={Styles.packetDetails__image}
                src={width <= 1024 ? packet.imageDescriptionMobile : packet.imageDescription}
                alt={`photography - package ${packet.namePacket}`}
                title={`photography - package ${packet.namePacket}`}
              />
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className={Styles.packetDetails__aboutPacket}
              >
                <p className={Styles.packetDetails__price}>$ {packet.price}</p>
                <div className={Styles.packetDetails__containerDescription}>
                  <ul className={Styles.packetDetails__containerListDescription}>
                    {(language === "en" ? packet.descriptionEN : packet.description).split("\n").map((str, i) => (
                      <li className={Styles.packetDetails__descriptionItem} key={i}>
                        {str}
                      </li>
                    ))}
                  </ul>
                  <p className={Styles.packetDetails__containerLinkScroll}>
                    More information
                    <LinkScroll
                      className={Styles.packetDetails__linkScroll}
                      to="newbornImportantInformation"
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={1000}
                      title='Important information about photo session'
                    >
                      on the link
                    </LinkScroll>
                  </p>
                </div>
                <div className={Styles.packetDetails__getFromPhotosession}>
                  <span className={Styles.packetDetails__getFromPhotosession_title}>{t("what you get")}</span>
                  <ul className={Styles.packetDetails__getFromPhotosessionList}>
                    {(language === "en" ? packet.getFromPhotosessionEN : packet.getFromPhotosession)
                      .split("\n")
                      .map((str, i) => (
                        <li className={Styles.packetDetails__getFromPhotosessionList_item} key={i}>
                          {str}
                        </li>
                      ))}
                  </ul>
                  <Button
                    styleButton="ping"
                    editStyle={showGoToBasket ? "green" : ""}
                    type="button"
                    edit
                    onClick={
                      showGoToBasket ? () => navigate("/basket") : () => handlerClickAddPacketInTheBasket(packet)
                    }
                  >
                    {showGoToBasket ? `${t("go to order")}` : `${t("add package to cart")}`}
                  </Button>
                  {showGoToBasket && <p className={Styles.packetDetails__alreadyInBasket}>{t("btn add cart")}</p>}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )
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
