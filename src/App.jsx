import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Loading from "./components/LandingPage/Loading";
import AdminLogin from "./components/Login/AdminLogin/AdminLogin";
import * as WorldLoading from "../public/world-loading.json";
import AdminDashboard from "./components/Admin/AdminDashboard";
import Register from "./components/User/Register";
import ReviewerDashboard from "./components/Admin/Reviewer/ReviewerDashboard";
import ReviewerLogin from "./components/Login/Reviewer Login/ReviewerLogin";
import EditorLogin from "./components/Login/EditorLogin/EditorLogin";
import EditorDashboard from "./components/Admin/Editor/EditorDashboard";
//import WSProposals from "./components/WSProposals/WSProposals";
import Papers from "./components/Papers/Papers";
import ConfTopics from "./components/ConfTopics/ConfTopics";
import SpecialSessions from "./components/SpecialSessions/SpecialSessions";
//import Commitee from "./components/Commitee/Commitee";
//import PastProceedings from "./components/PastProceedings/PastProceedings";
//import ContactUs from "./components/ContactUs/ContactUs";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hideHeaderFooter, setHideHeaderFooter] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5100);
  }, []);

  /**
   * Hides the Header and footer components when the dashboards are loaded.
   * @param {Returns a boolean value} v
   */
  const hideHeaderFooterHandler = (v) => {
    setHideHeaderFooter(v);
  };

  return (
    <Router>
      <div hidden={!isLoading}>
        <Loading
          setContent={WorldLoading}
          loop={false}
          height={400}
          width={500}
        />
      </div>
      <div className="anim" hidden={isLoading}>
        <div hidden={hideHeaderFooter}>
          <Header />
        </div>
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/papers">
              <Papers />
            </Route>
            <Route exact path="/topics">
              <ConfTopics />
            </Route>
            <Route path="/special">
              <SpecialSessions />
            </Route>
            {/* <Route path="/commitee">
              <Commitee />
            </Route> */}
            {/* <Route path="/contactus">
              <ContactUs />
            </Route>
            <Route path="/past-proceedings">
              <PastProceedings />
            </Route> */}
            {/* <Route exact path="/wsproposals">
              <WSProposals />
            </Route> */}
            <Route path="/admin-login">
              <AdminLogin />
            </Route>
            <Route path="/admin/adminDash">
              <AdminDashboard hide={hideHeaderFooterHandler} />
            </Route>
            <Route path="/new-user">
              <Register />
            </Route>
            <Route path="/reviewer-login">
              <ReviewerLogin />
            </Route>
            <Route path="/editor-login">
              <EditorLogin />
            </Route>
            <Route path="/editorDash">
              <EditorDashboard hide={hideHeaderFooterHandler} />
            </Route>
            <Route path="/reviewerDash">
              <ReviewerDashboard hide={hideHeaderFooterHandler} />
            </Route>
          </Switch>
        </div>
        <div hidden={hideHeaderFooter}>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
