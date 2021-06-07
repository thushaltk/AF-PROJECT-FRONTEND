import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, CircularProgress } from "@material-ui/core";
import EditorService from "../../../services/EditorService";
import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../../util/validators";
import Alert from "@material-ui/lab/Alert";

const EditorChangePwd = (props) => {
  const [open, setOpen] = useState(props.open);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPwd, setEnteredPwd] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [registerAlert, setRegisterAlert] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState({
    email: false,
    password: false,
    confpassword: false,
  });
  const [isTouched, setIsTouched] = useState({
    email: false,
    password: false,
    confpassword: false,
  });

  const handleClose = () => {
    setOpen(false);
    props.close(false);
  };

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
    } else if (name === "confpassword") {
      setIsValid({
        ...isValid,
        confpassword: validate(value, type),
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
    } else if (event.target.name === "confpassword") {
      setIsTouched({
        ...isTouched,
        confpassword: true,
      });
    }
  };

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_EMAIL()]);
  };
  const passwordHandler = (event) => {
    setEnteredPwd(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };
  const confpasswordHandler = (event) => {
    if (enteredPwd !== event.target.value) {
      console.log("Password mismatch");
      setPasswordMismatch(false);
    } else {
      console.log("Password match");
      setPasswordMismatch(true);
    }
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };

  const formHandler = () => {
    const formData = {
      email: enteredEmail,
      password: enteredPwd,
    };
    //console.log(formData);
    setLoading(true);
    if (
      isValid.email &&
      isValid.password &&
      isValid.confpassword &&
      passwordMismatch
    ) {
      EditorService.updateEditorPassword(formData).then((res) => {
          console.log(res);
        if (res) {
          setTimeout(() => {
            setLoading(false);
            setSuccessAlert(true);
          }, 500);
        } else {
          setTimeout(() => {
            setLoading(false);
            setRegisterAlert(true);
          }, 500);
        }
      });
    } else {
      setErrorAlert(true);
      setLoading(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title" style={{ textAlign: "center" }}>
        Add New Editor
      </DialogTitle>
      <form>
        <DialogContent>
          <DialogContentText>
            "With great power comes great responsibilities". Editors can add,
            edit content in the website which client sees. Use powers wisely!.
          </DialogContentText>
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
            error={
              (!isValid.password && isTouched.password) || !passwordMismatch
            }
            name="password"
            margin="dense"
            id="password"
            label="New Password"
            type="password"
            fullWidth
            onChange={passwordHandler}
            onBlur={onBlurHandler}
          />
          <TextField
            required
            error={
              (!isValid.confpassword && isTouched.confpassword) ||
              !passwordMismatch
            }
            name="confpassword"
            margin="dense"
            id="confpassword"
            label="Confirm Password"
            type="password"
            fullWidth
            onChange={confpasswordHandler}
            onBlur={onBlurHandler}
          />
          <br />
          <br />
          <div className="text-center">
            <CircularProgress hidden={!loading} />
          </div>
          <Alert hidden={!errorAlert} severity="error">
            Check inputs again!....
          </Alert>
          <Alert hidden={!successAlert} severity="success">
            Update Successful!!!
          </Alert>
          <Alert hidden={!registerAlert} severity="error">
            Update Failed!!!.. Email Doesn't exist...
          </Alert>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            CANCEL
          </Button>
          <Button onClick={formHandler} color="primary">
            ADD
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditorChangePwd;
