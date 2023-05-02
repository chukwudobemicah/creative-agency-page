import { Fragment, useRef, useState, useContext, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import styles from "./Header.module.scss";
import logoImage from "../assets/img/logo.svg";
import Button from "./UI/Button";
// import NavProvider from "../context/nav-context";
// import Button from "./UI/Button";

function Header() {
  // const [width, setWidth] = useState(window.innerWidth);
  const [viewPort, setViewPort] = useState(window.innerWidth);
  const breakpoint = 700;
  // const handleResizeWindow = () => setWidth(setWidth(window.innerWidth));
  // window.addEventListener("resize", handleResizeWindow);
  const navState = false;
  useEffect(() => {
    const handleResize = () => {
      setViewPort(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const body = document.querySelector("body");

  const [navOpen, setNavOpen] = useState(navState);

  const toggleNav = () => {
    setNavOpen((prev) => {
      return !prev;
    });
    navClasses = navOpen ? `${styles["scale-up"]}` : styles["scale-down"];
  };

  let navClasses = navOpen ? `${styles["scale-up"]}` : styles["hidden"];

  return (
    <header>
      <div>
        <div onClick={toggleNav}>
          <img src={logoImage} alt="creative logo" />
        </div>
        {viewPort < 700 && (
          <Hamburger
            className="hamburger"
            color="#333"
            size={25}
            toggle={toggleNav}
            toggled={navOpen}
          />
        )}
        <nav className={navClasses}>
          <ul>
            <li>About</li>
            <li>Service</li>
            <li>Projects</li>
          </ul>
          {/* <button>Schedule a Call</button> */}
          <Button className="black-button" message="Schedule a Call" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
