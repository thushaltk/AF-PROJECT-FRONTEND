import React, { useEffect, useState } from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import * as LoginLoading from "../../../../public/53395-login.json";

import "./AdminLogin.css";
import Loading from "../../LandingPage/Loading";
import { useHistory } from "react-router";

const AdminLogin = (props) => {
  let history = useHistory();

  const login = () => {
    history.push("/admin/admin-dashboard");
  }

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
        <form method="post" style={{width: "100%", alignItems: "center"}} className="login-anim">
            <div className="admin-login-dp"></div>
            <br/>
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
              onClick={login}
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
