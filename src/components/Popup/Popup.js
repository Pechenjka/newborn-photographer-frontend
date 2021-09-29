import "./Popup.scss";
import { useEffect } from "react";

function Popup({ onClick, children, openPopup }) {
  useEffect(() => {
    if (openPopup) {
      document.body.classList.add("disabledScroll");
    } else {
      document.body.classList.remove("disabledScroll");
    }
  }, [openPopup]);

  return (
    <div className={`popup ${openPopup ? "popup__opened" : ""}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Popup;
