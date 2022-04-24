import "./PopupWithImage.scss";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../Popup/Popup";
import { handlerDataImageForModal, handlerModalWithImage } from "../../redux/Reducers/photoSlice";

const PopupWithImage = () => {
  const dispatch = useDispatch();
  const { openModalWithImage, dataForImageModal } = useSelector((state) => state.photos);

  const handleClosePopupWithImage = () => {
    dispatch(handlerModalWithImage(false));
    dispatch(handlerDataImageForModal(null));
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
}

export default PopupWithImage;
