import "./PhotoGalleryOfTheMainPage.scss";
import Photos from "../../Photos/Photos";

import { useDispatch, useSelector } from "react-redux";
import {
  buttonOfTheTypePhotos,
  displayLoadingPhotos,
  handleTypesPhotos,
  hideLoadingPhotos,
  showGalleryPhotos,
} from "../../../redux/Actions/userAction";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PreLoader from "../../PreLoader/PreLoader";

function PhotoGalleryOfTheMainPage() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const activeBtn = useSelector((state) => state.photos.btnOfTheTypePhotos);
  const loadingPhotos = useSelector((state) => state.photos.loadingPhotos);

  useEffect(() => {
    if (sessionStorage.getItem("getPhotos")) {
      dispatch(handleTypesPhotos("image/jpeg", pathname));
      dispatch(buttonOfTheTypePhotos("allBtn"));
    }
  }, [dispatch, pathname]);

  const handleClick = (typePhotos, typeBtn) => {
    dispatch(displayLoadingPhotos());
    dispatch(showGalleryPhotos([]));
    setTimeout(() => {
      dispatch(hideLoadingPhotos());
      dispatch(handleTypesPhotos(typePhotos, pathname));
    }, 800);

    dispatch(buttonOfTheTypePhotos(typeBtn));
  };

  const filterGallery = [
    {
      name: "Все фотографии",
      activeClassName: activeBtn.activeBtn === "allBtn",
      onClick: () => handleClick("image/jpeg", "allBtn"),
    },
    {
      name: "Новорожденные",
      activeClassName: activeBtn.activeBtn === "newbornBtn",
      onClick: () => handleClick("newborn", "newbornBtn"),
    },
    {
      name: "Малыши",
      activeClassName: activeBtn.activeBtn === "babyBtn",
      onClick: () => handleClick("baby", "babyBtn"),
    },
    {
      name: "Семейные",
      activeClassName: activeBtn.activeBtn === "familyBtn",
      onClick: () => handleClick("family", "familyBtn"),
    },
  ];
  return (
    <section className="gallery">
      <ul className="gallery__list-title">
        {filterGallery.map((item, index) => {
          return (
            <li className="gallery__title-element" key={index}>
              <button
                type="button"
                className={`gallery__title-link ${item.activeClassName ? "gallery__title-link_active" : ""}`}
                onClick={item.onClick}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
      {loadingPhotos ? <PreLoader /> : <Photos />}
    </section>
  );
}
export default PhotoGalleryOfTheMainPage;
