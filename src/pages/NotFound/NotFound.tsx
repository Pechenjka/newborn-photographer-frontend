import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
import BackgroundImage from "../../components/BackgroundImage/BackgroundImage";
import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  return (
    <section className="notFound">
      <Helmet>
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <BackgroundImage />
      <h2 className="notFound__title">404</h2>
      <p className="notFound__description">Страница не найдена</p>
      <Link to="/" className="notFound__link">
        Перейти на главную страницу
      </Link>
    </section>
  );
};

export default NotFound;
