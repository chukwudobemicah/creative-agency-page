import { Fragment, useEffect, useRef } from "react";
import heroImage from "../../assets/img/mobile/image-strategic.jpg";
import desktopHeroImage from "../../assets/img/desktop/image-strategic.jpg";
import redWaveImage from "../../assets/img/desktop/bg-pattern-wave-red.svg";
import styles from "./SectionTwo.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { SplitText } from "gsap/SplitText";
// import { SplitText } from "gsap-trial/SplitText";
// import { SplitText } from "gsap/all";
// gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const SectionTwo = () => {
  const designRef = useRef(null);
  const dRef = useRef(null);

  useEffect(() => {
    // console.log(designRef.current);
    // const mySplitText = new SplitText(designRef.current, { type: "chars" });
    // console.log(mySplitText);

    // const chars = mySplitText.chars;

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: chars,
    //     // start: "top 95%",
    //     onEnter: () => tl.restart(),
    //     onEnterBack: () => tl.restart(),
    //   },
    // });

    // tl.from(chars, {
    //   duration: 0.2,
    //   yPercent: 100,
    //   stagger: 0.1,
    // });
    const textHighlightAnimation = gsap.to(designRef.current, {
      duration: 0.4,
      className: styles.highlight,
      paused: true,
      // yPercent: 100,
    });

    // const trigger = {
    //   trigger: designRef.current,
    //   start: "top 90%",
    //   once: true,
    // };

    ScrollTrigger.create({
      // trigger: trigger,
      trigger: designRef.current,
      start: "top 90%",
      // once: true,
      onEnter: () => textHighlightAnimation.play(),
    });
  }, []);

  return (
    <Fragment>
      <section className={styles.sectionTwo}>
        <div>
          <div className={styles["hero-container"]} ref={dRef}>
            <img
              src={heroImage}
              alt="hero img"
              className={styles.mobileHeroImage}
            />
            <img
              src={desktopHeroImage}
              alt="hero img"
              className={styles.desktopHeroImage}
            />
            <img src={redWaveImage} alt="red wave img" />
          </div>
          <div className={styles.content}>
            <h2>
              <span className={styles["mask-element"]}>
                <span ref={designRef}>Design </span>
              </span>
              is strategic
            </h2>
            <p>
              “A well-crafted design strategy consistently produces desired
              outcomes and brand awareness. We are firm believers that success
              lies in creative collaboration with our clients.”
            </p>
            <p className={styles.link}>Schedule a Call</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SectionTwo;
