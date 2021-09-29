import { NavLink } from "react-router-dom";
import "./NavMenu.scss";
import { links, packets } from "../../utils/config";
import {
  buttonOfTheTypePhotos,
  deleteAllPhotosOneType,
  displayPricePackets,
  handlePricePackets,
  handleTypesPhotos,
  notDisplayPhotosOnThePagePhotoGallery,
  showGalleryPhotos,
} from "../../redux/Actions/userAction";
import { useDispatch, useSelector } from "react-redux";

function NavMenu({ timerRef, handleOpenAndCloseBurgerMenu }) {
  const dispatch = useDispatch();
  const burgerMenu = useSelector((state) => state.user.burgerMenu);
  const displayPhotos = useSelector((state) => state.photos.displayPhotosOnThePagePhotoGallery);

  //Обработчик клика по ссылке подменю
  const handleClickDropdownLink = (type, path) => {
    clearInterval(timerRef.current);
    dispatch(displayPricePackets([]));
    dispatch(buttonOfTheTypePhotos(""));
    if (displayPhotos) {
      dispatch(handleTypesPhotos(type, path));
    }
    dispatch(handlePricePackets(packets, path));
    dispatch(notDisplayPhotosOnThePagePhotoGallery());
    if (window.innerWidth <= 768) {
      handleOpenAndCloseBurgerMenu();
    }
  };

  //Обработчик клика по ссылке меню
  const handleClickLink = (path) => {
    clearInterval(timerRef.current);
    if (window.innerWidth <= 768) {
      handleOpenAndCloseBurgerMenu();
    }
    if (path !== "/") {
      dispatch(showGalleryPhotos([]));
      dispatch(buttonOfTheTypePhotos(""));
    }
    dispatch(deleteAllPhotosOneType([]));
    dispatch(notDisplayPhotosOnThePagePhotoGallery());
    dispatch(displayPricePackets([]));
  };
  //Обработчик клика по ссылке меню
  const handleClickLinkMobileVersion = (linkActive) => {
    const link = document.querySelectorAll(".navigation__link-arrow");
    const containerWithSubLinks = document.querySelectorAll(".navigation__subLinks-container");
    if (window.innerWidth <= 768) {
      link.forEach((item) => {
        if (item.textContent === linkActive.name) {
          item.classList.toggle("subLinks__active");
        }
      });
      containerWithSubLinks.forEach((el) => {
        if (el.childElementCount === linkActive.select.length) {
          el.classList.toggle("navigation__subLinks-container_active");
          el.classList.toggle("navigation__view-lists-links_active");
        }
      });
    }
  };

  return (
    <nav
      className={`navigation ${burgerMenu ? "navigation__burgerMenu_active" : ""}`}
      onClick={handleOpenAndCloseBurgerMenu}
    >
      <ul className="navigation__list_links" onClick={(e) => e.stopPropagation()}>
        {links.map((item, index) => {
          return (
            <li className="navigation__container-link navigation__view-lists-links" key={index}>
              {item.select ? (
                <div
                  className={`navigation__link  ${item.select ? "navigation__link-arrow" : ""}`}
                  onClick={() => handleClickLinkMobileVersion(item)}
                >
                  {item.name}
                </div>
              ) : (
                <NavLink
                  className={`navigation__link ${item.select ? "navigation__link-arrow" : ""}`}
                  activeClassName="navigation__link_active"
                  exact={true}
                  to={item.path}
                  onClick={() => handleClickLink(item.path)}
                >
                  {item.name}
                </NavLink>
              )}
              {item.select && (
                <div className={`navigation__subLinks-container navigation__view-lists-links_active`}>
                  {Array.isArray(item.select) &&
                    item.select.map((el, index) => {
                      return (
                        <NavLink
                          className="navigation__sublink"
                          activeClassName="navigation__sublink_active"
                          to={el.pathSelect}
                          key={index}
                          onClick={() => handleClickDropdownLink(el.type, el.pathSelect)}
                        >
                          {el.name}
                        </NavLink>
                      );
                    })}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMenu;
