import "./MyContacts.scss";
import React from "react";
import { useLocation } from "react-router-dom";

const MyContacts: React.FC = () => {
  const { pathname } = useLocation();
  const myContactsEdit = pathname === "/contact" ? "myContacts__edit" : "";

  return (
    <div className="myContacts">
      <ul className="myContacts__container">
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_place" />
          <a
            className={`myContacts__link myContacts__text ${myContactsEdit}`}
            href="https://www.google.com/maps/search/?api=1&query=Solon,+OH"
            target="_blank"
            rel="noopener noreferrer"
            title="Solon map"
          >
            Cleveland (Solon), OH.
          </a>
        </li>
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_place" />
          <a
            className={`myContacts__link myContacts__text ${myContactsEdit}`}
            href="https://www.google.com/maps/search/?api=1&query=New+York,+NY"
            target="_blank"
            rel="noopener noreferrer"
            title="New York map"
          >
            New York, NY.
          </a>
        </li>
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_email" />
          <a
            className={`myContacts__link myContacts__email ${myContactsEdit}`}
            href="https://mail.google.com/mail/?view=cm&fs=1&to=lobachevaphotography@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            title="email"
          > lobachevaphotography@gmail.com
          </a>
        </li>
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_phone" />
          <a
            className={`myContacts__link myContacts__phone ${myContactsEdit}`}
            href="tel:+1-516-468-4837"
            title="phone"
          >
            +1-516-468-4837
          </a>
        </li>
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_instagram" />
          <a
            className={`myContacts__link myContacts__instagram ${myContactsEdit}`}
            href="https://www.instagram.com/lobachevaphotography/"
            target="_blank"
            rel="noopener noreferrer"
            title="profile of Alena Lobacheva in Instagram"
          >
            @lobachevaphotography
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MyContacts;
