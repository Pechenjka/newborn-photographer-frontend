import React from "react";
import navbarLogo from "../images/navbar-menu.webp";
import image1 from "../images/slider/slider-one.webp";
import imageMobile1 from "../images/slider/mobile/slide-mobile-1.webp";
import image2 from "../images/slider/slider-two.webp";
import imageMobile2 from "../images/slider/mobile/slide-mobile-2.webp";
import image3 from "../images/slider/slider-three.webp";
import imageMobile3 from "../images/slider/mobile/slide-mobile-3.webp";
import image4 from "../images/slider/slider-four.webp";
import imageMobile4 from "../images/slider/mobile/slide-mobile-4.webp";
import image5 from "../images/slider/slider-five.webp";
import imageMobile5 from "../images/slider/mobile/slide-mobile-5.webp";
import { IArrSlides, ILink, IPhotosCategoryInGallery, IPhotosCategoryInMainPage, ITablesPhotoProducts } from "../types";

export const arrSlides: IArrSlides[] = [
  { desktop: image1, mobile: imageMobile1 },
  { desktop: image2, mobile: imageMobile2 },
  { desktop: image3, mobile: imageMobile3 },
  { desktop: image4, mobile: imageMobile4 },
  { desktop: image5, mobile: imageMobile5 },
];

export const links: ILink[] = [
  { name: "Главная", path: "/" },
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
    name: "",
    logo: navbarLogo,
    select: [
      {
        name: "Фотопродукция",
        pathSelect: "/photo-products",
        type: "photo-products"
      },
      { name: "Обо мне", pathSelect: "/aboutMe", type: "aboutMe" },
      { name: "Контакты", pathSelect: "/contacts", type: "contacts" },
    ],
  },
];

export const photosCategoryInGallery: IPhotosCategoryInGallery[] = [
  {
    title: "Новорожденные",
    type: "newborn",
  },
  {
    title: "В ожидании чуда",
    type: "pregnancy",
  },
  {
    title: "Малыши до 1 года",
    type: "baby",
  },
  {
    title: "Семейная фотоссесия",
    type: "family",
  },
  {
    title: "Woman съемка",
    type: "woman",
  },
  {
    title: "Выписка из роддома",
    type: "discharge",
  },
  {
    title: "Крещение",
    type: "christening",
  },
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
    name: "Новорожденные",
    type: "newborn",
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string) => void, event: React.MouseEvent) =>
      handlerClick(event, "newborn"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "Малыши",
    type: "baby",
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string) => void, event: React.MouseEvent) =>
      handlerClick(event, "baby"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "Семейные",
    type: "family",
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string) => void, event: React.MouseEvent) =>
      handlerClick(event, "family"),
    id: Math.random().toString(16).slice(2),
  },
  {
    name: "Все фотографии",
    type: null,
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string | null) => void, event: React.MouseEvent) =>
      handlerClick(event, null),
    id: Math.random().toString(16).slice(2),
  },
];
