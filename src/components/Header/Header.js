import "./Header.scss";
import photographer from "../../images/logo-header-photographer.png";
import NavMenu from "../NavMenu/NavMenu";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <img className="header__logo" src={photographer} alt="лого фотографа" />
        <NavMenu />
      </div>
    </div>
  );
}
export default Header;
