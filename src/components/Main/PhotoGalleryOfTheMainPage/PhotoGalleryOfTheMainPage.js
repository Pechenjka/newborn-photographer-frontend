import "./PhotoGalleryOfTheMainPage.scss";
import Photos from "../../Photos/Photos";
import { useDispatch, useSelector } from "react-redux";
import PreLoader from "../../PreLoader/PreLoader";
import { handlerActiveCategoryPhotosBtn, handlerShowPhotos } from "../../../redux/Reducers/photoSlice";
import { filterGallery } from "../../../utils/config";
import { useEffect } from "react";
import { useGsapEffect } from "../../../hooks/useGsapEffect";
import { handlerTimeOutClick } from "../../../redux/Reducers/appSlice";

const PhotoGalleryOfTheMainPage = () => {
  const dispatch = useDispatch();
  const { loading, error, categoryPhotosBtn } = useSelector((state) => state.photos);
  const { timeOutClick } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(handlerShowPhotos({ type: "all", order: "random" }));
    dispatch(handlerActiveCategoryPhotosBtn("all"));
  }, []);

  const handlerClick = (event, typePhotos) => {
    if (timeOutClick) {
      dispatch(handlerTimeOutClick(false));
      dispatch(handlerShowPhotos({ type: typePhotos, order: "random" }));
      animation();
      dispatch(handlerActiveCategoryPhotosBtn(typePhotos));
      timeOut();
    } else {
      event.preventDefault();
    }
  };

  const { animation } = useGsapEffect(".animElement", {
    duration: 0.4,
    y: 100,
    opacity: 0,
    stagger: 0.05,
    ease: "back",
  });

  const timeOut = () => {
    setTimeout(() => {
      dispatch(handlerTimeOutClick(true));
    }, 1000);
  };

  return (
    <section className="gallery">
      <ul className="gallery__list-title">
        {filterGallery.map((item) => {
          return (
            <li className="gallery__title-element" key={item.id}>
              <button
                type="button"
                className={`gallery__title-link ${item.type === categoryPhotosBtn ? "gallery__title-link_active" : ""}`}
                onClick={(event) => item.onClick(handlerClick, event)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
      {loading ? <PreLoader /> : <Photos />}
      {error && <p>{error}</p>}
    </section>
  );
};
export default PhotoGalleryOfTheMainPage;
