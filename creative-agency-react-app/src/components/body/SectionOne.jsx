import { useRef } from "react";
import "./SectionOne.module.scss";
import heroImage from "../../assets/img/mobile/image-hero.jpg";
import desktopHeroImage from "../../assets/img/desktop/image-hero.jpg";
import styles from "./SectionOne.module.scss";
import Button from "../UI/Button";

const SectionOne = () => {
  const h1Ref = useRef(null);

  return (
    <section className={styles.sectionOne}>
      <div>
        <div className={styles["hero-container"]}>
          <img src={heroImage} alt="hero img" className={styles.heroImage} />
          <img
            src={desktopHeroImage}
            alt="hero img"
            className={styles.desktopHeroImage}
          />
        </div>
        <div className={styles.content}>
          <div className="mask-element">
            <h1 ref={h1Ref}>Branding & website design agency</h1>
          </div>
          <p>
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>
          <Button message="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
