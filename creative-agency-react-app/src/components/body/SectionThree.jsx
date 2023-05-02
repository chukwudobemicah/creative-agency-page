import styles from "./SectionThree.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
// import { SplitText } from "gsap-trial/SplitText";
import { useEffect, useRef } from "react";

// gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

const SectionThree = () => {
  const approachRef = useRef(null);

  useEffect(() => {
    const curApproach = approachRef.current;
    // const mySplitText = new SplitText(approachRef.current, { type: "words" });
    // const words = mySplitText.words;

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: words,
    //     onEnter: () => tl.restart(),
    //     onEnterBack: () => tl.restart(),
    //   },
    // });

    // tl.from(words, {
    //   duration: 0.1,
    //   opacity: 0,
    //   yPercent: -100,
    //   stagger: 0.1,
    // });

    const approachAnimation = gsap.fromTo(
      curApproach,
      {
        opacity: 0,
        yPercent: -100,
      },
      {
        duration: 0.5,
        yPercent: 0,
        opacity: 1,
      }
    );

    ScrollTrigger.create({
      trigger: curApproach,
      // markers: true,
      start: "top 50%",
      // onEnter: () => approachAnimation.play(),
      animation: approachAnimation,
      toggleActions: "play none restart none",
    });
  }, []);

  return (
    <section className={styles.sectionThree}>
      <div className={styles["mask-element"]}>
        <h2 ref={approachRef}>Our approach for creating a winning brand</h2>
      </div>
      <div>
        <article>
          <div className={styles.relative}>
            <div className={styles["article-div"]}>
              <h3>Brand Strategy</h3>
              <p>
                Brand strategy is critical for long-term success. Outshining
                competitors and capturing the target audience are key.
              </p>
              <div className={styles["article-div__number"]}>01</div>
            </div>
          </div>

          <div className={styles.relative}>
            <div className={styles["article-div"]}>
              <h3>Brand Design</h3>
              <p>
                Keeping the brand design unique and meaningful helps in
                communicating the brand’s timeless value effectively.
              </p>
              <div className={styles["article-div__number"]}>02 </div>
            </div>
          </div>

          <div className={styles.relative}>
            <div className={styles["article-div"]}>
              <h3>Web Design</h3>
              <p>
                A beautifully crafted website is the best tool for brand
                awareness, and ultimately results in increased revenues.
              </p>
              <div className={styles["article-div__number"]}>03</div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SectionThree;
