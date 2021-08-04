import "./Popup.scss";

function Popup({ onClick, children, openPopup }) {
  return (
    <div className={`popup ${openPopup ? "popup__opened" : ""}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Popup;
