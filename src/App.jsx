import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Loading from "./components/LandingPage/Loading";
import AdminLogin from "./components/Login/AdminLogin/AdminLogin";

import * as WorldLoading from '../public/world-loading.json';
import AdminDashboard from "./components/Admin/AdminDashboard";
import Register from "./components/User/Register";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5100);
  }, []);

  return (
    <Router>
      <div hidden={!isLoading}>
        <Loading setContent={WorldLoading} loop={false} height={400} width={500}/>
      </div>

      <div className="anim" hidden={isLoading}>
        <Header/>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/admin-login">
            <AdminLogin />
          </Route>
          <Route path="/admin/admin-dashboard">
            <AdminDashboard />
          </Route>
          <Route path="/new-user">
            <Register />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
