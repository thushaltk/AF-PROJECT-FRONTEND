import React, { useState } from 'react';

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button } from "@material-ui/core";
import AttendeeService from '../../../services/AttendeeService';

const AttendeeReg = (props) => {
    const [open, setOpen] = useState(props.open);
  const [enteredFullName, setEnteredFullName] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMobileNo, setEnteredMobileNo] = useState("");

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

  const formHandler = () => {
    handleClose();

    const formData = {
        fullName: enteredFullName,
        address: enteredAddress,
        email: enteredEmail,
        mobileNo: enteredMobileNo,
        isPaid: true
    }

    AttendeeService.sendAttendeeDetails(formData).then(res=>{
      console.log("Data sent successfully");
    });

    console.log(formData);
    
  }

    return ( 
        <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" style={{textAlign: "center"}}>Welcome. Glad you're interested in our Conference. Register below.</DialogTitle>
      <form onSubmit={formHandler}>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
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
}
 
export default AttendeeReg;