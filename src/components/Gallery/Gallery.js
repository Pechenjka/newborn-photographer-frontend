import "./Gallery.scss";
import Photos from "./Photos/Photos";
import { useDispatch } from "react-redux";
import { handleTypesPhotos } from "../../redux/Actions/userAction";
import { memo, useEffect, useState } from "react";

const Gallery = memo(() => {
  const dispatch = useDispatch();

  const [button, setButton] = useState({ activeBtn: "typeBtn" });

  useEffect(() => {
    if (localStorage.getItem("getPhotos")) {
      dispatch(handleTypesPhotos("image"));
      setButton({ activeBtn: "allBtn" });
    }
    // dispatch(handleTypesPhotos("image"));
    // setButton({ activeBtn: "allBtn" });
  }, []);

  const handleClick = (typePhotos, typeBtn) => {
    dispatch(handleTypesPhotos(typePhotos));
    setButton({ activeBtn: typeBtn });
  };


  const filterGallery = [
    {
      name: "Все фотографии",
      activeClassName: button.activeBtn === "allBtn",
      onClick: () => handleClick("image", "allBtn"),
    },
    {
      name: "Новорожденные",
      activeClassName: button.activeBtn === "newbornBtn",
      onClick: () => handleClick("newborn", "newbornBtn"),
    },
    {
      name: "Малыши",
      activeClassName: button.activeBtn === "babyBtn",
      onClick: () => handleClick("baby", "babyBtn"),
    },
    {
      name: "Семейная",
      activeClassName: button.activeBtn === "familyBtn",
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
});
export default Gallery;
