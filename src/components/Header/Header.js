import "./Header.scss";
import photographer from "../../images/logo-header-photographer.png";
import NavMenu from "../NavMenu/NavMenu";

function Header({ timerRef }) {
  window.onscroll = () => {
    const header = document.querySelector(".header");
    if (window.pageYOffset > 70) {
      header.classList.add("header__changeColor");
    } else {
      header.classList.remove("header__changeColor");
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <img className="header__logo" src={photographer} alt="лого фотографа" />
        <NavMenu timerRef={timerRef} />
      </div>
    </header>
  );
}
export default Header;
