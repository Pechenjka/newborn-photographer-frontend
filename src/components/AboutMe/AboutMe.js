import "./AboutMe.scss";
import { Fragment } from "react";
import Instagram from "../Instagram/Instagram";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function AboutMe({ timerRef }) {
  return (
    <Fragment>
      <Header timerRef={timerRef} />
      <BackgroundImage />
      <section className="aboutMe">
        <div className="aboutMe__container anim-items">
          <div className="aboutMe__image" />
          <h3 className="aboutMe__title">Обо мне</h3>
          <div className="aboutMe__text-container">
            <p className="aboutMe__text">Меня зовут Алена Лобачева, и я профессиональный фотограф новорожденных.</p>
            <p className="aboutMe__text">
              Приветствую Вас на своем сайте. Мне очень приятно, что Вы обратили внимание на мое творчество ♥.
            </p>
            <p className="aboutMe__text">
              Я мама замечательного мальчишки. Именно он меня вдохновил заниматься фотосъемкой новорожденных малышей.
              Огромное ему спасибо за это, ведь я самая счастливая мама и у меня самая лучшая работа на свете!
            </p>
            <p className="aboutMe__text">
              За шесть лет работы фотографом я отсняла много малышей. У каждого крохи свой характер и к каждому малышу
              можно и нужно найти свой подход. Хоть они еще такие маленькие, но каждый уже со своей большой
              индивидуальностью). За это время кого только у меня не было ) : одни сплюшки, другие чувствительный,
              кто-то беспокойный с коликами ,а кто-то любопытный и любит посмотреть на окружающий мир больше, чем
              спать))..
            </p>
            <p className="aboutMe__text">
              Но какой бы не был малыш, мы всегда находим общий язык друг с другом, и вся семья получает непередаваемое
              удовольствие от съемочного процесса, а мамочки гарантированно становятся обладательницами неповторимых
              снимков на долгую память себе и своим близким. Такие кадры бесценны, и я с удовольствием запечатлю ваши
              эмоции, наполненные долгожданным счастьем, любовью, лаской и теплотой ваших нежных объятий.
            </p>
          </div>
        </div>
      </section>
      <Instagram />
      <Footer />
    </Fragment>
  );
}

export default AboutMe;
