import React, { Fragment } from "react";
import "./PhotoProducts.scss";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import bookImage from "../../images/photo-products/book.webp";
import photoCanvas from "../../images/photo-products/photo-сanvases.webp";
import photoTablets from "../../images/photo-products/tablets-with-passport.webp";
import photoBox from "../../images/photo-products/photo-box.webp";
import Table from "./components/Table/Table";
import { booksAccessories, tableBooks, tablePhotoCanvases, tableTabletsWithPassport } from "../../utils/config";
import { useLocation } from "react-router-dom";
import { MetaData } from "../../helpers/MetaData";

const PhotoProducts: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <MetaData
        title="Photo session, photo canvas and other photo production | Baby photographer in New York Alena Lobacheva"
        description="In addition to the photo session you can order a photo book of any format, photo canvas, tablet with passe-partout, photo box, and many other"
        canonicalLink={`https://alenalobacheva.net${pathname}`}
      />
      <BackgroundImage />
      <section className="photoProducts">
        <div className="photoProducts__item photoProducts__item-books books-accessories ">
          <h3 className="photoProducts__title">Фотокниги</h3>
          <img src={bookImage} alt="картинка фотокниги" className="photoProducts__image" />
          <Table table={tableBooks} />
        </div>
        <div className="books-accessories">
          <h3 className="books-accessories__title">Дополнительные возможности</h3>
          <ul className="books-accessories__container">
            {booksAccessories.map((item: string, index: number) => {
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
              Дизайнерский деревянный бокс 1500р, печать фото для бокса – в подарок.
            </p>
            <p className="photoProducts__photoBox-description">
              Деревянная USB флеш карта с индивидуальным дизайном на 8 гб - 1000р
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default PhotoProducts;
