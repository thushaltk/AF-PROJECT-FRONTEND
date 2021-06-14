import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import validator from 'validator';

import "./Footer.css";

const Footer = () => {
  const [isEmailInvalid, setisEmailInvalid] = useState(false);
  const [helperText, setHelperText] = useState("");

  const isEmailInvalidHandler = (event) => {
    if(validator.isEmail(event.target.value)){
      setisEmailInvalid(false);
      setHelperText("");
    }else{
      setisEmailInvalid(true);
      setHelperText("Oops....Check spellings again!");
    }
  }

  return (
    <footer className="footer-clean">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-3 item social text-center">
            <a href="#">
              <i className="icon ion-social-facebook" />
            </a>
            <a href="#">
              <i className="icon ion-social-twitter" />
            </a>
            <a href="#">
              <i className="icon ion-social-snapchat" />
            </a>
            <a href="#">
              <i className="icon ion-social-instagram" />
            </a>
            <p className="copyright text-center" style={{color: "#000"}}>LAND OF GODS © 2021</p>
          </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-md-8 item">
            <p style={{ textAlign: "center", color: "#000"}}>
              <strong>SUBSCRIBE</strong>
            </p>
            <TextField
              error={isEmailInvalid}
              helperText={helperText}
              type="email"
              className="mat-subscribe"
              id="filled-basic"
              label="Enter Email"
              onChange={isEmailInvalidHandler}
              variant="filled"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8 item text-center">
            <Button style={{marginTop: "20px"}} variant="contained" color="primary">SIGN UP</Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
