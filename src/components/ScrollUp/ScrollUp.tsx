import Styles from "./style.module.scss";
import React, { useEffect, useRef } from "react";
import * as Scroll from "react-scroll";
import useScroll from "../../hooks/useScroll";
import scrollUpIcon from "../../images/scroll-up.svg";

export const ScrollUp: React.FC = () => {
  const scrollUpRef = useRef<any>(null);
  const { handlerUseScroll } = useScroll();

  // Show and hide arrow scroll up
  useEffect(() => {
    handlerUseScroll({
      addClass: Styles.scrollUp_active,
      removeClass: Styles.scrollUp_active,
      px: 100,
      ref: scrollUpRef,
    });
  }, []);

  const scrollUp = (): void => {
    Scroll.animateScroll.scrollToTop();
  };

  return (
    <div className={Styles.scrollUp} ref={scrollUpRef}>
      <button
        type="button"
        aria-label="Scroll up"
        title="Scroll up"
        className={Styles.scrollUp__button}
        onClick={scrollUp}
      >
        <img className={Styles.scrollUp__buttonIcon} src={scrollUpIcon} alt="scroll up" />
      </button>
    </div>
  );
};
