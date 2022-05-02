export interface PropsUseDisabledScroll {
  handlerDisabledScroll: (disabledScroll: boolean) => void;
}

export const useDisabledScroll = (): PropsUseDisabledScroll => {
  const handlerDisabledScroll = (disabledScroll: boolean) => {
    if (disabledScroll) {
      document.body.classList.add("disabledScroll");
    } else {
      document.body.classList.remove("disabledScroll");
    }
  };

  return { handlerDisabledScroll };
};
