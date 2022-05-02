import React, { useEffect } from "react";
import "./NavMenu.scss";
import { NavLink, useLocation } from "react-router-dom";
import { links, packets } from "../../../utils/config";
import { handlerDisplayPricePackets, handlerTimeOutClick } from "../../../redux/Reducers/appSlice";
import { useDisabledScroll } from "../../../hooks/useDisabledScroll";
import { handlerShowPhotos } from "../../../redux/Reducers/photoSlice";
import { UseGsapEffect } from "../../../hooks/UseGsapEffect";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { ILink, ISubLink, PropsNavMenu } from "../../../types";

const NavMenu: React.FC<PropsNavMenu> = ({ timerRef, handlerOpenAndCloseBurgerMenu, openBurgerMenu }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const { handlerDisabledScroll } = useDisabledScroll();
  const { displayPricePackets, timeOutClick } = useAppSelector((state) => state.app);

  useEffect(() => {
    handlerDisabledScroll(openBurgerMenu);
  }, [openBurgerMenu]);

  const animationPhotos = new UseGsapEffect(".animElement", {
      duration: 0.4,
      y: 50,
      opacity: 0,
      stagger: 0.05,
      ease: "back",
    }).animation

  const timeOut = (): void => {
    setTimeout(() => {
      dispatch(handlerTimeOutClick(true));
    }, 1100);
  };

  //Обработчик клика по ссылке подменю
  const handleClickDropdownLink = (event: React.MouseEvent, type: string, path: string, el: ILink): void => {
    clearInterval(timerRef.current);
    if (pathname.includes(type)) {
      return event.stopPropagation();
    }
    if (window.innerWidth <= 768) {
      handlerOpenAndCloseBurgerMenu();
    }
    if (el.name.toLowerCase().includes("фотогалерея")) {
      if (timeOutClick) {
        dispatch(handlerTimeOutClick(false));
        //Вывод следующих фотографий с задержкой для полной отрисовки
        dispatch(handlerShowPhotos({ type: type, order: "sort" }));
        animationPhotos();
        timeOut();
      } else {
        event.preventDefault();
      }
    } else {
      //Вывод пакетов в разделе цены и услуги
      dispatch(handlerDisplayPricePackets({ packets, path }));
    }
  };

  //Обработчик клика по ссылке меню
  const handleClickLink = (): void => {
    clearInterval(timerRef.current);
    if (window.innerWidth <= 768) {
      handlerOpenAndCloseBurgerMenu();
    }
    if (displayPricePackets.length) {
      dispatch(handlerDisplayPricePackets({ packets: null }));
    }
  };

  //Обработчик клика по ссылке меню в мобильной версии
  const handleClickLinkMobileVersion = (linkActive: ILink): void => {
    const link = document.querySelectorAll(".navigation__link-arrow") as NodeListOf<Element>;
    const containerWithSubLinks = document.querySelectorAll(".navigation__subLinks-container") as NodeListOf<Element>;
    if (window.innerWidth <= 768) {
      link.forEach((item: Element) => {
        if (item.textContent === linkActive.name) {
          item.classList.toggle("subLinks__active");
        }
      });
      containerWithSubLinks.forEach((el: Element) => {
        // @ts-ignore
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
      <ul
        className="navigation__list_links"
        onClick={(event: React.MouseEvent<HTMLUListElement>) => event.stopPropagation()}
      >
        {links.map((item: ILink, index: number) => {
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
                  to={item.path ? item.path : ""}
                  onClick={() => handleClickLink()}
                >
                  {item.name}
                </NavLink>
              )}
              {item.select && (
                <div className={`navigation__subLinks-container navigation__view-lists-links_active`}>
                  {Array.isArray(item.select) &&
                    item.select.map((el: ISubLink, index: number) => {
                      return (
                        <NavLink
                          className="navigation__sublink"
                          activeClassName="navigation__sublink_active"
                          to={el.pathSelect}
                          key={index}
                          onClick={(event: React.MouseEvent<HTMLAnchorElement>) =>
                            handleClickDropdownLink(event, el.type, el.pathSelect, item)
                          }
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
