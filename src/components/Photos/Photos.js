import "./Photos.scss";
import { useDispatch, useSelector } from "react-redux";
import { openImagePopup, showImageInThePopup } from "../../redux/Actions/userAction";
import { useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Photos() {
  const dispatch = useDispatch();
  const getPhotos = useSelector((state) => state.photos.getPhotos);
  const { pathname } = useLocation();

  const handleOpenImagePopup = (getPhotos) => {
    dispatch(openImagePopup());
    dispatch(showImageInThePopup(getPhotos));
  };

  return (
    <TransitionGroup component="ul" className={`photos  ${pathname === "/" ? "" : "photos_gallery"} `}>
      {getPhotos.map((image) => {
        return (
          <CSSTransition key={image.id} timeout={600} classNames="displayElement">
            <li
              className={`displayElement ${
                pathname === "/" ? "photos__photo-container" : "photos__photo-container-gallery"
              }`}
            >
              <img className="photos__photo" src={image.mediaLink} alt="фотография" />
              <div className="photos__overlay" onClick={() => handleOpenImagePopup(image.mediaLink)}>
                <div className="photos__overlay-icon" />
              </div>
            </li>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

export default Photos;
