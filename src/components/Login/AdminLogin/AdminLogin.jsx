import React, { useState } from "react";

import "./AdminLogin.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import * as LoginLoading from "../../../../public/53395-login.json";

import Loading from "../../LandingPage/Loading";
import { useHistory } from "react-router";
import AdminService from "../../../services/AdminService";

const AdminLogin = (props) => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [processing, setProcessing] = useState(false);


  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const passwordChangeHandeler = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    setProcessing(true);
    console.log("Came to login() method");
    const loginDetails = {
      username: username,
      password: password,
    };
    AdminService.sendAdminLogin(loginDetails);
    setTimeout(() => {
      const loggedIn = AdminService.isLoggedIn();
      setProcessing(false);
      setLoginSuccess(loggedIn);

      if (loggedIn === true) {
        history.push("/admin/adminDash");
      }
    }, 500);
  };

  return (
    <div className="row login-clean">
      <div className="col col-sm-1"></div>
      <div className="col col-sm-5 login-anim" style={{ marginTop: "-10px" }}>
        <Loading
          setContent={LoginLoading}
          loop={true}
          height={400}
          width={500}
        />
      </div>
      <div className="col col-sm-6">
        <form
          style={{ width: "100%", alignItems: "center" }}
          className="login-anim"
        >
          <div className="admin-login-dp"></div>
          <br />
          <div className="form-group">
            <TextField
              className="form-control"
              type="text"
              name="username"
              label="Username"
              onChange={usernameChangeHandler}
            />
          </div>
          <div className="form-group">
            <TextField
              className="form-control"
              type="password"
              name="password"
              label="Password"
              onChange={passwordChangeHandeler}
            />
          </div>
          <br />
          <div className="form-group" style={{ textAlign: "center" }}>
            <CircularProgress hidden={!processing} />
            <Button
              hidden={processing}
              className="btn-block"
              type="button"
              variant="contained"
              color="primary"
              onClick={login}
            >
              Log In
            </Button>
            <br />
            {loginSuccess === true ? (
              <Alert severity="success">LOGIN SUCESS!!!</Alert>
            ) : loginSuccess === false ? (
              <Alert severity="error">INVALID CREDENTIALS</Alert>
            ) : (
              ""
            )}
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
