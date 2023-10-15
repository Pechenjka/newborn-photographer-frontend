export interface PropsHandlerUseScroll {
  addClass: string;
  removeClass: string;
  px: number;
  ref: any;
}

const useScroll = () => {
  const handlerUseScroll = ({ addClass, removeClass, px, ref }: PropsHandlerUseScroll) => {
    const handlerScroll = () => {
      if (ref.current)
        window.pageYOffset > px ? ref.current.classList.add(addClass) : ref.current.classList.remove(removeClass);
    };
    window.addEventListener("scroll", handlerScroll);
    return () => {
      window.removeEventListener("scroll", handlerScroll);
    };
  };
  return { handlerUseScroll };
};

export default useScroll;
