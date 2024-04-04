import React from "react";
import "./Footer.scss";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import MyContacts from "../../../components/MyContacts/MyContacts";
import SocialLinks from "../../../components/SocialLinks/SocialLinks";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();
  const showMyContacts = pathname.includes("contact");

  return (
    <footer className="footer">
      <div className={`footer__container ${showMyContacts ? "footer__container_edit" : ""}`}>
        <NewsLetter />
        {!showMyContacts && (
          <div className="footer__links-container">
            <MyContacts />
            <SocialLinks />
          </div>
        )}
        <div className={`footer__copyright ${showMyContacts ? "footer__copyright_edit" : ""}`}>
          <p className={`footer__copyright-text ${showMyContacts ? "footer__copyright-text_edit" : ""}`}>
            &copy; {`2017 - ${new Date().getFullYear()}`}.
          </p>
          <p className={`footer__copyright-text ${showMyContacts ? "footer__copyright-text_edit" : ""}`}>
            {t("footer name photographer")}
          </p>
          <p className={`footer__copyright-text ${showMyContacts ? "footer__copyright-text_edit" : ""}`}>
            NYC Newborn Baby Family Maternity Photographer.
          </p>
          <p className={`footer__copyright-text ${showMyContacts ? "footer__copyright-text_edit" : ""}`}>
            {t("footer copyright")}
          </p>
          <Link
            className={`footer__copyright-link ${showMyContacts ? "footer__copyright-link_edit" : ""}`}
            title="sitemap"
            to="https://alenalobacheva.com/sitemap.xml"
          >
            Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
