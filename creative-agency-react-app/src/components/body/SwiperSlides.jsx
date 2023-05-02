import rightArrow from "../../assets/img/desktop/icon-arrow-next.svg";
import leftArrow from "../../assets/img/desktop/icon-arrow-previous.svg";
import whiteWaveImage from "../../assets/img/desktop/bg-pattern-wavy-white.svg";
import styles from "./SwiperSlides.module.scss";
import { useSwiper } from "swiper/react";
import { useEffect } from "react";

const SwiperSlides = (props) => {
  return (
    <swiper-slide>
      <div className={styles["swiper-container"]}>
        <div className={styles["hero-container"]}>
          <img
            className={styles["slide-img"]}
            src={props.slideImage}
            alt="book img"
          />
          <img
            className={styles.desktopSlideImage}
            src={props.desktopSlideImage}
            alt="book img"
          />
        </div>

        <div className={styles["sliders-content"]}>
          <div>
            <p> {props.title}</p>

            {/* <div className={styles["slides-buttons"]}>
              <button className="leftArrow" >
                <img src={leftArrow} alt="leftArrow" />
              </button>

              <button>
                <img src={rightArrow} className="rightArrow" alt="rightArrow" />
              </button>
            </div> */}
          </div>
          <div className={styles["wave-img-container"]}>
            <img src={whiteWaveImage} alt="white wave image" />
          </div>
        </div>
      </div>
    </swiper-slide>
  );
};

export default SwiperSlides;
