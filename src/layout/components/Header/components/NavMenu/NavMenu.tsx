import React, { useEffect } from "react";
import "./NavMenu.scss";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { links } from "../../../../../utils/config";
import { useDisabledScroll } from "../../../../../hooks/useDisabledScroll";
import { useAppDispatch, useAppSelector } from "../../../../../redux/hooks";
import { ILink, ISubLink, PropsNavMenu } from "../../../../../types";
import { Button } from "../../../../../components/Button";
import logoUser from "../../../../../images/user.webp";
import cx from "classnames/bind";
import { handleSetLanguage } from "../../../../../redux/Reducers/appSlice";
import { useTranslation } from "react-i18next";

const NavMenu: React.FC<PropsNavMenu> = ({ handlerOpenAndCloseBurgerMenu, openBurgerMenu }) => {
  const { pathname } = useLocation();
  const { handlerDisabledScroll } = useDisabledScroll;
  const { packetInBasket } = useAppSelector((state) => state.packets);
  const { auth, user } = useAppSelector((state) => state.user);
  const { language } = useAppSelector((state) => state.app);
  const navigate = useNavigate();

  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    handlerDisabledScroll(openBurgerMenu);
  }, [handlerDisabledScroll, openBurgerMenu]);

  //Обработчик клика по ссылке подменю
  const handleClickDropdownLink = (): void => {
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
    navigate(auth ? "/profile" : "/signin");
  };

  //Обработчик клика по корзине
  const handleClickFromBasket = (event: React.MouseEvent): void => {
    if (packetInBasket.length) {
      navigate("/basket");
      if (window.innerWidth <= 1024) {
        handlerOpenAndCloseBurgerMenu();
      }
    }
    event.stopPropagation();
  };

  const pathHiddenMenu = ["/aboutMe", "/contacts", "/photo-products"];

  //change language
  const onclickChangeLanguage = (setLanguage: string) => {
    dispatch(handleSetLanguage(setLanguage));
    return i18n.changeLanguage(setLanguage);
    // }
  };

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
        {links.map((item: ILink) => {
          return (
            <li className="navigation__container-link navigation__view-lists-links" key={item.name}>
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
                    <span> {t(`${item.name}`)}</span>
                  )}
                </div>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    cx(
                      "navigation__link",
                      `navigation__link_${isActive ? "active" : ""}`,
                      item.select ? "navigation__link-arrow" : ""
                    )
                  }
                  end
                  to={item.path ? item.path : ""}
                  onClick={handleClickLink}
                >
                  {t(`${item.name}`)}
                </NavLink>
              )}
              {item.select && (
                <div className={`navigation__subLinks-container navigation__view-lists-links_active`}>
                  {Array.isArray(item.select) &&
                    item.select.map((el: ISubLink) => {
                      return (
                        <NavLink
                          className={({ isActive }) =>
                            cx("navigation__sublink", `navigation__sublink${isActive ? "_active" : ""}`)
                          }
                          to={el.pathSelect}
                          key={el.name}
                          onClick={handleClickDropdownLink}
                        >
                          {t(`${el.name}`)}
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
              disabled={true}
              //onClick={"#"}
              // onClick={handleClickAuthorization}
              // onClick={adminRole ? () => history.push("/admin") : handleClickAuthorization}
            >
              {user.name.length ? <span className="navigation__textUserBtn">{user.name}</span> : "Profile"}
            </Button>
          </div>
        </li>
        <li className="navigation__container-link">
          {user.role.includes("ADMIN") ? (
            <Link className="navigation__adminPanel" to="/admin">
              Админ-панель
            </Link>
          ) : (
            <div>
              <div className="navigation__basket navigation__tooltip" onClick={handleClickFromBasket}>
                {packetInBasket.length > 0 ? (
                  <span className="navigation__basket_notEmpty ">{packetInBasket.length}</span>
                ) : (
                  <div className="navigation__basketTooltip navigation__tooltip_active">{t("basket is empty")}</div>
                )}
              </div>
            </div>
          )}
        </li>
        <li className="navigation__container-link">
          <button
            className={`navigation__buttonChangeLanguage ${
              language === "en" ? "navigation__buttonChangeLanguage_active" : ""
            }`}
            type="button"
            onClick={() => onclickChangeLanguage("en")}
          >
            en
          </button>
          <button
            className={`navigation__buttonChangeLanguage ${
              language === "ru" ? "navigation__buttonChangeLanguage_active" : ""
            }`}
            type="button"
            onClick={() => onclickChangeLanguage("ru")}
          >
            ru
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
