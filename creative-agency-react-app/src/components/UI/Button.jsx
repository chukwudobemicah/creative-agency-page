import styles from "./Button.module.scss";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Button = ({ message, className }) => {
  const buttonRef = useRef(null);
  const shineRef = useRef(null);

  useEffect(() => {
    // const curBtn = buttonRef.current;
    const curShine = shineRef.current;

    const shineAnimation = gsap.fromTo(
      curShine,
      {
        left: "-100%",
        // className: styles.shine,
        // onStart: () => curShine.classList.add("shine"),
        // onReverseComplete: () => curShine.classList.remove("shine"),
        // paused: true,
        // yPercent: 100,
      },
      {
        left: "100%",
        duration: 0.2,
        // paused: true,
      }
    );

    // const shineAnimation = gsap.to(curShine, {
    //   duration: 0.5,
    //   className: styles.shine,
    //   paused: true,
    // });

    ScrollTrigger.create({
      trigger: curShine,
      // markers: true,
      start: "top 90%",
      animation: shineAnimation,
      toggleActions: "play reverse restart restart",
      // onEnter: () => {
      //   shineAnimation.play();
      // },
      // onLeaveBack: () => shineAnimation.play(),
    });
  }, []);
  return (
    <button
      ref={buttonRef}
      className={`${styles.button} ${styles[`${className}`]}`}
    >
      {message}
      <span ref={shineRef} className={styles.shine}></span>
    </button>
  );
};
export default Button;
