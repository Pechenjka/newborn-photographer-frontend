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
import { booksAccessories, tableBooks, tablePhotoCanvases, tableTabletsWithPassport } from "../../utils/config";

function PhotoProducts({ timerRef }) {
  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <BackgroundImage />
      <section className="photoProducts anim-items">
        <div className="photoProducts__item photoProducts__item-books books-accessories ">
          <h3 className="photoProducts__title">Фотокниги</h3>
          <img src={bookImage} alt="картинка фотокниги" className="photoProducts__image" />
          <Table table={tableBooks} />
        </div>
        <div className="books-accessories">
          <h3 className="books-accessories__title">Дополнительные возможности</h3>
          <ul className="books-accessories__container">
            {booksAccessories.map((item, index) => {
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
