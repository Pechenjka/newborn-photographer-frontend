import "./Gallery.scss";
import Photos from "./Photos/Photos";
import { useDispatch } from "react-redux";
import { handleTypesPhotos } from "../../redux/Actions/photosActions";
import { useEffect, useState } from "react";

function Gallery() {
  const dispatch = useDispatch();

  const [button, setButton] = useState({ activeBtn: "typeBtn" });

  useEffect(() => {
    setButton({ activeBtn: "allBtn" });
  }, []);

  const handleClick = (typePhotos, typeBtn) => {
    dispatch(handleTypesPhotos(typePhotos));
    setButton({ activeBtn: typeBtn });
  };

  const filterGallery = [
    {
      name: "Все фотографии",
      activeClassName: button.activeBtn === "allBtn",
      onClick: () => handleClick("jpg", "allBtn"),
    },
    {
      name: "Новорожденные",
      activeClassName: button.activeBtn === "newbornBtn",
      onClick: () => handleClick("newborn", "newbornBtn"),
    },
    {
      name: "Малыши",
      activeClassName: button.activeBtn === "babyBtn",
      onClick: () => handleClick("baby", "babyBtn") },
    {
      name: "Семейная",
      activeClassName: button.activeBtn === "familyBtn",
      onClick: () => handleClick("family", "familyBtn"),
    },
  ];

  return (
    <section className="gallery">
      <ul className="gallery__list-title">
        {filterGallery.map((item) => {
          return (
            <li className="gallery__title-element" key={item.name}>
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
export default Gallery;
