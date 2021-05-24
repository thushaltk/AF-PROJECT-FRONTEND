import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-clean">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 item">
            <p style={{ textAlign: "center" }}>
              <strong>SEARCH</strong>
            </p>
            <TextField
              className="mat-search"
              id="filled-basic"
              label="Search"
              variant="filled"
            />
          </div>
          <div className="col-lg-3 item social">
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
            <p className="copyright">LAND OF GODS © 2021</p>
          </div>
        </div>
        <br />
        <br />
        <div className="row justify-content-center">
          <div className="col-md-8 item">
            <p style={{ textAlign: "center" }}>
              <strong>SUBSCRIBE</strong>
            </p>
            <TextField
              type="email"
              className="mat-subscribe"
              id="filled-basic"
              label="Enter Email"
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
