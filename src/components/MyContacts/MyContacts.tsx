import "./MyContacts.scss";
import React from "react";
import { useLocation } from "react-router-dom";

const MyContacts: React.FC = () => {
  const { pathname } = useLocation();
  const isContactPage = pathname === "/contact";
  const myContactsEdit = isContactPage ? "myContacts__edit" : "";

  return (
    <div className="myContacts">
      <ul className="myContacts__container">
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_place" />
          <a
            className={`myContacts__link myContacts__text ${myContactsEdit}`}
            href="https://www.google.com/maps/place/Charlotte,+NC/"
            target="_blank"
            rel="noopener noreferrer"
            title="Photographer in Charlotte, North Carolina"
            aria-label="Photographer in Charlotte, North Carolina"
          >
            Charlotte, NC (and surrounding areas)
          </a>
        </li>

        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_email" />
          <a
            className={`myContacts__link myContacts__email ${myContactsEdit}`}
            href="mailto:lobachevaphotography@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Email Alena Lobacheva"
            aria-label="Email Alena Lobacheva"
          >
            lobachevaphotography@gmail.com
          </a>
        </li>

        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_phone" />
          <a
            className={`myContacts__link myContacts__phone ${myContactsEdit}`}
            href="tel:+15164684837"
            title="Call Alena Lobacheva"
            aria-label="Call Alena Lobacheva"
          >
            +1 (516) 468-4837
          </a>
        </li>

        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_instagram" />
          <a
            className={`myContacts__link myContacts__instagram ${myContactsEdit}`}
            href="https://www.instagram.com/lobachevaphotography/"
            target="_blank"
            rel="noopener noreferrer"
            title="Alena Lobacheva Photography on Instagram"
            aria-label="Alena Lobacheva Photography on Instagram"
          >
            @lobachevaphotography
          </a>
        </li>
      </ul>
      {isContactPage && (
        <div className="myContacts__seo-text">
          <p style={{ maxWidth: "1000px", margin: "auto" }}>
            Based in Charlotte, North Carolina, I offer lifestyle, family, maternity, and portrait photography sessions
            across the Charlotte metro area including Ballantyne, Matthews, Indian Land, and Huntersville. Let’s capture
            your story.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyContacts;
