import "./Popup.scss";
import { useEffect } from "react";
import { useDisabledScroll } from "../../hooks/useDisabledScroll";

const Popup = ({ onClick, children, openPopup }) => {
  const { handlerDisabledScroll } = useDisabledScroll();

  useEffect(() => {
    handlerDisabledScroll(openPopup);
  }, [handlerDisabledScroll, openPopup]);

  return (
    <div className={`popup ${openPopup ? "popup__opened" : ""}`} onClick={onClick}>
      {children}
    </div>
  );
}

export default Popup;
