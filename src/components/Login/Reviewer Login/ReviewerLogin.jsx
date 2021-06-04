import React, { useState } from "react";

import "./ReviewerLogin.css";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from "@material-ui/lab/Alert";
import * as ReviewerLoginLoading from "../../../../public/28620-login-do-polichat.json";

import Loading from "../../LandingPage/Loading";
import { useHistory } from "react-router";
import ReviewerService from "../../../services/ReviewerService";
import { validate, VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from "../../../util/validators";

const ReviewerLogin = (props) => {
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
  });
  const [isTouched, setIsTouched] = useState({
    email: false,
    password: false,
  });

  const inputValidate = (name, value, type) => {
    if (name === "email") {
      setIsValid({
        ...isValid,
        email: validate(value, type),
      });
    } else if (name === "password") {
      setIsValid({
        ...isValid,
        password: validate(value, type),
      });
    }
  };

  const onBlurHandler = (event) => {
    setErrorAlert(false);
    if (event.target.name === "email") {
      setIsTouched({
        ...isTouched,
        email: true,
      });
    } else if (event.target.name === "password") {
      setIsTouched({
        ...isTouched,
        password: true,
      });
    }
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]);
  };
  const passwordChangeHandeler = (event) => {
    setPassword(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };

  const login = async () => {
    const loginDetails = {
      email: email,
      password: password,
    };
    if (isValid.email && isValid.password) {
      setProcessing(true);
      await ReviewerService.sendReviewerLogin(loginDetails).then((res) => {
        setTimeout(() => {
          const loggedIn = ReviewerService.isLoggedIn();
          setProcessing(false);
          setLoginSuccess(loggedIn);
          console.log("loggedIn =", loggedIn);
          if (loggedIn === true) {
            history.push("/reviewerDash");
          }
        }, 500);
      });
    } else {
      setProcessing(true);
      setTimeout(() => {
          setProcessing(false);
          setErrorAlert(true);
      }, 800);
    }

    console.log("Response = ", response);
  };

  return (
    <div className="row login-clean">
      <div className="col col-sm-1"></div>
      <div className="col col-sm-5 login-anim" style={{ marginTop: "-10px" }}>
        <Loading
          setContent={ReviewerLoginLoading}
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
          <div className="reviewer-login-dp"></div>
          <br />
          <div className="form-group">
            <TextField
              required
              error={!isValid.email && isTouched.email}
              className="form-control"
              type="email"
              name="email"
              label="Email"
              onChange={emailChangeHandler}
              onBlur={onBlurHandler}
            />
          </div>
          <div className="form-group">
            <TextField
              required
              error={!isValid.password && isTouched.password}
              className="form-control"
              type="password"
              name="password"
              label="Password"
              onChange={passwordChangeHandeler}
              onBlur={onBlurHandler}
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
            <br /><br />
            <Alert hidden={!errorAlert} severity="error">
            Check inputs again!....
          </Alert>
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

export default ReviewerLogin;
