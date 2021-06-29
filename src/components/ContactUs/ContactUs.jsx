import React from "react";
import { useState } from "react";

import "./ContactUs.css";

import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import Button from "@material-ui/core/Button";
import EditorService from "../../services/EditorService";

const ContactUs = () => {
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const fullNameHandler = (event) => {
    setEnteredFullName(event.target.value);
  };

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const formHandler = () => {
    const formData = {
      fullName: enteredFullName,
      email: enteredEmail,
      message: enteredMessage,
    };

    EditorService.addContactDetails(formData).then((res) => {
      if (res) {
        setShowAlert(true);
        setShowErrorAlert(false);
      } else {
        setShowAlert(false);
        setShowErrorAlert(true);
      }
    });
  };

  return (
    <div className="contactus-bg">
      <div
        className="container"
        style={{ padding: "40px", width: "100%", height: "100%" }}
      >
        <section className="map-clean">
          <div className="container">
            <div className="intro">
              <h2 className="text-center">Location </h2>
              <p className="text-center">
                Nunc luctus in metus eget fringilla. Aliquam sed justo ligula.
                Vestibulum nibh erat, pellentesque ut laoreet vitae.{" "}
              </p>
            </div>
          </div>
          <img className="map" />
        </section>
        <br />
        <br />
        <section className="contact-clean">
          <form onSubmit={formHandler}>
            <h2 className="text-center">Contact us</h2>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={{ padding: "40px", width: "80%" }}>
                <TextField
                  margin="dense"
                  id="name"
                  label="Full Name"
                  type="text"
                  fullWidth
                  required
                  onChange={fullNameHandler}
                />
                <br />
                <TextField
                  margin="dense"
                  id="email"
                  label="Email"
                  type="email"
                  fullWidth
                  required
                  onChange={emailHandler}
                />
                <br />
                <TextField
                  margin="dense"
                  id="message"
                  label="Message"
                  type="text"
                  fullWidth
                  required
                  onChange={messageHandler}
                />
                <br />
                <br />
                <div className="form-group text-center">
                  <Button type="submit" variant="contained" color="primary">
                    SEND
                  </Button>
                </div>
                <Alert hidden={!showAlert} severity="success">
                  Inquiry Sent!
                </Alert>
                <Alert hidden={!showErrorAlert} severity="error">
                  Inquiry Sent Failed!. Try Again!.
                </Alert>
              </div>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
};

export default ContactUs;
