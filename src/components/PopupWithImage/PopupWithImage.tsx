import React from "react";
import "./PopupWithImage.scss";
import Popup from "../Popup/Popup";
import { handlerDataImageForModal, handlerModalWithImage } from "../../redux/Reducers/photoSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

const PopupWithImage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { openModalWithImage, dataForImageModal } = useAppSelector((state) => state.photos);

  const handleClosePopupWithImage = (): void => {
    dispatch(handlerModalWithImage(false));
    dispatch(handlerDataImageForModal(""));
  };

  return (
    <Popup onClick={handleClosePopupWithImage} openPopup={openModalWithImage}>
      <div className="popup-image__container" onClick={(event) => event.stopPropagation()}>
        <img className="popup-image__image" src={dataForImageModal} alt="фотография" />
        <button
          className="popup-image__closeBtn"
          aria-label="закрытие модального окна"
          onClick={handleClosePopupWithImage}
        />
      </div>
    </Popup>
  );
};

export default PopupWithImage;
