import { Fragment, useRef, useEffect } from "react";
import "./Footer.module.scss";
import Button from "./UI/Button";
import styles from "./Footer.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const paragraphRef = useRef(null);

  useEffect(() => {
    // const mySplitText = new SplitText(paragraphRef.current, { type: "words" });
    // const words = mySplitText.words;
    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: paragraphRef,
    //     onEnter: () => tl.restart(),
    //     onEnterBack: () => tl.restart(),
    //   },
    // });
    // tl.from(paragraphRef, {
    //   duration: 0.5,
    //   opacity: 0,
    //   yPercent: 100,
    //   stagger: 0.1,
    // });
    // gsap.from(paragraphRef.current, {
    //   opacity: 0,
    //   y: -100,
    // });
  }, []);

  return (
    <footer>
      <div className={styles.content}>
        {/* <div className={styles["mask-element"]}> */}
        <p ref={paragraphRef}>Let's build something together.</p>
        {/* </div> */}
        <div>
          <Button message="Schedule a Call" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
