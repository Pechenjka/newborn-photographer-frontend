import gsap from "gsap";

export interface IUseGsapEffect {
  target: string;
  vars: any;
  animation: () => void;
}

export const UseGsapEffect = function (this:IUseGsapEffect, target:string, vars: any) {
  this.target = target;
  this.vars = vars;
  this.animation = animation.bind(this);

  function animation(this: { target: string; vars: any }) {
    const tl = gsap.timeline({ paused: true });
    tl.from(this.target, this.vars);
    return tl.play();
  }
} as any as { new (target: string, vars: any): IUseGsapEffect; };
