import React, { useEffect } from "react";
import "./PhotoGalleryOfTheMainPage.scss";
import Photos from "../../../../components/Photos/Photos";
import PreLoader from "../../../../components/PreLoader/PreLoader";
import { fetchPhotos, handlerActiveCategoryPhotosBtn } from "../../../../redux/Reducers/photoSlice";
import { photosCategoryInMainPage } from "../../../../utils/config";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { IPhotosCategoryInMainPage, PhotoPostPage } from "../../../../types";
import { useTranslation } from "react-i18next";

const PhotoGalleryOfTheMainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, categoryPhotosBtn } = useAppSelector((state) => state.photos);
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(fetchPhotos({ type: "newborn", order: "random" }));
    dispatch(handlerActiveCategoryPhotosBtn("newborn"));
  }, []);

  const handlerClick = (event: React.MouseEvent, typePhotos: string | null): void => {
    dispatch(fetchPhotos({ type: typePhotos, order: "random" }));
    dispatch(handlerActiveCategoryPhotosBtn(typePhotos));
  };

  return (
    <section className="gallery">
      <ul className="gallery__list-title">
        {photosCategoryInMainPage.map((item: IPhotosCategoryInMainPage) => {
          return (
            <li className="gallery__title-element" key={item.id}>
              <button
                type="button"
                className={`gallery__title-link ${item.type === categoryPhotosBtn ? "gallery__title-link_active" : ""}`}
                onClick={(event) => item.onClick(handlerClick, event)}
              >
                {t(`${item.name}`)}
              </button>
            </li>
          );
        })}
      </ul>
      {loading ? (
        <div style={{ height: "1000px", margin: "100px auto" }}>
          <PreLoader />
        </div>
      ) : (
        <Photos photoPostPage={PhotoPostPage.mainPage} />
      )}
      {error && <p>{error}</p>}
    </section>
  );
};
export default PhotoGalleryOfTheMainPage;
