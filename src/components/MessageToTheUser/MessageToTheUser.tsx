import React from "react";
import "./MessageToTheUser.scss";
import iconChecked from "../../images/icon-checked.svg";
import { PropsMessageToTheUser } from "../../types";

const MessageToTheUser: React.FC<PropsMessageToTheUser> = (props) => {
  const { title, text = "Мы свяжемся с вами в ближайшее время", icon = iconChecked, onClose } = props;

  return (
    <div className="messageToTheUser">
      <div className="messageToTheUser__container">
        <img src={icon} alt="картинка" className="messageToTheUser__image" />
        <h3 className="messageToTheUser__title">{title}</h3>
        <p className="messageToTheUser__text">{text}</p>
        <button className="messageToTheUser__button" type="button" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default MessageToTheUser;
