import "./PopupWithDescriptionPackets.scss";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup/Popup";
import { handlerDataOrder, handlerModalOrder, handlerModalWithDescribePacket } from "../../redux/Reducers/appSlice";

const PopupWithDescriptionPacket = () => {
  const dispatch = useDispatch();
  const { dataOrder, openModalWithDescribePacket } = useSelector((state) => state.app);

  const handleClosePopupWithDescribePacket = () => {
    dispatch(handlerModalWithDescribePacket(false));
    dispatch(handlerDataOrder(null));
  };

  const handleOpenOrderPhotoSessionPopup = (data) => {
    handleClosePopupWithDescribePacket();
    dispatch(handlerModalOrder(true));
    dispatch(handlerDataOrder(data));
  };

  const handlerChangeViewImageDescription = (item) => {
    if (window.innerWidth > 1023) {
      return item.imageDescriptionPacket;
    } else {
      return item.imageDescriptionPacketMobile;
    }
  };

  return (
    <Popup onClick={handleClosePopupWithDescribePacket} openPopup={openModalWithDescribePacket}>
      {openModalWithDescribePacket  && (
      <div className="popup-prices__container" onClick={(event) => event.stopPropagation()}>
        <img className="popup-prices__image" src={handlerChangeViewImageDescription(dataOrder)} alt="фотография" />
        <div className="popup-prices__description">
          <div className="popup-prices__closeButton" onClick={() => handleClosePopupWithDescribePacket()} />
          <h3 className="popup-prices__title">{dataOrder.title}</h3>
          <ul className="popup-prices__paragraphs-container">
            {dataOrder.description.map((el, index) => {
              return (
                <li className={`popup-prices__list-paragraph ${Array.isArray(el) ? "disabled-style" : ""}`} key={index}>
                  {Array.isArray(el) ? (
                    <ul className={"popup-prices__list-nested"}>
                      {Array.isArray(el) &&
                        el.map((item, index) => {
                          return (
                            <li className={"popup-prices__list-nested-item"} key={index}>
                              {item}
                            </li>
                          );
                        })}
                    </ul>
                  ) : (
                    <p>{el}</p>
                  )}
                </li>
              );
            })}
          </ul>
          <h3 className="popup-prices__price">Стоимость {dataOrder.price}</h3>
          <button className="popup-prices__button" onClick={() => handleOpenOrderPhotoSessionPopup(dataOrder)}>
            Заказать фотосессию
          </button>
        </div>
      </div>
      )}
    </Popup>
  );
};

export default PopupWithDescriptionPacket;
