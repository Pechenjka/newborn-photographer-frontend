import React, { useState } from "react";
import "./Header.scss";
import photographer from "../../images/logo-header-photographer.png";
import NavMenu from "./NavMenu/NavMenu";
import { PropsTimeRef } from "../../types";

const Header: React.FC<PropsTimeRef> = ({ timerRef }) => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

  //Изменение цвета header при прокрутки страницы
  window.onscroll = () => {
    const header = document.querySelector(".header") as HTMLElement;
    if (window.pageYOffset > 70) {
      header.classList.add("header__changeColor");
    } else {
      header.classList.remove("header__changeColor");
    }
  };

  //Обработчик открытия закрытия бургер-меню
  const handlerOpenAndCloseBurgerMenu = (): void => {
    if (openBurgerMenu) {
      const links = document.querySelectorAll(".navigation__link-arrow");
      const containerWithSubLinks = document.querySelectorAll(".navigation__subLinks-container");
      links.forEach((item) => item.classList.remove("subLinks__active"));
      containerWithSubLinks.forEach((item) => item.classList.remove("navigation__subLinks-container_active"));
      setOpenBurgerMenu(false);
    } else {
      setOpenBurgerMenu(true);
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={photographer} alt="лого фотографа" />
        <div
          className={`header__burger-icon ${openBurgerMenu ? "header__burger-icon_close" : ""}`}
          onClick={handlerOpenAndCloseBurgerMenu}
        >
          <span></span>
        </div>
        <NavMenu
          timerRef={timerRef}
          handlerOpenAndCloseBurgerMenu={handlerOpenAndCloseBurgerMenu}
          openBurgerMenu={openBurgerMenu}
        />
      </div>
    </header>
  );
};
export default Header;
