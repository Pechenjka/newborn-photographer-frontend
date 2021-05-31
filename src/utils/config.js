export const links = [
  { name: "Главная", path: "/" },
  { name: "Обо мне", path: "/aboutMe" },
  {
    name: "Фотогалерея",
    path: "/gallery",
    select: [
      { name: "Новорожденные", pathSelect: "/gallery/newborn" },
      { name: "В ожидании чуда", pathSelect: "/gallery/expectation" },
      { name: "Малыши до 1 года", pathSelect: "/gallery/baby-one-year" },
      { name: "Семейная фотоссесия", pathSelect: "/gallery/family-photo" },
      { name: "Woman фотосъемка", pathSelect: "/gallery/woman-photo" },
      { name: "Выписка из роддома", pathSelect: "/gallery/discharge" },
      { name: "Крещение", pathSelect: "/gallery/christening" },
    ],
  },
  {
    name: "Услуги и цены",
    path: "/price",
    select: [
      { name: "Новорожденные", pathSelect: "/price/newborn" },
      { name: "В ожидании чуда", pathSelect: "/price/expectation" },
      { name: "Малыши до 1 года", pathSelect: "/price/baby-one-year" },
      { name: "Семейная фотоссесия", pathSelect: "/price/family-photo" },
      { name: "Woman фотосъемка", pathSelect: "/price/woman-photo" },
      { name: "Выписка из роддома", pathSelect: "/price/discharge" },
      { name: "Крещение", pathSelect: "/price/christening" },
    ],
  },
  {
    name: "О фотосессии",
    path: "/about-photo",
    select: [
      { name: "О фотосессии новорожденного", pathSelect: "/about-photo/newborn" },
      { name: "О фотосессии беременности", pathSelect: "/about-photo/expectation" },
    ],
  },
  { name: "Отзывы", path: "/reviews" },
  { name: "Контакты", path: "/contacts" },
];
