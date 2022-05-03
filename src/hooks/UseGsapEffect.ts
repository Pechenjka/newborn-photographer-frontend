import gsap from "gsap";

export interface IUseGsapEffect {
  target: any;
  vars: any;
  animation: () => any;
  animationWithOutReverse: () => any;
}

export const UseGsapEffect = function (this: IUseGsapEffect, target: any, vars: any) {
  this.target = target;
  this.vars = vars;

  this.animation = animation.bind(this);
  this.animationWithOutReverse = animationWithOutReverse.bind(this);

  function animation(this: { target: any; vars: any }): any {
    const tl = gsap.timeline({
      paused: true,
      onComplete: () => {
        tl.reverse().delay(0.3);
      },
    });
    tl.to(this.target, this.vars);
    return tl.play();
  }

  function animationWithOutReverse(this: { target: any; vars: any }): any {
    const tl = gsap.timeline({
      paused: true,
    });
    tl.from(this.target, this.vars);
    return tl.play();
  }
} as any as { new (target: any, vars: any): IUseGsapEffect };
