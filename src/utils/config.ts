import React from "react";

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
import {
  IArrSlides,
  ILink,
  IPhotosCategoryInGallery,
  IPhotosCategoryInMainPage,
  ITablesPhotoProducts,
} from "../types";


export const arrSlides: IArrSlides[] = [
  { desktop: image1, mobile: imageMobile1 },
  { desktop: image2, mobile: imageMobile2 },
  { desktop: image3, mobile: imageMobile3 },
  { desktop: image4, mobile: imageMobile4 },
  { desktop: image5, mobile: imageMobile5 },
];

export const links: ILink[] = [
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
  "Тиснение на обложке - 250р",
  "Окошко с фото - 300р",
  "Шильд (персональная надпись на шильде оплачивается отдельно) - 250р",
  "Комбинированное тиснение (фото + тиснение в виде декорированной рамки) - 400р",
  "Обложка премиум класса из экозамши - 600р",
  "Дополнительный разворотзависит от размера книги",
  "Калька на 1 странице чистый лист - 300р, лист с надписью - 700р",
];

export const tableBooks: ITablesPhotoProducts[] = [
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

export const tablePhotoCanvases: ITablesPhotoProducts[] = [
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

export const tableTabletsWithPassport: ITablesPhotoProducts[] = [
  { title: ["Размер фотохолста, см", "Стоимость, р"] },
  {
    product: [
      { size: "Планшет 16х16, фото 10х10", price: "2 фото - 900, + еще фото 350" },
      { size: "Планшет 21х21, фото 10х15", price: "2 фото - 1200, + еще фото 450" },
      { size: "Планшет 21х21, фото 15х15", price: "2 фото - 1300, + еще фото 500" },
    ],
  },
];

export const photosCategoryInMainPage: IPhotosCategoryInMainPage[] = [
  {
    name: "Все фотографии",
    type: null,
    onClick: (handlerClick: (event: React.MouseEvent, typePhotos: string | null) => void, event: React.MouseEvent) =>
      handlerClick(event, null),
    id: Math.random().toString(16).slice(2),
  },
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
];
