import "./Footer.scss";
import NewsLetter from "./NewsLetter/NewsLetter";
import MyContacts from "../MyContacts/MyContacts";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useLocation } from "react-router-dom";

function Footer() {
  const { pathname } = useLocation();
  const containerEdit = pathname === "/contacts" ? "footer__container-edit" : "";

  return (
    <footer className="footer">
      <div className={`footer__container ${containerEdit}`}>
        <NewsLetter />
        {pathname === "/contacts" ? null : (
          <div className="footer__links-container">
            <MyContacts />
            <SocialLinks />
          </div>
        )}
        <div className="footer__copyright">
          <p className=" footer__copyright-text"> &#169; 2017-{new Date().getFullYear()}.</p>
          <p className=" footer__copyright-text"> Фотограф Алена Лобачева.</p>
          <p className=" footer__copyright-text">Все права защищены.</p>
          <p className="footer__poweredBy-text">Powered by Petr Lobachev</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

