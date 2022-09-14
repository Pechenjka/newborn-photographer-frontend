import React from "react";
import classNames from "classnames/bind";
import Styles from "./style.module.scss";

type TypeButton = "button" | "submit";
export type TypeStyleButton =  "ping" | 'brown' | 'transparent';

interface ButtonProps {
  children: React.ReactNode;
  styleButton: TypeStyleButton;
  styleButtonActive?: string;
  buttonWithIcon?: boolean;
  icon?: string;
  disabled?: boolean;
  active?: boolean;
  onClick?: () => void;
  editStyle?: string;
  edit?: boolean;
  type: TypeButton;
  form?: string;
  hide?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  buttonWithIcon = false,
  icon,
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
     { [`button_disabled`]: disabled },
    { [`button__${styleButton}_${editStyle}`]: edit }
  );
  return (
    <button  className={className} onClick={onClick} type={type} form={form} disabled={disabled}>
      {buttonWithIcon && <img src={icon} alt='logo' className={Styles.button__icon} />}
      {children}
    </button>
  );
};

