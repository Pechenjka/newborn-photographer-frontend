export const changeColorPage = () => {

  const initColor = {r:255,g:255,b:255,a:1}
  const colorAfterScroll = {r:255,g:252,b:236,a:1}

  //Текущая позиция скролла
  const scrollTop = window.pageXOffset || document.documentElement.scrollTop;

  //Получаем высоту видимой части окна
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )- window.innerHeight;

  const percent = scrollTop/scrollHeight;
  const color = {r:0,g:0,b:0,a:0};

  let tmp = Math.abs(initColor.r - colorAfterScroll.r) * percent;
  color.r = Math.ceil(initColor.r > colorAfterScroll.r ? initColor.r - tmp : colorAfterScroll.r + tmp)

  tmp = Math.abs(initColor.g - colorAfterScroll.g) * percent;
  color.g = Math.ceil(initColor.g > colorAfterScroll.g ? initColor.g - tmp : colorAfterScroll.g + tmp)

  tmp = Math.abs(initColor.b - colorAfterScroll.b) * percent;
  color.b = Math.ceil(initColor.b > colorAfterScroll.b ? initColor.b - tmp : colorAfterScroll.b + tmp)

  tmp = Math.abs(initColor.a - colorAfterScroll.a) * percent;
  color.a = initColor.a > colorAfterScroll.a ? initColor.a - tmp : colorAfterScroll.a + tmp;

  // color.a = color.a.toFixed(2)
  // console.log(color.a)

  const page = document.querySelector('.page')
  page.style.backgroundColor = `rgba(${color.r},${color.g},${color.b},${color.a})`;
}
