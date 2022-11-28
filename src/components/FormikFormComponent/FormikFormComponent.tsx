import React from "react";
import { Form, Formik } from "formik";
import Styles from "./style.module.scss";
import { Button, TypeStyleButton } from "../Button";
import classNames from "classnames/bind";
import PreLoader from "../PreLoader/PreLoader";

export interface PropsAdminFrom {
  initialValues: {};
  validationSchema: {};
  onSubmit: (values: any) => void;
  children: React.ReactNode;
  buttonProps: { title: string; style: TypeStyleButton; editStyle?: string; edit?: boolean; onDirty?: boolean };
  styleForm?: string;
  loading: boolean;
  error?: string;
}

export const FormikFormComponent: React.FC<PropsAdminFrom> = ({
  initialValues,
  validationSchema,
  onSubmit,
  children,
  buttonProps,
  styleForm,
  loading,
  error,
}) => {
  const cx = classNames.bind(Styles);
  const formStyles = cx("form", `form__${styleForm}`);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(
        values,
        action
      ) => {
        onSubmit(values);
        action.resetForm();
      }}
      enableReinitialize={true}
    >
      {(props) => (
        <Form className={formStyles} onSubmit={props.handleSubmit}>
          {children}
          <div style={{ display: "flex" }}>
            <Button
              styleButton={buttonProps.style}
              edit={buttonProps.edit}
              editStyle={buttonProps.editStyle}
              type="submit"
              disabled={!props.isValid || (buttonProps.onDirty && !props.dirty)}
            >
              {buttonProps.title}
            </Button>
            {loading && (
              <div style={{ margin: "20px auto 0 20px" }}>
                <PreLoader />
              </div>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};
