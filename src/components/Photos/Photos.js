import "./Photos.scss";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { handlerDataImageForModal, handlerModalWithImage } from "../../redux/Reducers/photoSlice";

const Photos = () => {
  const dispatch = useDispatch();
  const { showPhotos } = useSelector((state) => state.photos);
  const { pathname } = useLocation();

  const handleOpenImagePopup = (getPhotos) => {
    dispatch(handlerModalWithImage(true));
    dispatch(handlerDataImageForModal(getPhotos));
  };

  return (
    <ul className={`photos  ${pathname === "/" ? "" : "photos_gallery"} `}>
      {showPhotos.map((image, index) => {
        return (
          <li
            key={index}
            className={`displayElement ${
              pathname === "/" ? "photos__photo-container" : "photos__photo-container-gallery"
            }`}
          >
            <img className="photos__photo" src={image.mediaLink} alt="фотография" />
            <div className="photos__overlay" onClick={() => handleOpenImagePopup(image.mediaLink)}>
              <div className="photos__overlay-icon" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Photos;
