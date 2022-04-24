import lifestyle_main from "../images/price/main/lifestyle_main.jpg";
import cocon_main from "../images/price/main/cocon_main.jpg";
import light_main from "../images/price/main/light_main.jpg";
import standard_main from "../images/price/main/standard_main.jpg";
import premium_main from "../images/price/main/premium_main.jpg";
import vip_main from "../images/price/main/vip_main.jpg";
import baby_main from "../images/price/main/baby-one-year-main.jpg";
import babyAllInclusive_main from "../images/price/main/baby-all-inclusive-main.jpg";
import christening_main from "../images/price/main/christening_main.jpg";
import discharge_main from "../images/price/main/discharge_main.jpg";
import pregnancy_main from "../images/price/main/pregnancy_main.jpg";
import family_main from "../images/price/main/family_main.jpg";
import woman_main from "../images/price/main/woman_main.jpg";
import womanContent_main from "../images/price/main/woman-photo-for-blog-main.jpg";

import lifestyle_description from "../images/price/description/desktop/lifestyle_description_desktop.jpg";
import lifestyle_description_mobile from "../images/price/description/mobile/lifestyle_description_mobile.jpg";
import cocon_description from "../images/price/description/desktop/cocon_description_desktop.jpg";
import cocon_description_mobile from "../images/price/description/mobile/cocon_description_mobile.jpg";
import light_description from "../images/price/description/desktop/light_description_desktop.jpg";
import light_description_mobile from "../images/price/description/mobile/light_description_mobile.jpg";
import standard_description from "../images/price/description/desktop/standard_description_desktop.jpg";
import standard_description_mobile from "../images/price/description/mobile/standard_description_mobile.jpg";
import premium_description from "../images/price/description/desktop/premium_description_desktop.jpg";
import premium_description_mobile from "../images/price/description/mobile/premium_description_mobile.jpg";
import vip_description from "../images/price/description/desktop/vip_description_desktop.jpg";
import vip_description_mobile from "../images/price/description/mobile/vip_description_mobile.jpg";
import baby_description from "../images/price/description/desktop/baby-one-year_description_desktop.jpg";
import baby_description_mobile from "../images/price/description/mobile/baby-one-year_description_mobile.jpg";
import babyAllInclusive_description from "../images/price/description/desktop/baby-all-inclusive_description_desktop.jpg";
import babyAllInclusive_description_mobile from "../images/price/description/mobile/baby-all-inclusive_description_mobile.jpg";
import christening_description from "../images/price/description/desktop/christening_description_desktop.jpg";
import christening_description_mobile from "../images/price/description/mobile/christening_description_mobile.jpg";
import discharge_description from "../images/price/description/desktop/discharge_description_desktop.jpg";
import discharge_description_mobile from "../images/price/description/mobile/discharge_description_mobile.jpg";
import family_description from "../images/price/description/desktop/family_description_desktop.jpg";
import family_description_mobile from "../images/price/description/mobile/family_description_mobile.jpg";
import woman_description from "../images/price/description/desktop/woman_description_desktop.jpg";
import woman_description_mobile from "../images/price/description/mobile/woman_description_mobile.jpg";
import womanContent_description from "../images/price/description/desktop/woman-content_description_desktop.jpg";
import womanContent_description_mobile from "../images/price/description/mobile/woman-content_description_mobile.jpg";
import pregnancy_description from "../images/price/description/desktop/pregancy_description_desktop.jpg";
import pregnancy_description_mobile from "../images/price/description/mobile/pregnancy_description_mobile.jpg";

import image1 from "../images/slider/slider-one.jpg";
import imageMobile1 from "../images/slider/mobile/slide-mobile-1.jpg";
import image2 from "../images/slider/slider-two.jpg";
import imageMobile2 from "../images/slider/mobile/slide-mobile-2.jpg";
import image3 from "../images/slider/slider-three.jpg";
import imageMobile3 from "../images/slider/mobile/slide-mobile-3.jpg";
import image4 from "../images/slider/slider-four.jpg";
import imageMobile4 from "../images/slider/mobile/slide-mobile-4.jpg";
import image5 from "../images/slider/slider-five.jpg";
import imageMobile5 from "../images/slider/mobile/slide-mobile-5.jpg";

