import { Fragment, useEffect, useState } from "react";
import "./App.scss";
// import image from "./assets/img/logo.svg";
import Header from "./components/Header";
import Body from "./components/body/Body";
import Footer from "./components/Footer";
import LoadingPage from "./components/loading/LoadingPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <Fragment>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          <Header />
          <Body />
          <Footer />
        </div>
      )}
    </Fragment>
  );
}

export default App;
