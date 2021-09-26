import "./MessageToTheUser.scss";
import Popup from "../Popup/Popup";
import iconChecked from "../../images/icon-checked.svg";

function MessageToTheUser(props) {
  const { title, text = "Мы свяжемся с вами в ближайшее время", icon = iconChecked, onClose, openPopup } = props;

  return (
    <Popup openPopup={openPopup}>
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
      {/*)}*/}
    </Popup>
  );
}

export default MessageToTheUser;
