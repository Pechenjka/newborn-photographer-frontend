import "./Packets.scss";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  showDataPacket,
  openPopupWithDescribePacket,
  openOrderPhotoSessionPopup,
  dataOrder,
  handlePricePackets,
} from "../../../redux/Actions/userAction";
import { packets } from "../../../utils/config";
import { useEffect } from "react";


function Packets() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const pricePackets = useSelector((state) => state.user.pricePackets);

  useEffect(() => {
    dispatch(handlePricePackets(packets, pathname));
  }, [dispatch, pathname]);

  const handleOpenOrderPhotoSessionPopup = (data) => {
    dispatch(openOrderPhotoSessionPopup());
    dispatch(dataOrder(data));
  };

  const handleOpenWithDescribePacketPopup = (item) => {
    dispatch(openPopupWithDescribePacket());
    dispatch(showDataPacket(item));
  };

  return (
    <ul className="packets anim-items">
      {pricePackets.map((packet, index) => {
        return (
          <li className="packets__item item" key={index}>
            <img className="item__image" src={packet.image} alt="" />
            <div className="item__overlay">
              <h3 className="item__overlay-title">{packet.title}</h3>
              <button
                className="item__overlay-button-to-order"
                type="button"
                onClick={() => handleOpenOrderPhotoSessionPopup(packet)}
              >
                Заказать фотоссесию
              </button>
              <div className="item__overlay-hover-cursor">Наведите курсор</div>
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
                onClick={() => handleOpenWithDescribePacketPopup(packet)}
              >
                Подробнее ...
              </button>
            </div>
          </li>
        );
      })}
    </ul>
    )
}

export default Packets;
