import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as LoginLoading from "../../../../public/53395-login.json";

import "./AdminLogin.css";
import Loading from "../../LandingPage/Loading";

const AdminLogin = (props) => {
  return (
    <div className="row login-clean">
      <div className="col col-sm-1"></div>
      <div className="col col-sm-5 login-anim" style={{marginTop: "-10px"}}>
          <Loading
            setContent={LoginLoading}
            loop={true}
            height={400}
            width={500}
          />
      </div>
      <div className="col col-sm-6">
        <form method="post" style={{width: "100%"}} className="login-anim">
          <h2 className="sr-only">Login Form</h2>
          <div className="illustration">
            <i className="icon ion-ios-navigate" />
          </div>
          <div className="form-group">
            <TextField
              className="form-control"
              type="email"
              name="email"
              label="Email"
            />
          </div>
          <div className="form-group">
            <TextField
              className="form-control"
              type="password"
              name="password"
              label="Password"
            />
          </div>
          <br/>
          <div className="form-group">
            <Button
              className="btn-block"
              type="submit"
              variant="contained"
              color="primary"
            >
              Log In
            </Button>
          </div>
          <a className="forgot" href="#">
            Forgot your email or password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
