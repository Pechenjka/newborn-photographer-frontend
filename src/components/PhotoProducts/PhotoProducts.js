import "./PhotoProducts.scss";
import { Fragment } from "react";
import Header from "../Header/Header";
import Instagram from "../Instagram/Instagram";
import Footer from "../Footer/Footer";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import bookImage from "../../images/photo-products/book.jpg";
import photoCanvas from "../../images/photo-products/photo-сanvases.jpg";
import photoTablets from "../../images/photo-products/tablets-with-passport.jpg";
import photoBox from "../../images/photo-products/photo-box.jpg";
import Table from "./Table/Table";

const booksAccessories = [
  "Тиснение на обложке - 250р",
  "Окошко с фото - 300р",
  "Шильд (персональная надпись на шильде оплачивается отдельно) - 250р",
  "Комбинированное тиснение (фото + тиснение в виде декорированной рамки) - 400р",
  "Обложка премиум класса из экозамши - 600р",
  "Дополнительный разворотзависит от размера книги",
  "Калька на 1 странице чистый лист - 300р, лист с надписью - 700р",
];

const tableBooks = [
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
const tablePhotoCanvases = [
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

const tableTabletsWithPassport = [
  { title: ["Размер фотохолста, см", "Стоимость, р"] },
  {
    product: [
      { size: "Планшет 16х16, фото 10х10", price: "2 фото - 900, + еще фото 350" },
      { size: "Планшет 21х21, фото 10х15", price: "2 фото - 1200, + еще фото 450" },
      { size: "Планшет 21х21, фото 15х15", price: "2 фото - 1300, + еще фото 500" },
    ],
  },
];

function PhotoProducts({ timerRef }) {
  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <BackgroundImage />
      <section className="photoProducts">
        <div className="photoProducts__item photoProducts__item-books books-accessories">
          <h3 className="photoProducts__title">Фотокниги</h3>
          <img src={bookImage} alt="картинка фотокниги" className="photoProducts__image" />
          <Table table={tableBooks} />
        </div>
        <div className="books-accessories">
          <h3 className="books-accessories__title">Дополнительные возможности</h3>
          <ul className="books-accessories__container">
            {booksAccessories.map((item,index) => {
              return (
                <li key={index}>
                  <p className="books-accessories__item">{item}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="photoProducts__background">
          <div className="photoProducts__item photoProducts__item-photo-сanvases">
            <h3 className="photoProducts__title">Фотохолсты</h3>
            <img src={photoCanvas} alt="картинка фотохолста" className="photoProducts__image" />
            <Table table={tablePhotoCanvases} />
          </div>
        </div>
        <div className="photoProducts__item photoProducts__item-tablets">
          <h3 className="photoProducts__title">Планшеты с паспарту</h3>
          <img src={photoTablets} alt="картинка планшета с паспарту" className="photoProducts__image" />
          <Table table={tableTabletsWithPassport} />
        </div>
        <div className="photoProducts__background">
          <div className="photoProducts__item photoProducts__item-photoBox">
            <h3 className="photoProducts__title">Фотобоксы</h3>
            <img src={photoBox} alt="артинка фотобокса" className="photoProducts__image" />
            <p className="photoProducts__photoBox-description">
              Дизайнерский деревянный бокс 1400р, печать фото для бокса – в подарок.
            </p>
            <p className="photoProducts__photoBox-description">
              Деревянная USB флеш карта с индивидуальным дизайном на 8 гб - 1000р
            </p>
          </div>
        </div>
      </section>
      <Instagram />
      <Footer />
    </Fragment>
  );
}

export default PhotoProducts;
