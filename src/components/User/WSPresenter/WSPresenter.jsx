import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import WSPresenterService from "../../../services/WSPresenterService";

const WSPresenter = (props) => {
  const [open, setOpen] = useState(props.open);
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMobileNo, setEnteredMobileNo] = useState("");
  const [wsProposalLink, setWSProposalLink] = useState("");


  const handleClose = () => {
    setOpen(false);
    props.close(false);
  };

  const fullNameHandler = (event) => {
    setEnteredFullName(event.target.value);
  }
  const addressHandler = (event) => {
    setEnteredAddress(event.target.value);
  }
  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
  const mobileNoHandler = (event) => {
    setEnteredMobileNo(event.target.value);
  }
  const proposalLinkHandler = (event) => {
    setWSProposalLink(event.target.value);
  }

  const formHandler = () => {
    handleClose();

    const formData = {
        fullName: enteredFullName,
        address: enteredAddress,
        email: enteredEmail,
        mobileNo: enteredMobileNo,
        wsProposalLink: wsProposalLink
    }

    console.log(formData);
    WSPresenterService.sendWSPresenterDetails(formData);
    
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" style={{textAlign: "center"}}>Welcome. Want to be a Workshop Presenter? Register below.</DialogTitle>
      <form onSubmit={formHandler} method="POST">
      <DialogContent>
        <DialogContentText>
          We are glad you to be a part of our conference. Welcome and we would like you publish your valuable
          workshop proposal below. Make sure to upload your proposal to cloud storage (Google Drive, OneDrive, etc..)
          and make it accessible to public. Then paste the link below. Enjoy the conference.
        </DialogContentText>
        
          <TextField
            margin="dense"
            id="name"
            label="Full Name"
            type="text"
            fullWidth
            onChange={fullNameHandler}
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            onChange={addressHandler}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            onChange={emailHandler}
          />
          <TextField
            margin="dense"
            id="mobileNo"
            label="Mobile No"
            type="number"
            fullWidth
            onChange={mobileNoHandler}
          />
          <br/><br/>
          <h6>Upload Workshop Proposal Link (upload your Workshop Proposal to cloud storage and paste the link here)</h6>
          <TextField
            margin="dense"
            id="proposalLink"
            type="text"
            fullWidth
            onChange={proposalLinkHandler}
          />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="secondary">
          CANCEL
        </Button>
        <Button type="submit" color="primary">
          REGISTER
        </Button>
      </DialogActions>
      </form>
    </Dialog>
  );
};

export default WSPresenter;
