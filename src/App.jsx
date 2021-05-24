import React, { useEffect, useState } from "react";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Loading from "./components/LandingPage/Loading";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5100);
  }, []);

  return (
    <React.Fragment>
      <div hidden={!isLoading}>
        <Loading />
      </div>

      <div className="anim" hidden={isLoading}>
        <Header />
        <LandingPage />
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
