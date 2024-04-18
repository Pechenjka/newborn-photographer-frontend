import React, { useEffect } from "react";
import "./PhotoGalleryOfTheMainPage.scss";
import Photos from "../../../../components/Photos/Photos";
import PreLoader from "../../../../components/PreLoader/PreLoader";
import { fetchPhotos, handlerActiveCategoryPhotosBtn } from "../../../../redux/Reducers/photoSlice";
import { photosCategoryInMainPage } from "../../../../utils/config";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { IPhotosCategoryInMainPage, PhotoPostPage } from "../../../../types";
import { motion } from "framer-motion";
import { animationLinksOnMainPage } from "../../../../helpers/framerMotion";

const PhotoGalleryOfTheMainPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, categoryPhotosBtn } = useAppSelector((state) => state.photos);

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
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.02, once: true }}
        className='gallery__list-title'
      >
        {photosCategoryInMainPage.map((item: IPhotosCategoryInMainPage, index) => {
          return (
            <motion.li
              custom={index + 1}
              variants={animationLinksOnMainPage}
              className='gallery__title-element'
              key={item.id}
            >
              <button
                type="button"
                className={`gallery__title-link ${item.type === categoryPhotosBtn ? "gallery__title-link_active" : ""}`}
                onClick={(event) => item.onClick(handlerClick, event)}
                title={`${
                  item.type !== null && item.name.indexOf(item.type) ? item.type + " " + "photography" : "all photos"
                }`}
              >
                {item.name}
              </button>
            </motion.li>
          );
        })}
      </motion.ul>
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
