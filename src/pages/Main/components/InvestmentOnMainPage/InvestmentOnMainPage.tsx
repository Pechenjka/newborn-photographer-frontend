import Styles from "./style.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animationInvestmentOnMainPage } from "../../../../helpers/framerMotion";
import { useTranslation } from "react-i18next";

export interface PhotoSession {
  name: string;
  link: string;
  image: string;
}

export const InvestmentOnMainPage: React.FC = () => {
  const { t } = useTranslation();

  const packages: PhotoSession[] = [
    { name: "Newborn", link: "newborn", image: 'https://cdn.alenalobacheva.com/staticPhotos/images-of-links-on-main-page/newborn.webp' },
    { name: "Baby", link: "baby", image: 'https://cdn.alenalobacheva.com/staticPhotos/images-of-links-on-main-page/baby.webp' },
    { name: "Family & Maternity", link: "family", image: 'https://cdn.alenalobacheva.com/staticPhotos/images-of-links-on-main-page/family.webp' },
    { name: "Christening", link: "christening", image: 'https://cdn.alenalobacheva.com/staticPhotos/images-of-links-on-main-page/christening.webp' },
  ];

  const { animationInvestmentOnMainPageContainer, animationInvestmentOnMainPageItem } = animationInvestmentOnMainPage();

  return (
    <section className={Styles.investmentOnMainPage}>
      <h3 className={Styles.investmentOnMainPage__title}>{t("investmentOnMainPage title")}</h3>
      <h4 className={Styles.investmentOnMainPage__description}>{t("investmentOnMainPage description")}</h4>
      <motion.ul
        className={Styles.investmentOnMainPage__containerPackages}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={animationInvestmentOnMainPageContainer}
      >
        {packages.map((photoSession: PhotoSession) => {
          return (
            <motion.li
              className={Styles.investmentOnMainPage__package}
              key={photoSession.name}
              variants={animationInvestmentOnMainPageItem}
            >
              <Link
                to={`/prices/${photoSession.link}`}
                className={Styles.investmentOnMainPage__linkPackage}
                title={`${photoSession.name} session`}
              >
                <img
                  className={Styles.investmentOnMainPage__imagePackage}
                  src={photoSession.image}
                  alt={`${photoSession.name} session`}
                />
                <div className={Styles.investmentOnMainPage__overlayOnImage} />
                <p className={Styles.investmentOnMainPage__textPackage}>{photoSession.name}</p>
              </Link>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};
