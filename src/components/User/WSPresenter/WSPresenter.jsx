import React, { useEffect, useState } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import WSPresenterService from "../../../services/WSPresenterService";
import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../util/validators";
import Alert from "@material-ui/lab/Alert";

const WSPresenter = (props) => {
  const [open, setOpen] = useState(props.open);
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMobileNo, setEnteredMobileNo] = useState("");
  const [wsProposalLink, setWSProposalLink] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [isValid, setIsValid] = useState({
    name: false,
    address: false,
    email: false,
    mobileNo: false,
  });
  const [isTouched, setIsTouched] = useState({
    name: false,
    address: false,
    email: false,
    mobileNo: false,
  });

  const handleClose = () => {
    setOpen(false);
    props.close(false);
  };

  const inputValidate = (name, value, type) => {
    if (name === "name") {
      setIsValid({
        ...isValid,
        name: validate(value, type),
      });
    } else if (name === "address") {
      setIsValid({
        ...isValid,
        address: validate(value, type),
      });
    } else if (name === "email") {
      setIsValid({
        ...isValid,
        email: validate(value, type),
      });
    } else if (name === "mobileNo") {
      setIsValid({
        ...isValid,
        mobileNo: validate(value, type),
      });
    }
  };

  const onBlurHandler = (event) => {
    setErrorAlert(false);
    if (event.target.name === "name") {
      setIsTouched({
        ...isTouched,
        name: true,
      });
    } else if (event.target.name === "address") {
      setIsTouched({
        ...isTouched,
        address: true,
      });
    } else if (event.target.name === "email") {
      setIsTouched({
        ...isTouched,
        email: true,
      });
    } else if (event.target.name === "mobileNo") {
      setIsTouched({
        ...isTouched,
        mobileNo: true,
      });
    }
  };

  const fullNameHandler = (event) => {
    setEnteredFullName(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
    //console.log("isValid = ", validate(event.target.value, [VALIDATOR_REQUIRE()]));
  };
  const addressHandler = (event) => {
    setEnteredAddress(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_EMAIL()]);
  };
  const mobileNoHandler = (event) => {
    setEnteredMobileNo(event.target.value);
    inputValidate(event.target.name, event.target.value, [
      VALIDATOR_MAXLENGTH(10),
      VALIDATOR_MINLENGTH(10),
    ]);
  };
  const proposalLinkHandler = (event) => {
    setWSProposalLink(event.target.value);
  };

  const formHandler = () => {
    const formData = {
      fullName: enteredFullName,
      address: enteredAddress,
      email: enteredEmail,
      mobileNo: enteredMobileNo,
      wsProposalLink: wsProposalLink,
    };
    console.log(formData);
    if (isValid.name && isValid.address && isValid.email && isValid.mobileNo) {
      WSPresenterService.sendWSPresenterDetails(formData);
      handleClose();
    } else {
      setErrorAlert(true);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
        Welcome. Want to be a Workshop Presenter? Register below.
      </DialogTitle>
      <form>
        <DialogContent>
          <DialogContentText>
            We are glad you to be a part of our conference. Welcome and we would
            like you publish your valuable workshop proposal below. Make sure to
            upload your proposal to cloud storage (Google Drive, OneDrive,
            etc..) and make it accessible to public. Then paste the link below.
            Enjoy the conference.
          </DialogContentText>

          <TextField
            required
            error={!isValid.name && isTouched.name}
            name="name"
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            onChange={fullNameHandler}
            onBlur={onBlurHandler}
          />
          <TextField
            required
            error={!isValid.address && isTouched.address}
            name="address"
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            onChange={addressHandler}
            onBlur={onBlurHandler}
          />
          <TextField
            required
            error={!isValid.email && isTouched.email}
            name="email"
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={emailHandler}
            onBlur={onBlurHandler}
          />
          <TextField
            required
            error={!isValid.mobileNo && isTouched.mobileNo}
            helperText="Must Contain 10 digits"
            name="mobileNo"
            margin="dense"
            id="mobileNo"
            label="Mobile No"
            type="number"
            fullWidth
            onChange={mobileNoHandler}
            onBlur={onBlurHandler}
          />
          <br />
          <br />
          <h6>
            Upload Workshop Proposal Link (upload your Workshop Proposal to
            cloud storage and paste the link here)
          </h6>
          <TextField
            required
            margin="dense"
            id="proposalLink"
            helperText="Format should be 'https://....' "
            type="text"
            fullWidth
            onChange={proposalLinkHandler}
          />
          <br/><br/>
          <Alert hidden={!errorAlert} severity="error">
            Check inputs again!....
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            CANCEL
          </Button>
          <Button onClick={formHandler} color="primary">
            REGISTER
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default WSPresenter;
