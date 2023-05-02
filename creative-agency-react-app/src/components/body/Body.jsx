import "./Body.module.scss";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFour from "./SectionFour";
import { Fragment } from "react";
// import image from "./assets/img/logo.svg";

function Body() {
  return (
    <Fragment>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
    </Fragment>
  );
}

export default Body;
