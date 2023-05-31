import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import NavMenu from "./components/NavMenu/NavMenu";
import LogoMain from "../../../components/LogoMain/LogoMain";

const Header: React.FC = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);
  const navRef = useRef<any>(null);

  //Изменение цвета header при прокрутки страницы
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 70) {
        navRef.current.classList.add("header__changeColor");
      } else {
        navRef.current.classList.remove("header__changeColor");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <header className="header" ref={navRef}>
      <div className="header__container">
        <div className="header__logo">
          <LogoMain />
        </div>
        <div
          className={`header__burger-icon ${openBurgerMenu ? "header__burger-icon_close" : ""}`}
          onClick={handlerOpenAndCloseBurgerMenu}
        >
          <span></span>
        </div>
        <NavMenu handlerOpenAndCloseBurgerMenu={handlerOpenAndCloseBurgerMenu} openBurgerMenu={openBurgerMenu} />
      </div>
    </header>
  );
};
export default Header;
