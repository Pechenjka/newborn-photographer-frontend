import "./Packets.scss";
import { useDispatch, useSelector } from "react-redux";
import { packets } from "../../../utils/config";

import {
  handlerDataOrder,
  handlerDisplayPricePackets,
  handlerModalOrder,
  handlerModalWithDescribePacket,
} from "../../../redux/Reducers/appSlice";
import { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const Packets = () => {
  const dispatch = useDispatch();
  const { path } = useRouteMatch();
  const { displayPricePackets } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(handlerDisplayPricePackets({ packets, path }));
  }, []);

  const handlerOpenModalOrderPhotoSession = (data) => {
    dispatch(handlerModalOrder(true));
    dispatch(handlerDataOrder(data));
  };

  const handlerOpenModalWithDescribePacket = (data) => {
    dispatch(handlerModalWithDescribePacket(true));
    dispatch(handlerDataOrder(data));
  };

  const handlerChangeViewScreen = () => {
    if (window.innerWidth > 768) {
      return "Наведите курсор";
    } else {
      return null;
    }
  };

  return (
    <ul className="packets anim-items">
      {displayPricePackets.map((packet, index) => {
        return (
          <li className="packets__item item" key={index}>
            <img className="item__image" src={packet.image} alt="" />
            <div className="item__overlay">
              <h3 className="item__overlay-title">{packet.title}</h3>
              <button
                className="item__overlay-button-to-order"
                type="button"
                onClick={() => handlerOpenModalOrderPhotoSession(packet)}
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
                onClick={() => handlerOpenModalWithDescribePacket(packet)}
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
