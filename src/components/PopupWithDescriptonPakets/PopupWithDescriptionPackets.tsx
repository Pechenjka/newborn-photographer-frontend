import React from "react";
import "./PopupWithDescriptionPackets.scss";
import Popup from "../Popup/Popup";
import { handlerDataOrder, handlerModalOrder, handlerModalWithDescribePacket } from "../../redux/Reducers/appSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { IDataDescriptionPacket, IDataOrder } from "../../types";

const PopupWithDescriptionPacket: React.FC = () => {
  const dispatch = useAppDispatch();
  const { dataOrder, openModalWithDescribePacket, dataDescriptionPacket } = useAppSelector((state) => state.app);

  const handleClosePopupWithDescribePacket = (): void => {
    dispatch(handlerModalWithDescribePacket(false));
    dispatch(handlerDataOrder({ type: "", title: "", price: "", location: "" }));
  };

  const handleOpenOrderPhotoSessionPopup = (data: IDataOrder): void => {
    handleClosePopupWithDescribePacket();
    dispatch(handlerModalOrder(true));
    dispatch(handlerDataOrder(data));
  };

  const handlerChangeViewImageDescription = (item: IDataDescriptionPacket): string => {
    if (window.innerWidth > 1023) {
      return item.imageDescriptionPacket;
    } else {
      return item.imageDescriptionPacketMobile;
    }
  };

  return (
    <Popup onClick={handleClosePopupWithDescribePacket} openPopup={openModalWithDescribePacket}>
      {openModalWithDescribePacket && (
        <div className="popup-prices__container" onClick={(event) => event.stopPropagation()}>
          <img
            className="popup-prices__image"
            src={handlerChangeViewImageDescription(dataDescriptionPacket)}
            alt="фотография"
          />
          <div className="popup-prices__description">
            <div className="popup-prices__closeButton" onClick={() => handleClosePopupWithDescribePacket()} />
            <h3 className="popup-prices__title">{dataDescriptionPacket.title}</h3>
            <ul className="popup-prices__paragraphs-container">
              {dataDescriptionPacket.description.map((el: string | string[], index) => {
                return (
                  <li
                    className={`popup-prices__list-paragraph ${Array.isArray(el) ? "disabled-style" : ""}`}
                    key={index}
                  >
                    {Array.isArray(el) ? (
                      <ul className={"popup-prices__list-nested"}>
                        {Array.isArray(el) &&
                          el.map((item: string, index: number) => {
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
            <h3 className="popup-prices__price">Стоимость {dataDescriptionPacket.price}</h3>
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