export const arrSlides = [
  { desktop: image1, mobile: imageMobile1 },
  { desktop: image2, mobile: imageMobile2 },
  { desktop: image3, mobile: imageMobile3 },
  { desktop: image4, mobile: imageMobile4 },
  { desktop: image5, mobile: imageMobile5 },
];

export const links = [
  { name: "Главная", path: "/" },
  { name: "Обо мне", path: "/aboutMe" },
  {
    name: "Фотогалерея",
    select: [
      { name: "Новорожденные", pathSelect: "/photoGallery/newborn", type: "newborn" },
      { name: "В ожидании чуда", pathSelect: "/photoGallery/pregnancy", type: "pregnancy" },
      { name: "Малыши до 1 года", pathSelect: "/photoGallery/baby", type: "baby" },
      { name: "Семейная фотоссесия", pathSelect: "/photoGallery/family", type: "family" },
      { name: "Woman фотосъемка", pathSelect: "/photoGallery/woman", type: "woman" },
      { name: "Выписка из роддома", pathSelect: "/photoGallery/discharge", type: "discharge" },
      { name: "Крещение", pathSelect: "/photoGallery/christening", type: "christening" },
    ],
  },
  {
    name: "Услуги и цены",
    select: [
      { name: "Новорожденные", pathSelect: "/prices/newborn", type: "newborn" },
      { name: "Малыши до 1 года", pathSelect: "/prices/baby", type: "baby" },
      { name: "Семейная фотоссесия", pathSelect: "/prices/family", type: "family" },
      { name: "Woman фотосъемка", pathSelect: "/prices/woman", type: "woman" },
      { name: "Выписка и крещение", pathSelect: "/prices/discharge-christening", type: "discharge-christening" },
    ],
  },
  {
    name: "Фотопродукция",
    path: "/photo-products",
  },
  { name: "Контакты", path: "/contacts" },
];

