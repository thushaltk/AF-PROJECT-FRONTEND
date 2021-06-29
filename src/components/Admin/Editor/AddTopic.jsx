import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
//import Select from "react-select";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, CircularProgress } from "@material-ui/core";
import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from "../../../util/validators";
import Alert from "@material-ui/lab/Alert";

import EditorService from "../../../services/EditorService";

const AddTopic = (props) => {
  const [open, setOpen] = useState(props.open);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredCoverImgURL, setEnteredCoverImgURL] = useState("");
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failAlert, setFailAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState({
    topicTitle: false,
    description: false,
    coverImgURL: false,
  });
  const [isTouched, setIsTouched] = useState({
    topicTitle: false,
    description: false,
    coverImgURL: false,
  });

  const handleClose = () => {
    setOpen(false);
    props.close(false);
  };

  const inputValidate = (name, value, type) => {
    if (name === "topicTitle") {
      setIsValid({
        ...isValid,
        topicTitle: validate(value, type),
      });
    } else if (name === "description") {
      setIsValid({
        ...isValid,
        description: validate(value, type),
      });
    } else if (name === "coverImgURL") {
      setIsValid({
        ...isValid,
        coverImgURL: validate(value, type),
      });
    }
  };

  const onBlurHandler = (event) => {
    setErrorAlert(false);
    if (event.target.name === "topicTitle") {
      setIsTouched({
        ...isTouched,
        topicTitle: true,
      });
    } else if (event.target.name === "description") {
      setIsTouched({
        ...isTouched,
        description: true,
      });
    } else if (event.target.name === "coverImgURL") {
      setIsTouched({
        ...isTouched,
        coverImgURL: true,
      });
    }
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };
  const descriptionHandler = (event) => {
    setEnteredDescription(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };
  const coverImgURLHandler = (event) => {
    setEnteredCoverImgURL(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };

  const formHandler = () => {
    const formData = {
      topicTitle: enteredTitle,
      description: enteredDescription,
      coverImgURL: enteredCoverImgURL
    };
    console.log(formData);
    setLoading(true);
    if (isValid.topicTitle && isValid.description && isValid.coverImgURL) {
      EditorService.addTopic(formData).then((res) => {
        if (res) {
          setTimeout(() => {
            setLoading(false);
            setSuccessAlert(true);
          }, 500);
        } else {
          setTimeout(() => {
            setLoading(false);
            setFailAlert(true);
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
        Publish New Conference Topics
      </DialogTitle>
      <form>
        <DialogContent>
          <DialogContentText>
            Always get updated. Publish a new conference topic here.
          </DialogContentText>

          <TextField
            required
            error={!isValid.topicTitle && isTouched.topicTitle}
            name="topicTitle"
            margin="dense"
            id="topicTitle"
            label="Topic Title"
            type="text"
            fullWidth
            onChange={titleHandler}
            onBlur={onBlurHandler}
          />
          <TextField
            required
            error={!isValid.description && isTouched.description}
            name="description"
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            onChange={descriptionHandler}
            onBlur={onBlurHandler}
          />
          <TextField
            required
            error={!isValid.coverImgURL && isTouched.coverImgURL}
            name="coverImgURL"
            margin="dense"
            id="coverImgURL"
            label="Cover Image URL"
            type="text"
            fullWidth
            onChange={coverImgURLHandler}
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
            Added Successful!!!
          </Alert>
          <Alert hidden={!failAlert} severity="error">
            Added Failed!!!.. Try Again...
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

export default AddTopic;
