import "./PhotosSlideShow.scss";
import { Link } from "react-scroll";
import React, { useCallback, useEffect } from "react";
import { arrSlides } from "../../../../utils/config";
import { IArrSlides, PropsTimeRef } from "../../../../types";

const PhotosSlideShow: React.FC<PropsTimeRef> = ({ timerRef }) => {
  let slideIndex: number = 1;

  const handleChangeSlide = arrSlides.map((item: IArrSlides): string => {
    if (window.innerWidth <= 768 && item.mobile) {
      return item.mobile;
    } else {
      return item.desktop;
    }
  });

  const makeTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      slideIndex += 1;
      nextSlide(slideIndex);
    }, 7000);
  }, [slideIndex]);

  const handleChangeDots = useCallback(() => {
    const dots = document.querySelectorAll(".slideShow__dot");
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("slideShow__dot_active");
    }
    dots[slideIndex - 1].classList.add("slideShow__dot_active");
  }, [slideIndex]);

  function nextSlide(currentIndex: number): void {
    const images = document.querySelectorAll(".slideShow__image") as NodeListOf<HTMLElement>;
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = "0";
    }
    if (currentIndex > images.length) {
      slideIndex = 1;
    }
    if (currentIndex < 1) {
      slideIndex = images.length;
    }
    images[slideIndex - 1].style.opacity = "1";
    handleChangeDots();
  }

  function currentSlide(currentIndex: number): void {
    nextSlide((slideIndex = currentIndex));
    makeTimer();
  }

  function handleClickNextSlide(): void {
    nextSlide((slideIndex += 1));
    makeTimer();
  }
  function handleClickPrevSlide(): void {
    nextSlide((slideIndex -= 1));
    makeTimer();
  }

  useEffect(() => {
    makeTimer();
    handleChangeDots();
  }, [makeTimer, handleChangeDots]);

  return (
    <div className="slideShow">
      <div className="slideShow__aboutMe-container">
        <h3 className="slideShow__welcome-title anim-items anim-no-hide">
          <br /> ?? ?????????? ????????????????
        </h3>
        <p className="slideShow__welcome-description anim-items">
          ???????????????????????????????? ???????????????? ??????????????????????????.
          <br />
          ????????, ?????? ???????????????? ???? ???????????? ?????????? ???????????? <br /> ?? ???????????????????????? ?????????????? ?????????? ??????????
        </p>
        <Link
          className="slideShow__welcome-link anim-items"
          to="footer"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          ?????? ????????????????
        </Link>
      </div>

      <div className="slideShow__image-container">
        <img className="slideShow__image" style={{ opacity: 1 }} src={handleChangeSlide[0]} alt="?????????? 1" />
        <img className="slideShow__image" src={handleChangeSlide[1]} alt="?????????? 2" />
        <img className="slideShow__image" src={handleChangeSlide[2]} alt="?????????? 3" />
        <img className="slideShow__image" src={handleChangeSlide[3]} alt="?????????? 4" />
        <img className="slideShow__image" src={handleChangeSlide[4]} alt="?????????? 5" />
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
};

export default PhotosSlideShow;
