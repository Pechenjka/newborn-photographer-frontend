import "./PhotoGalleryOfTheMainPage.scss";
import Photos from "../../Photos/Photos";
import { useDispatch, useSelector } from "react-redux";
import PreLoader from "../../PreLoader/PreLoader";
import { handlerActiveCategoryPhotosBtn, showPhotos } from "../../../redux/Reducers/photoSlice";
import { filterGallery } from "../../../utils/config";

const PhotoGalleryOfTheMainPage = () => {
  const dispatch = useDispatch();
  const { loading, error, categoryPhotosBtn } = useSelector((state) => state.photos);

  const handlerClick = (typePhotos) => {
    dispatch(showPhotos({ type: typePhotos, order: "random" }));
    dispatch(handlerActiveCategoryPhotosBtn(typePhotos));
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
                onClick={() => item.onClick(handlerClick)}
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
}
export default PhotoGalleryOfTheMainPage;
