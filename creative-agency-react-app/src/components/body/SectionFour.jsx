import { Fragment } from "react";
import { register } from "swiper/element/bundle";
import slideOneImage from "../../assets/img/mobile/image-slide-1.jpg";
import slideTwoImage from "../../assets/img/mobile/image-slide-2.jpg";
import slideThreeImage from "../../assets/img/mobile/image-slide-3.jpg";
import desktopSlideOneImage from "../../assets/img/desktop/image-slide-1.jpg";
import desktopSlideTwoImage from "../../assets/img/desktop/image-slide-2.jpg";
import desktopSlideThreeImage from "../../assets/img/desktop/image-slide-3.jpg";
import SwiperSlides from "./SwiperSlides";
register();

const SectionFour = () => {
  return (
    <section>
      <swiper-container autoplay="true" loop="true" speed="250">
        <SwiperSlides
          title={"Brand naming & guidelines"}
          slideImage={slideOneImage}
          desktopSlideImage={desktopSlideOneImage}
        />
        <SwiperSlides
          title={"Brand identity & merchandise"}
          slideImage={slideTwoImage}
          desktopSlideImage={desktopSlideTwoImage}
        />
        <SwiperSlides
          title={" Brand identity & web design"}
          slideImage={slideThreeImage}
          desktopSlideImage={desktopSlideThreeImage}
        />
      </swiper-container>
    </section>
  );
};

export default SectionFour;
