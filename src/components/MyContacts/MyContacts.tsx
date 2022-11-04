import "./MyContacts.scss";
import React from "react";
import { useLocation } from "react-router-dom";

const MyContacts: React.FC = () => {
  const { pathname } = useLocation();
  const myContactsEdit = pathname === "/contacts" ? "myContacts__edit" : "";

  return (
    <div className="myContacts">
      <ul className="myContacts__container">
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_place" />
          <p className={`myContacts__text ${myContactsEdit}`}>Москва и Московская область</p>
        </li>
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_email" />
          <a
            className={`myContacts__link myContacts__email ${myContactsEdit}`}
            href="https://e.mail.ru/compose/?to=newbornphoto_lobacheva@mail.ru"
            target="_blank"
          >
            newbornphoto_lobacheva@mail.ru
          </a>
        </li>
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_phone" />
          <a
            className={`myContacts__link myContacts__phone ${myContactsEdit}`}
            href="tel:+7-926-936-1110"
            target="_blank"
          >
            +7-926-936-11-10
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MyContacts;
