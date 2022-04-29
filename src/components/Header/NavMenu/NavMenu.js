import { NavLink, useLocation } from "react-router-dom";
import "./NavMenu.scss";
import { links, packets } from "../../../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { handlerDisplayPricePackets, handlerTimeOutClick } from "../../../redux/Reducers/appSlice";
import { useEffect } from "react";
import { useDisabledScroll } from "../../../hooks/useDisabledScroll";
import { handlerShowPhotos } from "../../../redux/Reducers/photoSlice";
import { useGsapEffect } from "../../../hooks/useGsapEffect";

const NavMenu = ({ timerRef, handlerOpenAndCloseBurgerMenu, openBurgerMenu }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { handlerDisabledScroll } = useDisabledScroll();
  const { displayPricePackets, timeOutClick } = useSelector((state) => state.app);

  useEffect(() => {
    handlerDisabledScroll(openBurgerMenu);
  }, [openBurgerMenu]);

  const { animation } = useGsapEffect(".animElement", {
    duration: 0.4,
    y: 50,
    opacity: 0,
    stagger: 0.05,
    ease: "back",
  });

  const timeOut = () => {
    setTimeout(() => {
      dispatch(handlerTimeOutClick(true))
    }, 1100);
  };

  //Обработчик клика по ссылке подменю
  const handleClickDropdownLink = (event, type, path, el) => {
    clearInterval(timerRef.current);
    if (pathname.includes(type)) {
      return event.stopPropagation();
    }
    if (window.innerWidth <= 768) {
      handlerOpenAndCloseBurgerMenu();
    }

    if (el.name.toLowerCase().includes("фотогалерея")) {
      if (timeOutClick) {
        dispatch(handlerTimeOutClick(false))
        //Вывод следующих фотографий с задержкой для полной отрисовки
        dispatch(handlerShowPhotos({ type: type, order: "sort" }));
        animation();
        timeOut()
      } else {
          event.preventDefault();
      }
    } else {
      //Вывод пакетов в разделе цены и услуги
      dispatch(handlerDisplayPricePackets({ packets, path }));
    }
  };

  //Обработчик клика по ссылке меню
  const handleClickLink = () => {
    clearInterval(timerRef.current);
    if (window.innerWidth <= 768) {
      handlerOpenAndCloseBurgerMenu();
    }
    if (displayPricePackets.length) {
      dispatch(handlerDisplayPricePackets({ packets: null }));
    }
  };

  //Обработчик клика по ссылке меню в мобильной версии
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
      className={`navigation ${openBurgerMenu ? "navigation__burgerMenu_active" : ""}`}
      onClick={handlerOpenAndCloseBurgerMenu}
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
                  onClick={() => handleClickLink()}
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
                          onClick={(event) => handleClickDropdownLink(event, el.type, el.pathSelect, item)}
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
};

export default NavMenu;
