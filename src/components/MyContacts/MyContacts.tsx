import "./MyContacts.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MyContacts: React.FC = () => {
  const { pathname } = useLocation();
  const myContactsEdit = pathname === "/contacts" ? "myContacts__edit" : "";
  const { t } = useTranslation();

  return (
    <div className="myContacts">
      <ul className="myContacts__container">
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_place" />
          <p className={`myContacts__text ${myContactsEdit}`}>{t("footer my contacts place")}</p>
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
            href="tel:+1-516-468-4837"
            target="_blank"
          >
            +1-516-468-4837
          </a>
        </li>
        <li className="myContacts__item-container">
          <span className="myContacts__icon myContacts__icon_instagram" />
          <p className={`myContacts__link myContacts__instagram ${myContactsEdit}`}>@newbornphoto_lobacheva</p>
        </li>
      </ul>
    </div>
  );
};

export default MyContacts;
