import { Fragment } from "react";
import creativeLogo from "../../assets/img/logo.svg";
import styles from "./Loading.module.scss";

const LoadingPage = () => {
  return (
    <Fragment>
      <div className={styles["loading-container"]}>
        <img src={creativeLogo} alt="creative logo" />
        <p>...</p>
      </div>
    </Fragment>
  );
};

export default LoadingPage;
