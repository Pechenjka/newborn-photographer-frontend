import gsap from "gsap";
import { useRef } from "react";

export const useGsapEffect = (target, vars) => {
  const animation = () => {
    const tl = gsap.timeline({ paused: true });
    tl.from(target, vars);
    return tl.play();
  };

  // const animationPackets = () => {
  //   const tl = gsap.timeline();
  //   tl.from(target, vars1);
  //   return tl.play();
  // };

  function useArrayRef() {
    const refs = useRef([]);
    refs.current = [];
    return [refs, (ref) => ref && refs.current.push(ref)];
  }

  return { animation, useArrayRef };
};
