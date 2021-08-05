import { NavLink } from "react-router-dom";
import "./NavMenu.scss";
import { links, packets } from "../../utils/config";
import {
  buttonOfTheTypePhotos,
  deleteAllPhotosOneType, displayPricePackets,
  handlePricePackets,
  handleTypesPhotos,
  notDisplayPhotosOnThePagePhotoGallery,
  showGalleryPhotos,
} from "../../redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function NavMenu({ timerRef }) {
  const dispatch = useDispatch();
  const displayPhotos = useSelector((state) => state.photos.displayPhotosOnThePagePhotoGallery);

  //Обработчик клика по ссылке подменю
  const handleClickDropdownLink = (type, path) => {
    clearInterval(timerRef.current);
    dispatch(displayPricePackets([]));
    //dispatch(showGalleryPhotos([]));
    //dispatch(deleteAllPhotosOneType([]));
    dispatch(buttonOfTheTypePhotos(""));
   if (displayPhotos) {
      dispatch(handleTypesPhotos(type, path));
    }
    dispatch(handlePricePackets(packets, path));

    dispatch(notDisplayPhotosOnThePagePhotoGallery());

  };

  const handleClickLink = () => {
    clearInterval(timerRef.current);
    dispatch(showGalleryPhotos([]));
    dispatch(buttonOfTheTypePhotos(""));
    dispatch(deleteAllPhotosOneType([]));
    dispatch(notDisplayPhotosOnThePagePhotoGallery());
    dispatch(displayPricePackets([]));
  };

  return (
    <nav className="navigation">
      <ul className="navigation__list_links">
        {links.map((item, index) => {
          return (
            <li className="navigation__container-link navigation__view-lists-links" key={index}>
              {item.select ? (
                <div className={`navigation__link ${item.select ? "navigation__link-arrow" : ""}`}>{item.name}</div>
              ) : (
                <NavLink
                  className={`navigation__link ${item.select ? "navigation__link-arrow" : ""}`}
                  activeClassName="navigation__link_active"
                  exact={true}
                  to={item.path}
                  onClick={handleClickLink}
                >
                  {item.name}
                </NavLink>
              )}
              <div className="navigation__select-container navigation__view-lists-links_active">
                {Array.isArray(item.select) &&
                  item.select.map((el, index) => {
                    return (
                      <NavLink
                        className="navigation__select-link"
                        activeClassName="navigation__select-link_active"
                        to={el.pathSelect}
                        key={index}
                        onClick={() => handleClickDropdownLink(el.type, el.pathSelect)}
                      >
                        {el.name}
                      </NavLink>
                    );
                  })}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default NavMenu;
