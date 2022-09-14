import Styles from "./style.module.scss";
import React from "react";
import { ErrorMessage, useField, Field } from "formik";
import classNames from "classnames/bind";
import { PropsMyTextField } from "../../types";

export type TypeFieldComponent = "input" | "textarea" | "select";

export const MyTextField: React.FC<PropsMyTextField> = ({
  label = true,
  editStyleField,
  editStyleContainer,
  nameLabel,
  component,
  checkbox,
  select = false,
  options,
  placeholder,

  ...props
}) => {
  const [field, meta] = useField(props);

  const cx = classNames.bind(Styles);
  const classNameField = cx(
    "field__item",
    { field__item_error: meta.touched && meta.error },
    { field__item_checkbox: checkbox },
    { [`field__item_${editStyleField}`]: editStyleField }
  );

  const classNameContainerField = cx(
    "field__container",
    { [`field__container_${editStyleContainer}`]: editStyleContainer?.length },
    { field__container_checkbox: checkbox }
  );

  return (
    <div className={classNameContainerField}>
      {label && (
        <label className={Styles.field__label} htmlFor={field.name}>
          {nameLabel}
        </label>
      )}
      <Field className={classNameField} {...field} {...props} as={component} placeholder={placeholder}>
        {options &&
          options.map((option) => (
            <option key={option.title} value={option.value} hidden={option.hidden}>
              {option.title}
            </option>
          ))}
      </Field>
      <ErrorMessage component="div" name={field.name} className={Styles.field__error} />
    </div>
  );
};

