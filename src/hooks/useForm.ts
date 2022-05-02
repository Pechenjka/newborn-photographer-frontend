import React, { useCallback, useState } from "react";

export interface PropsUseFormWithValidation {
  values: any;
  errors: any;
  isValid: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  resetForm: () => void;
}

const useFormWithValidation = (): PropsUseFormWithValidation => {
  const [values, setValues] = useState<Object>({});
  const [errors, setErrors] = useState<Object>({});
  const [isValid, setIsValid] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = event.target;
    const { value } = event.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: event.target.validationMessage });
    const isValid = event.target;
    setIsValid(isValid.closest<any>("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, errors, isValid, handleChange, resetForm };
};

export default useFormWithValidation;
