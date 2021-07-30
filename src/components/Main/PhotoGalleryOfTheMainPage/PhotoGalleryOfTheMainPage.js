import "./PhotoGalleryOfTheMainPage.scss";
import Photos from "../../Photos/Photos";

import { useDispatch, useSelector } from "react-redux";
import {
  buttonOfTheTypePhotos,
  displayLoading,
  handleTypesPhotos,
  hideLoading,
  showGalleryPhotos,
} from "../../../redux/Actions/userAction";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function PhotoGalleryOfTheMainPage() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const activeBtn = useSelector((state) => state.photos.btnOfTheTypePhotos);

  useEffect(() => {
    if (localStorage.getItem("getPhotos")) {
      dispatch(handleTypesPhotos("image", pathname));
      dispatch(buttonOfTheTypePhotos("allBtn"));
    }
  }, [dispatch, pathname]);

  // const handleClick = (typePhotos, typeBtn) => {
  //   dispatch(displayLoading());
  //   const promise = new Promise((resolve, reject) => {
  //    resolve(
  //      ()=> {
  //        dispatch(showGalleryPhotos([]))
  //        // setTimeout(() => {
  //        dispatch(handleTypesPhotos(typePhotos, pathname));
  //        // }, 500);
  //        dispatch(buttonOfTheTypePhotos(typeBtn))
  //      }
  //     )
  //      }
  //   );
  //
  //   promise
  //     .then((res) => (res.ok ? res : Promise.reject(new Error(`Error: ${res.status}`))))
  //     .then((res) => {
  //
  //       return res})
  //     .catch((err) => console.log(err))
  //     .finally(() => dispatch(hideLoading()));
  // };

  // const handleClick = (typePhotos, typeBtn) => {
  //
  //   try {
  //     dispatch(displayLoading());
  //     dispatch(showGalleryPhotos([]));
  //     setTimeout(() => {
  //       dispatch(handleTypesPhotos(typePhotos, pathname));
  //     }, 500);
  //     dispatch(buttonOfTheTypePhotos(typeBtn));
  //     dispatch(hideLoading())
  //   } catch (e) {
  //     console.log(e)
  //   }
  //
  //
  // };


  const handleClick = (typePhotos, typeBtn) => {
    dispatch(showGalleryPhotos([]));
    setTimeout(() => {
      dispatch(handleTypesPhotos(typePhotos, pathname));
    }, 500);
    dispatch(buttonOfTheTypePhotos(typeBtn));
  };

  const filterGallery = [
    {
      name: "Все фотографии",
      activeClassName: activeBtn.activeBtn === "allBtn",
      onClick: () => handleClick("image", "allBtn"),
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
      <Photos />
    </section>
  );
}
export default PhotoGalleryOfTheMainPage;
