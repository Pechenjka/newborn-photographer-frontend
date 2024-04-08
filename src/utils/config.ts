import React from "react";
import navbarLogo from "../images/navbar-menu.webp";
import { IArrSlides, ILink, IPhotosCategoryInMainPage, ITablesPhotoProducts } from "../types";

export const arrSlides: IArrSlides[] = [
  {
    desktop: "https://cdn.alenalobacheva.com/staticPhotos/slider/desktop/slide-desktop-1.webp",
    mobile: "https://cdn.alenalobacheva.com/staticPhotos/slider/mobile/slide-mobile-1.webp",
  },
  {
    desktop: "https://cdn.alenalobacheva.com/staticPhotos/slider/desktop/slide-desktop-2.webp",
    mobile: "https://cdn.alenalobacheva.com/staticPhotos/slider/mobile/slide-mobile-2.webp",
  },
  {
    desktop: "https://cdn.alenalobacheva.com/staticPhotos/slider/desktop/slide-desktop-3.webp",
    mobile: "https://cdn.alenalobacheva.com/staticPhotos/slider/mobile/slide-mobile-3.webp",
  },
  {
    desktop: "https://cdn.alenalobacheva.com/staticPhotos/slider/desktop/slide-desktop-4.webp",
    mobile: "https://cdn.alenalobacheva.com/staticPhotos/slider/mobile/slide-mobile-4.webp",
  },
  {
    desktop: "https://cdn.alenalobacheva.com/staticPhotos/slider/desktop/slide-desktop-5.webp",
    mobile: "https://cdn.alenalobacheva.com/staticPhotos/slider/mobile/slide-mobile-5.webp",
  },
];

export const links: ILink[] = [
  { name: "navLink main", path: "/" },
  {
    name: "navLink photo gallery",
    select: [
      {
        name: "navLink newborn",
        pathSelect: "/gallery/newborn",
        type: "newborn",
        title: "Newborn Photography Gallery",
      },
      {
        name: "navLink maternity",
        pathSelect: "/gallery/maternity",
        type: "maternity",
        title: "Maternity Photography Gallery",
      },
      { name: "navLink baby", pathSelect: "/gallery/baby", type: "baby", title: "Baby Photography Gallery" },
      { name: "navLink family", pathSelect: "/gallery/family", type: "family", title: "Family Photography Gallery" },
      { name: "navLink woman", pathSelect: "/gallery/woman", type: "woman", title: "Woman Photography Gallery" },
      {
        name: "navLink discharge",
        pathSelect: "/gallery/discharge",
        type: "discharge",
        title: "Discharge Photography Gallery",
      },
      {
        name: "navLink christening",
        pathSelect: "/gallery/christening",
        type: "christening",
        title: "Christening Photography Gallery",
      },
    ],
  },
  {
    name: "navLink prices and services",
    select: [
      {
        name: "navSubLink newborn",
        pathSelect: "/prices/newborn",
        type: "newborn",
        title: "Newborn Photography Pricing",
      },
      { name: "navSubLink baby", pathSelect: "/prices/baby", type: "baby", title: "Baby Photography Pricing" },
      {
        name: "navSubLink family and pregnancy",
        pathSelect: "/prices/family",
        type: "family",
        title: "Family Photography Pricing",
      },
      // { name: "navSubLink woman", pathSelect: "/prices/woman", type: "woman" },
      {
        name: "navSubLink christening",
        pathSelect: "/prices/christening",
        type: "christening",
        title: "Christening Photography Pricing",
      },
    ],
  },
  {
    name: "navLink information",
    logo: navbarLogo,
    select: [
      // {
      //   name: "Фотопродукция",
      //   pathSelect: "/photo-products",
      //   type: "photo-products"
      // },
      {
        name: "navSubLink prepare at photo session",
        pathSelect: "/session-information",
        type: "session-information",
        title: "Session information",
      },
      { name: "Blog", pathSelect: "/blog", type: "blog", title: "Blog" },
      { name: "navSubLink about Me", pathSelect: "/about", type: "about", title: "About me" },
    ],
  },
  { name: "navSubLink contacts", path: "/contact" },
];

export const photosCategoryInGallery: string[] = [
  "newborn",
  "maternity",
  "baby",
  "family",
  "woman",
  "discharge",
  "christening",
];

export const booksAccessories: Array<string> = [
  "Тиснение на обложке - 300р",
  "Окошко с фото - 300р",
  "Шильд (персональная надпись на шильде оплачивается отдельно) - 300р",
  "Комбинированное тиснение (фото + тиснение в виде декорированной рамки) - 450р",
  "Обложка премиум класса из экозамши - 900р",
  "Дополнительный разворот зависит от размера книги",
  "Калька на 1 странице чистый лист - 400р, лист с надписью - 900р",
];

export const tableBooks: ITablesPhotoProducts[] = [
  { title: ["Размер книги, см", "Качество печати", "Стоимость, р"] },
  {
    product: [
      { size: "15х15", printQuality: "Матовая / шелк", price: "4000 / 5000" },
      { size: "20х20", printQuality: "Матовая / шелк", price: "6000 / 7500" },
      { size: "25х25", printQuality: "Матовая / шелк", price: "8000 / 9000" },
      { size: "30х30", printQuality: "Матовая / шелк", price: "9500 / 11000" },
    ],
  },
];

export const tablePhotoCanvases: ITablesPhotoProducts[] = [
  { title: ["Размер фотохолста, см", "Стоимость, р"] },
  {
    product: [
      { size: "20х30", price: "1100" },
      { size: "30х40", price: "1600" },
      { size: "40х60", price: "2700" },
      { size: "60х90", price: "4900" },
      { size: "90х120", price: "9800" },
    ],
  },
];

export const tableTabletsWithPassport: ITablesPhotoProducts[] = [
  { title: ["Размер фотохолста, см", "Стоимость, р"] },
  {
    product: [
      { size: "Планшет 16х16, фото 10х10", price: "2 фото - 1100, + еще фото 500" },
      { size: "Планшет 21х21, фото 10х15", price: "2 фото - 1500, + еще фото 500" },
      { size: "Планшет 21х21, фото 15х15", price: "2 фото - 1500, + еще фото 600" },
    ],
  },
];

export const photosCategoryInMainPage: IPhotosCategoryInMainPage[] = [
  {
    name: "photosCategory newborn",
    type: "newborn",
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string) => void, event: React.MouseEvent) =>
      handlerClick(event, "newborn"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "photosCategory baby",
    type: "baby",
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string) => void, event: React.MouseEvent) =>
      handlerClick(event, "baby"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "photosCategory family",
    type: "family",
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string) => void, event: React.MouseEvent) =>
      handlerClick(event, "family"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "photosCategory all",
    type: null,
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string | null) => void, event: React.MouseEvent) =>
      handlerClick(event, null),
    id: Math.random().toString(16).slice(2),
  },
];
