import "./PhotosSlideShow.scss";
import { Link } from "react-scroll";
import { useEffect } from "react";
import image1 from "../../../images/slider/slider-one.jpg";
import image2 from "../../../images/slider/slider-two.jpg";
import image3 from "../../../images/slider/slider-three.jpg";
import image4 from "../../../images/slider/slider-four.jpg";
import image5 from "../../../images/slider/slider-five.jpg";

function PhotosSlideShow({ timerRef }) {
  useEffect(() => {
    makeTimer();
    handleChangeDots();
  }, []);

  let slideIndex = 1;

  function nextSlide(currentIndex) {
    const images = document.querySelectorAll(".slideShow__image");
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }
    if (currentIndex > images.length) {
      slideIndex = 1;
    }
    if (currentIndex < 1) {
      slideIndex = images.length;
    }
    images[slideIndex - 1].style.opacity = 1;
    handleChangeDots();
  }

  function makeTimer() {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      slideIndex += 1;
      nextSlide(slideIndex);
    }, 7000);
  }

  function currentSlide(currentIndex) {
    nextSlide((slideIndex = currentIndex));
    makeTimer();
  }

  function handleClickNextSlide() {
    nextSlide((slideIndex += 1));
    makeTimer();
  }
  function handleClickPrevSlide() {
    nextSlide((slideIndex -= 1));
    makeTimer();
  }

  function handleChangeDots() {
    const dots = document.querySelectorAll(".slideShow__dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("slideShow__dot_active");
    }
    dots[slideIndex - 1].classList.add("slideShow__dot_active");
  }

  return (
    <div className="slideShow">
      <div className="slideShow__aboutMe-container">
        <h3 className="slideShow__welcome-title anim-items anim-no-hide">
          <br /> Я Алена Лобачева
        </h3>
        <p className="slideShow__welcome-description anim-items">
          Профессиональный фотограф новорожденных.
          <br />
          Знаю, как оставить на память самые ценные <br /> и неповторимые моменты вашей жизни
        </p>
        <Link
          className="slideShow__welcome-link anim-items"
          to="footer"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Мои контакты
        </Link>
      </div>
      <div className="slideShow__image-container">
        <img className="slideShow__image" style={{ opacity: 1 }} src={image1} alt="слайд 1" />
        <img className="slideShow__image" src={image2} alt="слайд 2" />
        <img className="slideShow__image" src={image3} alt="слайд 3" />
        <img className="slideShow__image" src={image4} alt="слайд 4" />
        <img className="slideShow__image" src={image5} alt="слайд 5" />
      </div>
      <div className="slideShow__dot-container">
        <span className="slideShow__dot" onClick={() => currentSlide(1)} />
        <span className="slideShow__dot" onClick={() => currentSlide(2)} />
        <span className="slideShow__dot" onClick={() => currentSlide(3)} />
        <span className="slideShow__dot" onClick={() => currentSlide(4)} />
        <span className="slideShow__dot" onClick={() => currentSlide(5)} />
      </div>
      <button className="slideShow__arrow slideShow__arrow_prev" type="button" onClick={handleClickPrevSlide}>
        &#10094;
      </button>
      <button className="slideShow__arrow slideShow__arrow_next" type="button" onClick={handleClickNextSlide}>
        &#10095;
      </button>
    </div>
  );
}

export default PhotosSlideShow;
