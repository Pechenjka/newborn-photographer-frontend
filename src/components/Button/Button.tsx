import React from "react";
import classNames from "classnames/bind";
import Styles from "./style.module.scss";

type TypeButton = "button" | "submit";
type TypeStyle =  "ping" ;

interface ButtonProps {
  children: React.ReactNode;
  styleButton: TypeStyle;
  styleButtonActive?: string;
  buttonWithIcon?: boolean;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  editStyle?: string;
  edit?: boolean;
  type: TypeButton;
  form?: string;
  hide?: boolean
}

const Button: React.FC<ButtonProps> = ({
  children,
  buttonWithIcon = false,
  styleButton,
  disabled = false,
  active = false,
  styleButtonActive,
  onClick,
  editStyle,
  edit = false,
  type,
  form,
  hide
}) => {
  const cx = classNames.bind(Styles);
  const className = cx(
    "button",
    `button__${styleButton}`,
    { 'button_hide': hide },
    { [`button__${styleButtonActive}`]: active },
    { [`button__${styleButton}_disabled`]: disabled },
    { [`button__${styleButton}_${editStyle}`]: edit }
  );
  return (
    <button className={className} onClick={onClick} type={type} form={form} disabled={disabled}>
      {children}
      {buttonWithIcon && <span className={Styles.button__icon} />}
    </button>
  );
};

export default Button;
