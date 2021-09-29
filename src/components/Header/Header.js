import "./Header.scss";
import photographer from "../../images/logo-header-photographer.png";
import NavMenu from "../NavMenu/NavMenu";
import { closeBurgerMenu, openBurgerMenu } from "../../redux/Actions/userAction";

import { useDispatch, useSelector } from "react-redux";

function Header({ timerRef }) {
  const dispatch = useDispatch();
  const burgerMenu = useSelector((state) => state.user.burgerMenu);

  //Изменение цвета header при прокрутки страницы
  window.onscroll = () => {
    const header = document.querySelector(".header");
    if (window.pageYOffset > 70) {
      header.classList.add("header__changeColor");
    } else {
      header.classList.remove("header__changeColor");
    }
  };

  //Обработчик открытия закрытия бургер-меню
  const handleOpenAndCloseBurgerMenu = () => {
    if (burgerMenu) {
      const link = document.querySelectorAll(".navigation__link-arrow");
      const containerWithSubLinks = document.querySelectorAll(".navigation__subLinks-container");
      link.forEach((item) => item.classList.remove("subLinks__active"));
      containerWithSubLinks.forEach((item) => item.classList.remove("navigation__subLinks-container_active"));
      dispatch(closeBurgerMenu());
    } else {
      dispatch(openBurgerMenu());
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={photographer} alt="лого фотографа" />
        <div
          className={`header__burger-icon ${burgerMenu ? "header__burger-icon_close" : ""}`}
          onClick={handleOpenAndCloseBurgerMenu}
        >
          <span></span>
        </div>
        <NavMenu timerRef={timerRef} handleOpenAndCloseBurgerMenu={handleOpenAndCloseBurgerMenu} />
      </div>
    </header>
  );
}
export default Header;
