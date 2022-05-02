import "./Packets.scss";
import { packets } from "../../../utils/config";

import {
  handlerDataDescription,
  handlerDataOrder,
  handlerDisplayPricePackets,
  handlerModalOrder,
  handlerModalWithDescribePacket,
} from "../../../redux/Reducers/appSlice";
import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { UseGsapEffect } from "../../../hooks/UseGsapEffect";
import { useLayoutEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IDataDescriptionPacket, IDataOrder, IPacket } from "../../../types";

const Packets: React.FC = () => {
  const dispatch = useAppDispatch();
  const { path } = useRouteMatch();
  const { displayPricePackets } = useAppSelector((state) => state.app);

  useEffect(() => {
    dispatch(handlerDisplayPricePackets({ packets, path }));
  }, []);

  const handlerOpenModalOrderPhotoSession = (data: IDataOrder): void => {
    dispatch(handlerModalOrder(true));
    dispatch(handlerDataOrder(data));
  };

  const handlerOpenModalWithDescribePacket = (data: IDataDescriptionPacket, dataOrder: IDataOrder): void => {
    dispatch(handlerModalWithDescribePacket(true));
    dispatch(handlerDataDescription(data));
    dispatch(handlerDataOrder(dataOrder));
  };

  const handlerChangeViewScreen = (): string | null => {
    if (window.innerWidth > 768) {
      return "Наведите курсор";
    } else {
      return null;
    }
  };

  const animationPackets = new UseGsapEffect(".packets__item", {
    duration: 1,
    opacity: 0,
    stagger: 0.05,
    ease: "back",
  }).animation

  useLayoutEffect(() => {
    setTimeout(() => {
      animationPackets();
    }, 0);
  }, []);

  return (
    <ul className="packets">
      {displayPricePackets.map((packet: IPacket, index: number) => {
        return (
          <li className="packets__item item" key={index}>
            <img className="item__image" src={packet.image} alt="" />
            <div className="item__overlay">
              <h3 className="item__overlay-title">{packet.title}</h3>
              <button
                className="item__overlay-button-to-order"
                type="button"
                onClick={() =>
                  handlerOpenModalOrderPhotoSession({
                    price: packet.price,
                    location: packet.location,
                    title: packet.title,
                    type: packet.type,
                  })
                }
              >
                Заказать фотоссесию
              </button>
              <div className="item__overlay-hover-cursor">{handlerChangeViewScreen()}</div>
              <p className="item__overlay-price">{packet.price}</p>
              <ul className="item__overlay-describe">
                <li className="item__overlay-describe-item">
                  <p>{packet.location}</p>
                </li>
                <li className="item__overlay-describe-item">
                  <p>{packet.shortDescription}</p>
                </li>
                <li className="item__overlay-describe-item">
                  <p>Продолжительность съемки: {packet.time}</p>
                </li>
              </ul>
              <button
                className="item__overlay-button"
                type="button"
                onClick={() =>
                  handlerOpenModalWithDescribePacket(
                    {
                      title: packet.title,
                      imageDescriptionPacket: packet.imageDescriptionPacket,
                      imageDescriptionPacketMobile: packet.imageDescriptionPacketMobile,
                      description: packet.description,
                      price: packet.price,
                    },
                    {
                      price: packet.price,
                      location: packet.location,
                      title: packet.title,
                      type: packet.type,
                    }
                  )
                }
              >
                Подробнее ...
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Packets;