export const packets = [
  {
    title: "lifeStyle",
    type: "newborn",
    location: "3 образа",
    time: "1-1.5 часа",
    shortDescription: "30 фото в обработке (10 фото в легкой ретуши и 20 фото в цвето и свето-коррекции)",
    path: "/prices/newborn",
    price: "10 000р",
    image: lifestyle_main,
    imageDescriptionPacket: lifestyle_description,
    imageDescriptionPacketMobile: lifestyle_description_mobile,
    description: [
      "Предварительная консультация по съемке",
      "Съемка примерно в течение 1-1,5 часов. Я снимаю малыша отдельно с разных ракурсов, можно в нескольких локациях - все зависит от вашей квартиры. Малыша можно снимать как спящим, так и не спящим. На съемку могу взять обмоточку и для девочек повязочку. Так же делаем кадры со старшими детками, с родителями. Очень красивые получаются снимки, когда мама кормит малыша)) Важно понимать, что это съемка life style, в кадры войдет интерьер вашей квартиры, поэтому мне обязательно нужны фото всех комнат заранее, что бы выбрать место для съемки, оценить свет и пространство. Фото будут больше домашними и уютными, именно они и будут особенно ценными для вашей семейной истории, это же ваше семейное гнездышко)",
      "С фотосессии Вы получаете:",
      [
        "30 фото в обработке (10 фото в легкой ретуши и 20 фото в цвето и светокоррекции в формате JPG), а так же все исходники в формате JPG.",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Бонусом делаются макроснимки (если есть возможность)",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "В течение недели после фотосессии Вы получаете 2 готовые фотографии в ретуши",
      "Дополнительно вы так же можете выбрать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы, а так же дизайнерский бокс и флешку для хранения ваших снимков",
      "Цена пакета указана с учетом скидки 3000 руб. Скидка предполагает подписание модельного релиза. Если Вы категорически не хотите видеть фото Вашего малыша в сети интернет, для Вас действует обычная цена без скидки. Модельный релиз в данном случае Вы не подписываете.\n" +
        "Выезд фотографа за пределы Москвы оплачиваются отдельно",
    ],
  },
  {
    title: "Cocon",
    type: "newborn",
    location: "3 образа",
    time: "1 - 1.5 часа",
    shortDescription:
      "20 фото в обработке (10 фото в детальной художественной ретуши + 10 фото в цвето и свето-коррекции)",
    path: "/prices/newborn",
    price: "11 000р",
    image: cocon_main,
    imageDescriptionPacket: cocon_description,
    imageDescriptionPacketMobile: cocon_description_mobile,
    description: [
      "Предварительная консультация по съемке",
      "Съемка может проходить в детской профессиональной студии, либо у Вас дома",
      "ВАЖНО!!!! Малыш снимается ТОЛЬКО в обмотке, что объясняет название пакета. Съемка идет как отдельно малыша, так и семейные кадры – малыш везде будет в обмоточке. Обмоточка может быть разного цвета и формы для каждого образа – максимум три цвета, всего 2-3 разных обмотки.",
      "Съемка в течение 1-1.5 часа (3 образа малыша, включая семейный образ по желанию)",
      "С фотосессии Вы получаете:",
      [
        "20 фото в обработке; 10 фото с детальной художественной ретушью и 10 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Бонусом делаются макроснимки (если есть возможность)",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "В течение недели после фотосессии Вы получаете 2 готовые фотографии в ретуши",
      "Дополнительно вы так же можете выбрать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы",
      "Цена пакета указана с учетом скидки 3000 руб. Скидка предполагает подписание модельного релиза. Если Вы категорически не хотите видеть фото Вашего малыша в сети интернет, для Вас действует обычная цена без скидки. Модельный релиз в данном случае Вы не подписываете.",
      "Обращаю Ваше внимание, что дополнительно взимаются расходы по аренде студии(если съемка проводится в студии), а в случае домашней съемки - отдельно идут транспортные расходы при выезде к Вам домой (внутри МКАДа 1000 р., до 15 км за МКАДом 1500 р.) Если расстояние дальше 15 км от МКАДа, стоимость рассчитывается индивидуально.",
      "Готовность обработанных фото 1-2 мес, максимум 3 в случае большой загруженности фотографа",
    ],
  },
  {
    title: "light",
    type: "newborn",
    location: "2 - 3 образа",
    time: "2 - 3 часа",
    shortDescription: "20 фото в обработке (10 фото в детальной ретуши + 10 фото в цвето и свето-коррекции)",
    path: "/prices/newborn",
    price: "16 000р",
    image: light_main,
    imageDescriptionPacket: light_description,
    imageDescriptionPacketMobile: light_description_mobile,
    description: [
      "Предварительная консультация по съемке",
      "Съемка может проходить в детской профессиональной студии, либо у Вас дома",
      "Съемка в течение 2-3 часа (2-3 образа малыша, включая семейный образ по желанию)",
      "С фотосессии Вы получаете:",
      [
        "20 фото в обработке; 10 фото с детальной художественной ретушью и 10 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Бонусом делаются макроснимки (если есть возможность)",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "В течение недели после фотосессии Вы получаете 2 готовые фотографии в ретуши",
      "Дополнительно вы так же можете выбрать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы",
      "Цена пакета указана с учетом скидки 3000 руб. Скидка предполагает подписание модельного релиза. Если Вы категорически не хотите видеть фото Вашего малыша в сети интернет, для Вас действует обычная цена без скидки. Модельный релиз в данном случае Вы не подписываете.",
      "Обращаю Ваше внимание, что дополнительно взимаются расходы по аренде студии(если съемка проводится в студии), а в случае домашней съемки - отдельно идут транспортные расходы при выезде к Вам домой (внутри МКАДа 1000 р., до 15 км за МКАДом 1500 р.) Если расстояние дальше 15 км от МКАДа, стоимость рассчитывается индивидуально.",
      "Готовность обработанных фото 1-2 мес, максимум 3 в случае большой загруженности фотографа",
    ],
  },
  {
    title: "Standard",
    type: "newborn",
    location: "3 - 4 образа",
    time: "2 - 4 часа",
    shortDescription: "30 фото в обработке (15 фото в детальной ретуши + 15 фото в цвето и свето-коррекции)",
    path: "/prices/newborn",
    price: "20 000р",
    image: standard_main,
    imageDescriptionPacket: standard_description,
    imageDescriptionPacketMobile: standard_description_mobile,
    description: [
      "Предварительная консультация по съемке",
      "Съемка может проходить в детской профессиональной студии, либо у Вас дома",
      "Съемка в течение 2-4 часов (3-4 образа малыша, включая семейный образ)",
      "С фотосессии Вы получаете:",
      [
        "30 фото в обработке; 15 фото с детальной художественной ретушью и 15 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Бонусом делаются макроснимки (если есть возможность)",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "В течение недели после фотосессии Вы получаете 2 готовые фотографии в ретуши",
      "Дополнительно вы так же можете выбрать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы",
      "Цена пакета указана с учетом скидки 3000 руб. Скидка предполагает подписание модельного релиза. Если Вы категорически не хотите видеть фото Вашего малыша в сети интернет, для Вас действует обычная цена без скидки. Модельный релиз в данном случае Вы не подписываете.",
      "Обращаю Ваше внимание, что дополнительно взимаются расходы по аренде студии(если съемка проводится в студии), а в случае домашней съемки - отдельно идут транспортные расходы при выезде к Вам домой (внутри МКАДа 1000 р., до 15 км за МКАДом 1500 р.) Если расстояние дальше 15 км от МКАДа, стоимость рассчитывается индивидуально.",
      "Готовность обработанных фото 1-2 мес, максимум 3 в случае большой загруженности фотографа",
    ],
  },
  {
    title: "Premium",
    type: "newborn",
    location: "4 - 5 образов",
    time: "3 - 5 часа",
    shortDescription: "40 фото в обработке (20 фото в детальной ретуши + 20 фото в цвето и свето-коррекции)",
    path: "/prices/newborn",
    price: "25 000р",
    image: premium_main,
    imageDescriptionPacket: premium_description,
    imageDescriptionPacketMobile: premium_description_mobile,
    description: [
      "Предварительная консультация по съемке",
      "Съемка может проходить в детской профессиональной студии, либо у Вас дома",
      "Съемка в течение 3-5 часов (4-5 образов малыша, включая семейный образ)",
      "С фотосессии Вы получаете:",
      [
        "40 фото в обработке; 20 фото с детальной художественной ретушью и 20 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Бонусом делаются макроснимки (если есть возможность)",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "В течение недели после фотосессии Вы получаете 2 готовые фотографии в ретуши",
      "Дополнительно вы так же можете выбрать любой формат книги со всеми обработанными фотографиями с вашей фотосессии",
      "Цена пакета указана с учетом скидки 3000 руб. Скидка предполагает подписание модельного релиза. Если Вы категорически не хотите видеть фото Вашего малыша в сети интернет, для Вас действует обычная цена без скидки. Модельный релиз в данном случае Вы не подписываете.",
      "Обращаю Ваше внимание, что дополнительно взимаются расходы по аренде студии(если съемка проводится в студии), а в случае домашней съемки - отдельно идут транспортные расходы при выезде к Вам домой (внутри МКАДа 1000 р., до 15 км за МКАДом 1500 р.) Если расстояние дальше 15 км от МКАДа, стоимость рассчитывается индивидуально.",
      "Готовность обработанных фото 1-2 мес, максимум 3 в случае большой загруженности фотографа",
    ],
  },
  {
    title: "Vip",
    type: "newborn",
    location: "5 - 6 образов",
    time: "3 - 5 часа",
    shortDescription: "30 фото в обработке (15 фото в детальной ретуши + 15 фото в цвето и свето-коррекции)",
    path: "/prices/newborn",
    price: "35 000р",
    image: vip_main,
    imageDescriptionPacket: vip_description,
    imageDescriptionPacketMobile: vip_description_mobile,
    description: [
      "Предварительная консультация по съемке",
      "Съемка может проходить в детской профессиональной студии, либо у Вас дома",
      "Съемка в течение 3-5 часов (5-6 образов малыша, включая семейный образ)",
      "С фотосессии Вы получаете:",
      [
        "50 фото в обработке; 25 фото в детальной ретуши и 25 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Бонусом делаются макроснимки (если есть возможность)",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "В течение недели после фотосессии Вы получаете 2 готовые фотографии в ретуши",
      "Дополнительно вы так же можете выбрать любой формат книги со всеми обработанными фотографиями с вашей фотосессии  из таблицы",
      "Цена пакета указана с учетом скидки 3000 руб. Скидка предполагает подписание модельного релиза. Если Вы категорически не хотите видеть фото Вашего малыша в сети интернет, для Вас действует обычная цена без скидки. Модельный релиз в данном случае Вы не подписываете.",
      "Обращаю Ваше внимание, что дополнительно взимаются расходы по аренде студии(если съемка проводится в студии), а в случае домашней съемки - отдельно идут транспортные расходы при выезде к Вам домой (внутри МКАДа 1000 р., до 15 км за МКАДом 1500 р.) Если расстояние дальше 15 км от МКАДа, стоимость рассчитывается индивидуально.",
      "Готовность обработанных фото 1-2 мес, максимум 3 в случае большой загруженности фотографа",
    ],
  },
  {
    title: "Малыши до 1 года",
    type: "baby",
    location: "3 - 5 образов",
    time: "до 2 часов",
    shortDescription:
      "40 фото в обработке (10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции). Исходники в JPG",
    path: "/prices/baby",
    price: "11 000р",
    image: baby_main,
    imageDescriptionPacket: baby_description,
    imageDescriptionPacketMobile: baby_description_mobile,
    description: [
      "Фотосессия длится 1-1,5 часа в зависимости от настроения малыша. Максимальное время съемки 2 часа.",
      "Количество образов(нарядов) 3-5 - зависит от настроения ребенка. При этом в одном наряде можно снимать несколько задумок(локаций), что бы избежать частое переодевание, которое детки не любят, но кадры при этом будут очень разнообразные. Общие семейные кадры делаем по желанию.",
      "Оптимальный возраст для проведения фотосессии малыша - от трех-четырех месяцев. В этом возрасте малыши могут долго бодрствовать, осознанно улыбаться, хорошо держать головку.",
      "Место съемки - в моей студии, либо у вас дома.",
      "На фотосессию фотограф берет весь необходимый реквизит и аксессуары для создания красивого образа (фоны,корзиночки, кроватки, коврики, пледики, повязочки, игрушки,наряды)",
      "С фотосессии Вы получаете:",
      [
        "40 фото: 10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции. Исходники отдаются по желанию.",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "Дополнительно вы так же можете заказать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы",
      "Обращаю Ваше внимание, что при использовании реквизита и оборудования фотографа дополнительно взимаются транспортные расходы при выезде к Вам домой (внутри МКАДа 1000 р., до 15 км за МКАДом 1500 р.) Если расстояние больше, стоимость рассчитывается индивидуально.",
      "Если съемка проходит в детской студии, аренда зала оплачивается Вами отдельно по тарифам студии.",
    ],
  },
  {
    title: `Съемка 1 годика «под ключ»`,
    type: "baby",
    location: "3 - 5 образов",
    time: "до 2 часов",
    shortDescription:
      "40 фото в обработке (10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции). Исходники в JPG",
    path: "/prices/baby",
    price: "16 000р",
    image: babyAllInclusive_main,
    imageDescriptionPacket: babyAllInclusive_description,
    imageDescriptionPacketMobile: babyAllInclusive_description_mobile,
    description: [
      "Фотосессия длится 1-2 часа в зависимости от поведения малыша.",
      "Оптимальный возраст для проведения фотосессии малыша 1 - 1,2 года.",
      "Место съемки - либо у вас дома, либо в студии, либо на улице (преимущественно летом)",
      " - Реквизит и аксессуары (фоны, корзиночки, кроватки, машинки, самолеты, карета, ванночка, коврики, пледики, повязочки, игрушки, наряды)",
      " - Тортик для крушения (с вами обсуждаем цвет и декор тортика)",
      " - Воздушные шары (наполненные гелием) или дуга из шаров,надутых воздухом для фотозоны. Обращаю ваше внимание, что тип и цвет шаров мы с вами обсуждаем вместе, композиция из шаров получается эквивалентной сумме не более 2000р.",
      "Внимание! Для крушения тортика Вы приносите свою одежду для ребеночка.",
      "С фотосессии Вы получаете:",
      [
        "40 фото: 10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции. Исходники отдаются по желанию.",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "Дополнительно вы так же можете заказать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы",
      "Дополнительно Вами оплачивается аренда студи, если съемка проходит в студии. Стоимость аренды от 900 руб до 1500 руб  в час в зависимости от тарифов студии.",
      "Обращаю Ваше внимание, что при использовании реквизита и оборудования фотографа дополнительно взимаются транспортные расходы при выезде к Вам домой (внутри МКАДа 1000 р., до 15 км за МКАДом 1500 р.) Если расстояние больше, стоимость рассчитывается индивидуально.",
    ],
  },
  {
    title: "В ожидании чуда",
    type: "pregnancy",
    location: "по договоренности",
    time: "1 - 2 часа",
    shortDescription:
      "40 фото в обработке (10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции). Исходники в формате JPG отдаются по желанию",
    path: "/prices/family",
    price: "10 000р",
    image: pregnancy_main,
    imageDescriptionPacket: pregnancy_description,
    imageDescriptionPacketMobile: pregnancy_description_mobile,
    description: [
      "Предварительная консультация по съемке;",
      "Готовность фото 2-3 месяца в зависимости от загрузки фотографа.",
      "Время съемки 1-2 часа. Мы снимаем несколько образов с переодеванием, получая от съемки удовольствие. Каждый последующий час после двух часов рассчитывается исходя из 5000р в час при съемке более 20 мин каждого последующего часа.",
      "Съемка проводится в основном с 28 по 34 неделю беременности.",
      "С фотосессии Вы получаете:",
      [
        "40 фото в обработке; 20 фото в детальной ретуши и 20 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Исходники отдаются по желанию.",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "Для будущих мамочек - бонусом Вы получаете коллаж фото «До и После», а также бонусом вам отдаю все исходники jpg со съемки ньюборн.",
      "Расходы по визажу, аренде студии/платьев за ваш счет, я могу вам посоветовать что и где лучше выбрать.",
      "Ретушь дополнительного фото - 450р, три фото - 1200р.",
      "Две фотографии отправляются в течение недели после съемки для превью.",
      "Услуги визажиста могут быть предоставлены дополнительно , стоимость 3000р. - мэйк ап и легкая укладка",
    ],
  },
  {
    title: `Семейная фотоссесия`,
    type: "family",
    location: "по договоренности",
    time: "до 2 часов",
    shortDescription:
      "40 фото в обработке (10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции). Исходники в JPG",
    path: "/prices/family",
    price: "10 000р",
    image: family_main,
    imageDescriptionPacket: family_description,
    imageDescriptionPacketMobile: family_description_mobile,
    description: [
      "Предварительная консультация по съемке;",
      "Помощь в подборе одежды и образов, с поиском студии, визажиста и прокатом нарядов/животных для фотосессии (это оплачивается Вами отдельно)",
      "Время съемки до 2х часов. Каждый последующий час рассчитывается 5000р в час исходя из учета более чем 20 минут каждого последующего часа.",
      "С фотосессии Вы получаете:",
      [
        "40 фото в обработке; 10 фото в детальной ретуши и 30 фото в цвето и светокоррекции в формате JPG",
        "Исходники отдаются по желанию.",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Бонусом делаются макроснимки (если есть возможность)",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "Есть возможность выбора фото для ретуши при желании, доп. ретушь также возможна исходя из действующих тарифов по доп.услугам.",
      "Срок готовности фото 1-3 месяца в зависимости от загруженности фотографа.",
      "Дополнительно вы так же можете заказать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы",
      "Выезд фотографа за пределы Москвы, а также аренда студии оплачиваются Вами отдельно.",
      "Услуги визажиста предоставляются отдельно по запросу, стоимость 3000р, включая выезд визажиста, мэйк ап и легка укладка.",
      "Стоимость фотосессии указана с учетом скидки 2000 р, за возможность публикации фотографий в качестве портфолио для фотографа.",
    ],
  },
  {
    title: `Woman фотоссесия`,
    type: "woman",
    location: "от 4 образов",
    time: " 1 - 2 часа",
    shortDescription: "40 фото в обработке (10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции)",
    path: "/prices/woman",
    price: "9 000р",
    image: woman_main,
    imageDescriptionPacket: woman_description,
    imageDescriptionPacketMobile: woman_description_mobile,
    description: [
      "Предварительная консультация по съемке;",
      "Время съемки 1-2 часа (если съемка свыше 2-х часов,  доплата 5000 руб. за каждый последующий час работы, начиная если следующий час более 20 минут)",
      "Количество образов - от 4-х",
      "С фотосессии Вы получаете:",
      [
        "40 фото в обработке; 10 фото в детальной ретуши и 30 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "Помогаю в подборе образов, одежды и аксессуаров.",
      "Вместе подбираем студию для съемки (оплачивается Вами отдельно)",
      "Готовность фотографий 1 месяц. (в течение недели после съемки отправляю 4-5 фотографии для превью).",
      "Услуги визажиста возможны по запросу и оплачиваются ВАми отдельно. в Стоимость 3000р включены выезд визажиста, мэйк ап и легкая укладка.",
      "Дополнительно вы так же можете выбрать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы.",
    ],
  },
  {
    title: "Woman фотоссесия для контента",
    type: "woman",
    location: "по договоренности",
    time: " до 2 часа",
    shortDescription: "40 фото в обработке (10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции)",
    path: "/prices/woman",
    price: "5 000р",
    image: womanContent_main,
    imageDescriptionPacket: womanContent_description,
    imageDescriptionPacketMobile: womanContent_description_mobile,
    description: [
      "Предварительная консультация по съемке;",
      "Время съемки 1-2 часа (если съемка свыше 2-х часов,  доплата 5000 руб. за каждый последующий час работы, начиная если следующий час более 20 минут)",
      "Количество образов - от 4-х",
      "С фотосессии Вы получаете:",
      [
        "40 фото в обработке; 10 фото в детальной ретуши и 30 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии фото в формате JPG для публикации в интернете",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "Помогаю в подборе образов, одежды и аксессуаров.",
      "Вместе подбираем студию для съемки (оплачивается Вами отдельно)",
      "Готовность фотографий 1 месяц. (в течение недели после съемки отправляю 4-5 фотографии для превью).",
      "Услуги визажиста возможны по запросу и оплачиваются ВАми отдельно. в Стоимость 3000р включены выезд визажиста, мэйк ап и легкая укладка.",
      "Дополнительно вы так же можете выбрать любой формат книги со всеми обработанными фотографиями с вашей фотосессии из таблицы.",
    ],
  },
  {
    title: `Выписка из роддома`,
    type: "discharge",
    location: "по договоренности",
    time: " 1 - 3 часа",
    shortDescription:
      "40 фото в обработке (10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции). Исходники в JPG",
    path: "/prices/discharge-christening",
    price: "10 000р",
    image: discharge_main,
    imageDescriptionPacket: discharge_description,
    imageDescriptionPacketMobile: discharge_description_mobile,
    description: [
      "Предварительная консультация по съемке;",
      "Съемка в течение 1-3 часа. Съемка проходит в три этапа:",
      [
        "Сначала снимаю вас с малышом в палате прямо перед выпиской, примерно за один час. Если меня не пускают к Вам в палату, сразу после выписки едем все вместе к вам домой, я снимаю первые минуты малыша дома. Как вы его переодеваете, кладете в кроватку, обнимаете с папой, снимки пяточек и крохотных ручек – все это снимается у вас дома.",
        "Торжественный момент выписки, встреча с родными в роддоме.",
        "Съемка возле роддома на улице.",
      ],
      "С фотосессии Вы получаете:",
      [
        "40 фото в обработке; 10 фото в детальной ретуши и 30 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии всех отретушированных фото для публикации в интернете",
        "Ролик из фотографий на 1 минуту под мою или вашу музыку с 15-20 лучшими фото",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "В течение недели после выписки Вы получаете 2 готовые фотографии в ретуши и все исходники;",
      "Дополнительно для хранения самых памятных моментов с выписки малыша Вы можете заказать фотокнигу и дизайнерские красивые деревянные боксы с USB-флешкой.",
    ],
  },
  {
    title: `Крещение`,
    type: "christening",
    location: "по договоренности",
    time: " 1 - 2 часа",
    shortDescription:
      "40 фото в обработке (10 фото в детальной ретуши + 30 фото в цвето и свето-коррекции). Исходники в JPG",
    path: "/prices/discharge-christening",
    price: "10 000р",
    image: christening_main,
    imageDescriptionPacket: christening_description,
    imageDescriptionPacketMobile: christening_description_mobile,
    description: [
      "Предварительная консультация по съемке;",
      "Съемка в течение 1-2 часа. Съемка проходит в два этапа:",
      [
        "Сначала снимается таинство крещения ребеночка в Храме",
        "После Крестин можно сделать красивые снимки в Храме с родными и близкими, а так же на территории Храма.",
      ],
      "С фотосессии Вы получаете:",
      [
        "40 фото в обработке; 10 фото в детальной ретуши и 30 фото в цвето и светокоррекции в формате JPG",
        "Авторская обработка снимков",
        "Web-версии всех отретушированных фото для публикации в интернете",
        "Ролик из фотографий на 1 минуту под мою или вашу музыку с 15-20 лучшими фото",
        "Фотографии загружаются на файлообменник, Вам предоставляется ссылка для скачивания материала",
      ],
      "В течение недели после Крестин Вы получаете 2 готовые фотографии в ретуши и все исходники;",
      "Выезд фотографа на крестины за МКАД оплачивается отдельно До 10 км - 1000р, каждые последующие 5 км плюс 500р;",
      "Дополнительно для хранения самых памятных моментов с выписки малыша Вы можете заказать фотокнигу и дизайнерские красивые деревянные боксы с USB-флешкой.",
    ],
  },
];

export const categoryPhoto = [
  {
    title: "Новорожденные",
    pathSelect: "/photoGallery/newborn",
  },
  {
    title: "В ожидании чуда",
    pathSelect: "/photoGallery/pregnancy",
  },
  {
    title: "Малыши до 1 года",
    pathSelect: "/photoGallery/baby",
  },
  {
    title: "Семейная фотоссесия",
    pathSelect: "/photoGallery/family",
  },
  {
    title: "Woman съемка",
    pathSelect: "/photoGallery/woman",
  },
  {
    title: "Выписка из роддома",
    pathSelect: "/photoGallery/discharge",
  },
  {
    title: "Крещение",
    pathSelect: "/photoGallery/christening",
  },
];

export const booksAccessories = [
  "Тиснение на обложке - 250р",
  "Окошко с фото - 300р",
  "Шильд (персональная надпись на шильде оплачивается отдельно) - 250р",
  "Комбинированное тиснение (фото + тиснение в виде декорированной рамки) - 400р",
  "Обложка премиум класса из экозамши - 600р",
  "Дополнительный разворотзависит от размера книги",
  "Калька на 1 странице чистый лист - 300р, лист с надписью - 700р",
];

export const tableBooks = [
  { title: ["Размер книги, см", "Качество печати", "Стоимость, р"] },
  {
    product: [
      { size: "15х15", printQuality: "Матовая / шелк / баритовая", price: "3000 / 4000 / 5500" },
      { size: "20х20", printQuality: "Матовая / шелк / баритовая", price: "5000 / 6000 / 8000" },
      { size: "25х25", printQuality: "Матовая / шелк / баритовая", price: "8000 / 9200 / 12500" },
      { size: "30х30", printQuality: "Матовая / шелк / баритовая", price: "9500 / 10500 / 15500" },
    ],
  },
];
export const tablePhotoCanvases = [
  { title: ["Размер фотохолста, см", "Стоимость, р"] },
  {
    product: [
      { size: "20х30", price: "1100" },
      { size: "30х40", price: "1500" },
      { size: "40х60", price: "2000" },
      { size: "60х90", price: "3000" },
      { size: "90х120", price: "4500" },
    ],
  },
];

export const tableTabletsWithPassport = [
  { title: ["Размер фотохолста, см", "Стоимость, р"] },
  {
    product: [
      { size: "Планшет 16х16, фото 10х10", price: "2 фото - 900, + еще фото 350" },
      { size: "Планшет 21х21, фото 10х15", price: "2 фото - 1200, + еще фото 450" },
      { size: "Планшет 21х21, фото 15х15", price: "2 фото - 1300, + еще фото 500" },
    ],
  },
];

export const filterGallery = [
  {
    name: "Все фотографии",
    type: "all",
    onClick: (handlerClick) => handlerClick("all"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "Новорожденные",
    type: "newborn",
    onClick: (handlerClick) => handlerClick("newborn"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "Малыши",
    type: "baby",
    onClick: (handlerClick) => handlerClick("baby"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "Семейные",
    type: "family",
    onClick: (handlerClick) => handlerClick("family"),
    id: Math.random().toString(16).slice(2),
  },
];
