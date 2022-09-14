import React, { useEffect } from "react";
import "./NavMenu.scss";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import { links } from "../../../../../utils/config";
import { useDisabledScroll } from "../../../../../hooks/useDisabledScroll";
import { useAppSelector } from "../../../../../redux/hooks";
import { ILink, ISubLink, PropsNavMenu } from "../../../../../types";
import { Button } from "../../../../../components/Button";
import logoUser from "../../../../../images/user.webp";

const NavMenu: React.FC<PropsNavMenu> = ({ handlerOpenAndCloseBurgerMenu, openBurgerMenu }) => {
  const { pathname } = useLocation();
  const { handlerDisabledScroll } = useDisabledScroll;
  const { packetInBasket } = useAppSelector((state) => state.packets);
  const { auth, user } = useAppSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    handlerDisabledScroll(openBurgerMenu);
  }, [handlerDisabledScroll, openBurgerMenu]);

  //Обработчик клика по ссылке подменю
  const handleClickDropdownLink = (event: React.MouseEvent, type: string): void => {
    if (pathname.includes(type)) {
      return event.stopPropagation();
    }
    if (window.innerWidth <= 1024) {
      handlerOpenAndCloseBurgerMenu();
    }
  };

  //Обработчик клика по ссылке меню
  const handleClickLink = (): void => {
    if (window.innerWidth <= 1024) {
      handlerOpenAndCloseBurgerMenu();
    }
  };

  //Обработчик клика по кнопке профиля
  const handleClickAuthorization = (): void => {
    if (window.innerWidth <= 1024) {
      handlerOpenAndCloseBurgerMenu();
    }
    history.push(auth ? "/profile" : "/signin");
  };

  //Обработчик клика по корзине
  const handleClickFromBasket = (event: React.MouseEvent): void => {
    if (packetInBasket.length) {
      history.push("/basket");
      if (window.innerWidth <= 1024) {
        handlerOpenAndCloseBurgerMenu();
      }
    }
    event.stopPropagation();
  };

  const pathHiddenMenu = ["/aboutMe", "/contacts", "/photo-products"];

  //Обработчик клика по ссылке меню в мобильной версии
  const handleClickLinkMobileVersion = (linkActive: ILink): void => {
    const links = document.querySelectorAll(".navigation__link-arrow") as NodeListOf<Element>;
    const containerWithSubLinks = document.querySelectorAll(".navigation__subLinks-container") as NodeListOf<Element>;
    if (window.innerWidth <= 1024) {
      links.forEach((link: Element) => {
        if (link.textContent === linkActive.name) {
          link.classList.toggle("subLinks__active");
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
                  className={`navigation__link  ${
                    (item.select && !item.logo) || (window.innerWidth < 1024 && item.logo)
                      ? "navigation__link-arrow"
                      : ""
                  }`}
                  onClick={() => handleClickLinkMobileVersion(item)}
                >
                  {item.logo ? (
                    <div
                      className={`navigation__link-logo ${
                        pathHiddenMenu.indexOf(pathname) > -1 ? "navigation__link-logo_active" : ""
                      }`}
                    >
                      <span></span>
                    </div>
                  ) : (
                    item.name
                  )}
                </div>
              ) : (
                <NavLink
                  className={`navigation__link ${item.select ? "navigation__link-arrow" : ""}`}
                  activeClassName="navigation__link_active"
                  exact={true}
                  to={item.path ? item.path : ""}
                  onClick={handleClickLink}
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
                          onClick={(event: React.MouseEvent) => el.type && handleClickDropdownLink(event, el.type)}
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
        <li className="navigation__container-link">
          <div className="navigation__containerBtnUser">
            <Button
              styleButton="ping"
              type="button"
              edit
              editStyle="buttonUser"
              buttonWithIcon
              icon={logoUser}
              onClick={handleClickAuthorization}
              // onClick={adminRole ? () => history.push("/admin") : handleClickAuthorization}
            >
              {user.name.length ? <span className="navigation__textUserBtn">{user.name}</span> : "Войти"}
            </Button>
          </div>
        </li>
        <li className="navigation__container-link">
          {user.role.includes("ADMIN") ? (
            <Link to="/admin">Админ-панель</Link>
          ) : (
            <div>
              <div className="navigation__basket navigation__tooltip" onClick={handleClickFromBasket}>
                {packetInBasket.length > 0 ? (
                  <span className="navigation__basket_notEmpty ">{packetInBasket.length}</span>
                ) : (
                  <div className="navigation__basketTooltip navigation__tooltip_active">Ваша корзина пуста</div>
                )}
              </div>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
