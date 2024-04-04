import React from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const NotFound: React.FC = () => {
  return (
    <section className="notFound">
      <Helmet>
        <meta name="prerender-status-code" content="404" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h2 className="notFound__title">404</h2>
      <p className="notFound__description">Page not found</p>
      <Link to="/" className="notFound__link">
        Go back to home page
      </Link>
    </section>
  );
};

export default NotFound;
