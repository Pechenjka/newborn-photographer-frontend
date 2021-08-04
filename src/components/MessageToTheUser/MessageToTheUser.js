import "./MessageToTheUser.scss";
import { useSelector } from "react-redux";
import Spinner from "../Spinner/Spinner";
import Popup from "../Popup/Popup";
import iconChecked from "../../images/icon-checked.svg";

function MessageToTheUser(props) {
  const { title, onClose, openPopup } = props;
  const loading = useSelector((state) => state.photos.loading);

  return (
    <Popup openPopup={openPopup}>
      {loading ? (
        <div className="messageToTheUser__spinner">
          <Spinner />
        </div>
      ) : (
        <div className="messageToTheUser">
          <div className="messageToTheUser__container">
            <img src={iconChecked} alt="картинка" className="messageToTheUser__image" />
            <h3 className="messageToTheUser__title">{title}</h3>
            <p className="messageToTheUser__text">Мы свяжемся с вами в ближайшее время</p>
            <button className="messageToTheUser__button" type="button" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}

export default MessageToTheUser;
