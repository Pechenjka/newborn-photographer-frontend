import "./Popup.scss";
import React, { useEffect } from "react";
import { useDisabledScroll } from "../../hooks/useDisabledScroll";
import { PropsPopup } from "../../types";

const Popup: React.FC<PropsPopup> = ({ onClick, children, openPopup }) => {
  const { handlerDisabledScroll } = useDisabledScroll;

  useEffect(() => {
    handlerDisabledScroll(openPopup);
  }, [openPopup]);

  return (
    <div className={`popup ${openPopup ? "popup__opened" : ""}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default Popup;
