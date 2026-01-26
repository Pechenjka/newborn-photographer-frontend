import React from "react";
import "./Footer.scss";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import MyContacts from "../../../components/MyContacts/MyContacts";
import SocialLinks from "../../../components/SocialLinks/SocialLinks";
import { useLocation } from "react-router-dom";

const Footer: React.FC = () => {
  const { pathname } = useLocation();
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
            Alena Lobacheva Photography.
          </p>
          <p className={`footer__copyright-text ${showMyContacts ? "footer__copyright-text_edit" : ""}`}>
            Newborn, Baby, Family & Maternity Photographer | Charlotte, NC
          </p>
          <p className={`footer__copyright-text ${showMyContacts ? "footer__copyright-text_edit" : ""}`}>
            All rights reserved.
          </p>
          <a
            className={`footer__copyright-link ${showMyContacts ? "footer__copyright-link_edit" : ""}`}
            title="Go to sitemap"
            href="https://alenalobacheva.com/sitemap.xml"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
