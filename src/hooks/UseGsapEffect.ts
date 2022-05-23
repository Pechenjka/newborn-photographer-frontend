import gsap from "gsap";
import { useRef } from "react";

export interface IUseGsapEffect {
  target: any;
  vars: any;
  animation: () => any;
  animationWithOutReverse: () => any;
}

export const UseGsapEffect = function (this: IUseGsapEffect, target: any, vars: any) {
  this.target = target;
  this.vars = vars;
  this.animationWithOutReverse = animationWithOutReverse.bind(this);

  function animationWithOutReverse(this: { target: any; vars: any }): any {
    const tl = gsap.timeline({
      paused: true,
    });
    tl.from(this.target, this.vars);
    return tl.play();
  }
} as any as { new (target: any, vars: any): IUseGsapEffect };


export const useArrayRef = (): any => {
  const refs = useRef<any>([]);
  refs.current = [];
  return [refs, (ref: any) => ref && refs.current.push(ref)];
};
