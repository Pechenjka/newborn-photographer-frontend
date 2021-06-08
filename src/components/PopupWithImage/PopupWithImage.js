import "./PopupWithImage.scss";
import { useDispatch, useSelector } from "react-redux";
import { closeImagePopup } from "../../redux/Actions/photosActions";

function PopupWithImage() {
  const dispatch = useDispatch();
  const openImagePopup = useSelector((state) => state.photos.openImagePopup);
  const showImage = useSelector((state) => state.photos.showImage);

  return (
    <section className={`popup ${openImagePopup ? "popup__opened" : ""}`} onClick={() => dispatch(closeImagePopup())}>
      <div className="popup__container" onClick={(event)=> event.stopPropagation()}>
        <img className="popup__image" src={showImage} />
        <button className="popup__closeBtn"  aria-label='закрытие модального окна' onClick={() => dispatch(closeImagePopup())} />
      </div>
    </section>
  );
}

export default PopupWithImage;
