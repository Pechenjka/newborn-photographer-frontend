export const useDisabledScroll = () => {
  const handlerDisabledScroll = (item) => {
    if (item) {
      document.body.classList.add("disabledScroll");
    } else {
      document.body.classList.remove("disabledScroll");
    }
  };

  return { handlerDisabledScroll };
};
