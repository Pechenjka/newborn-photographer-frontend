import React, { useEffect, useState } from "react";
import "./Footer.scss";
import NewsLetter from "./NewsLetter/NewsLetter";
import MyContacts from "../MyContacts/MyContacts";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const [pageContacts, setPageContacts] = useState<boolean>(false);

  useEffect(() => {
    if (pathname === "/contacts") {
      setPageContacts(true);
    }
  }, [pathname]);

  return (
    <footer className="footer">
      <div className={`footer__container ${pageContacts ? "footer__container_edit" : ""}`}>
        <NewsLetter />
        {pageContacts ? null : (
          <div className="footer__links-container">
            <MyContacts />
            <SocialLinks />
          </div>
        )}
        <div className={`footer__copyright ${pageContacts ? "footer__copyright_edit" : ""}`}>
          <p className={`footer__copyright-text ${pageContacts ? "footer__copyright-text_edit" : ""}`}>
            {" "}
            &#169; 2017-{new Date().getFullYear()}.
          </p>
          <p className={`footer__copyright-text ${pageContacts ? "footer__copyright-text_edit" : ""}`}>
            {" "}
            Фотограф Алена Лобачева.
          </p>
          <p className={`footer__copyright-text ${pageContacts ? "footer__copyright-text_edit" : ""}`}>
            Все права защищены.
          </p>
          <p className={`footer__poweredBy-text ${pageContacts ? "footer__poweredBy-text_edit" : ""} `}>
            Powered by Petr Lobachev
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
