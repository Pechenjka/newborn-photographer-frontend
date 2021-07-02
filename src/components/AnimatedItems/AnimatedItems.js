export const animatedItems = () => {
  const animItems = document.querySelectorAll(".anim-items");
  if (animItems.length > 0) {
   window.addEventListener("scroll", animOnScroll);
    function animOnScroll() {
      for (let i = 0; i < animItems.length; i++) {
        const animEl = animItems[i];
        const animElHeight = animEl.offsetHeight;
        const animElOffset = offset(animEl).top;
        const animStart = 10;

        let animElPoint = window.innerHeight - animElHeight / animStart;
        if (animElHeight > window.innerHeight) {
          animElPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if (window.pageYOffset > animElOffset - animElPoint && window.pageYOffset < animElOffset + animElHeight) {
          animEl.classList.add("anim-items_active");
        } else {
          if (!animEl.classList.contains('anim-no-hide')) {
          animEl.classList.remove("anim-items_active");
           }
        }
      }
    }
    function offset(el) {
      let rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
    }
    setTimeout(() => {
      animOnScroll();
    }, 500);
  }
};
