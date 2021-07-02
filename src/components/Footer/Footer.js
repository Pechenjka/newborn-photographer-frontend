import "./Footer.scss";
import NewsLetter from "./NewsLetter/NewsLetter";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__contacts anim-items">
        <NewsLetter />
        <div className="footer__myContacts">
          <ul className="footer__myContacts-container">
            <li className="footer__myContacts-item-container">
              <span className="footer__myContacts-icon footer__myContacts-icon_place" />
              <p className="footer__myContacts-text ">Москва и Московская область</p>
            </li>
            <li className="footer__myContacts-item-container">
              <span className="footer__myContacts-icon footer__myContacts-icon_email" />
              <a
                className="footer__myContacts-link footer__myContacts_email"
                href="https://e.mail.ru/compose/?to=newbornphoto_lobacheva@mail.ru"
                target="_blank"
              >
                newbornphoto_lobacheva@mail.ru
              </a>
            </li>
            <li className="footer__myContacts-item-container">
              <span className="footer__myContacts-icon footer__myContacts-icon_phone" />
              <a
                className="footer__myContacts-link footer__myContacts_phone"
                href="tel:+7-926-936-1110"
                target="_blank"
              >
                +7-926-936-11-10
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__social-networks anim-items">
        <div className="footer__social-networks-container">
          <a
            className="footer__item-social-networks footer__item-social-networks_whatsApp"
            href="https://wa.me/79269361110"
            target='_blank'
          />
          <a
            className="footer__item-social-networks footer__item-social-networks_telegram"
            href="tg://resolve?domain=lobachevpetr"
            target='_blank'
          />
          <a
            className="footer__item-social-networks footer__item-social-networks_instagram"
            href="https://www.instagram.com/alina_mamochka_inlove/"
            target='_blank'
          />
        </div>
      </div>
      <div className="footer__copyright">
        <p className=" footer__copyright-text">
          &#169; 2017-{new Date().getFullYear()}. Фотограф Алена Лобачева. Все права защищены. <br /> Использование всех
          материалов сайта без письменного разрешения автора запрещено.
        </p>
        <p className="footer__poweredBy-text">Powered by Petr Lobachev</p>
      </div>
    </footer>
  );
}

export default Footer;

// import "./Footer.scss";
//import icon from "../../images/email-icon.svg";

// function Footer() {
//   return (
//     <section className="footer">
//       {/*<div className="footer__container">*/}
//       <ul className="footer__container">
//         <li className="footer__item-container">
//           <span className="footer__icon footer__icon_place" />
//           <p className="footer__text ">Москва и Московская область</p>
//         </li>
//         <li className="footer__item-container">
//           <span className="footer__icon footer__icon_email" />
//           <a
//             className="footer__link footer__email"
//             href="https://e.mail.ru/compose/?to=newbornphoto_lobacheva@mail.ru"
//             target="_blank"
//           >
//             newbornphoto_lobacheva@mail.ru
//           </a>
//         </li>
//         <li className="footer__item-container">
//           <span className="footer__icon footer__icon_phone" />
//           <a className="footer__link footer__phone" href="tel:+7-926-936-1110">
//             +7-926-936-11-10
//           </a>
//         </li>
//         <li className="footer__item-container">
//           <p className="footer__text footer__text_copyright">&#169; 2017-{new Date().getFullYear()}. Фотограф Алена Лобачева. Все права защищены. <br /> Использование всех материалов сайта без письменного разрешения автора запрещено</p>
//         </li>
//         <li className="footer__item-container">
//           <p className="footer__text footer__text_copyright">Powered by Petr Lobachev</p>
//         </li>
//       </ul>
//       <div className='slideShow__container-social-networks'>
//         <p className="slideShow__title-social-networks anim-items">Напишите мне</p>
//         <a className="slideShow__social-networks slideShow__social-networks_whatsApp anim-items" href="https://wa.me/79269361110" />
//         <a className="slideShow__social-networks slideShow__social-networks_telegram anim-items" href="tg://resolve?domain=lobachevpetr" />
//         <a className="slideShow__social-networks slideShow__social-networks_instagram anim-items" href="tg://resolve?domain=lobachevpetr" />
//       </div>
//     </section>
//   );
// }
