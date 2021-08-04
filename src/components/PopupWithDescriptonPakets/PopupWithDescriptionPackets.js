import "./PopupWithDescriptionPackets.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  closePopupWithDescribePacket,
  dataOrder,
  deleteDataPacket,
  openOrderPhotoSessionPopup,
} from "../../redux/Actions/userAction";
import Popup from "../Popup/Popup";

function PopupWithDescriptionPacket() {
  const dispatch = useDispatch();

  const popupWithDescribePacket = useSelector((state) => state.photos.popupWithDescribePacket);
  const dataPacket = useSelector((state) => state.photos.showDataPacket);

  const handleClosePopupWithDescribePacket = () => {
    dispatch(closePopupWithDescribePacket());
    dispatch(deleteDataPacket([]));
  };

  const handleOpenOrderPhotoSessionPopup = (data) => {
    handleClosePopupWithDescribePacket();
    dispatch(openOrderPhotoSessionPopup());
    dispatch(dataOrder(data));
  };

  return (
    <Popup onClick={handleClosePopupWithDescribePacket} openPopup={popupWithDescribePacket}>
      {dataPacket.map((item, index) => {
        return (
          <div className="popup-prices__container" key={index} onClick={(event) => event.stopPropagation()}>
            <img className="popup-prices__image" src={item.imageDescriptionPacket} alt="фотография" />
            <div className="popup-prices__description">
              <div className="popup-prices__closeButton" onClick={() => handleClosePopupWithDescribePacket()} />
              <h3 className="popup-prices__title">{item.title}</h3>
              <ul className="popup-prices__paragraphs-container">
                {item.description.map((el, index) => {
                  return (
                    <li className="popup-prices__list-paragraph" key={index}>
                      <p>{el}</p>
                    </li>
                  );
                })}
              </ul>
              <h3 className="popup-prices__price">Стоимость {item.price}</h3>
              <button className="popup-prices__button" onClick={() => handleOpenOrderPhotoSessionPopup(item)}>
                Заказать фотосессию
              </button>
            </div>
          </div>
        );
      })}
    </Popup>
  );
}

export default PopupWithDescriptionPacket;
