import "./PopupWithImage.scss";
import { useDispatch, useSelector } from "react-redux";
import {closeImagePopup, showImageInThePopup} from "../../redux/Actions/userAction";
import Popup from "../Popup/Popup";

function PopupWithImage() {
  const dispatch = useDispatch();
  const openImagePopup = useSelector((state) => state.photos.openImagePopup);
  const showImage = useSelector((state) => state.photos.showImageInThePopup);

  const handleClosePopupWithImage = () => {
    dispatch(closeImagePopup())
    dispatch(showImageInThePopup(null))
  }

  return (
    <Popup onClick={handleClosePopupWithImage} openPopup={openImagePopup}>
      <div className="popup-image__container" onClick={(event) => event.stopPropagation()}>
        <img className="popup-image__image" src={showImage} alt="фотография" />
        <button
          className="popup-image__closeBtn"
          aria-label="закрытие модального окна"
          onClick={handleClosePopupWithImage}
        />
      </div>
    </Popup>
  )
}

export default PopupWithImage;
