import React, { useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Button, CircularProgress } from "@material-ui/core";
import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_MAXLENGTH,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../../util/validators";
import Alert from "@material-ui/lab/Alert";

import EditorService from "../../../services/EditorService";

const AddPaper = (props) => {
  const [open, setOpen] = useState(props.open);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAuthorName, setEnteredAuthorName] = useState("");
  const [enteredAuthorEmail, setEnteredAuthorEmail] = useState("");
  const [enteredCoverImgURL, setEnteredCoverImgURL] = useState("");
  const [enteredResearchPaperURL, setEnteredResearchPaperURL] = useState("");
  const [researchPaperURLs, setResearchPaperURLs] = useState([]);
  const [errorAlert, setErrorAlert] = useState(false);
  const [successAlert, setSuccessAlert] = useState(false);
  const [failAlert, setFailAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isValid, setIsValid] = useState({
    title: false,
    authorName: false,
    authorEmail: false,
    coverImgURL: false,
    rsPaperURL: false
  });
  const [isTouched, setIsTouched] = useState({
    title: false,
    authorName: false,
    authorEmail: false,
    coverImgURL: false,
    rsPaperURL: false
  });

  const handleClose = () => {
    setOpen(false);
    props.close(false);
  };

  const inputValidate = (name, value, type) => {
    if (name === "title") {
      setIsValid({
        ...isValid,
        title: validate(value, type),
      });
    } else if (name === "authorName") {
      setIsValid({
        ...isValid,
        authorName: validate(value, type),
      });
    } else if (name === "authorEmail") {
      setIsValid({
        ...isValid,
        authorEmail: validate(value, type),
      });
    } else if (name === "coverImgURL") {
      setIsValid({
        ...isValid,
        coverImgURL: validate(value, type),
      });
    }else if (name === "rsPaperURL") {
      setIsValid({
        ...isValid,
        rsPaperURL: validate(value, type),
      });
    }
  };

  const onBlurHandler = (event) => {
    setErrorAlert(false);
    if (event.target.name === "title") {
      setIsTouched({
        ...isTouched,
        title: true,
      });
    } else if (event.target.name === "authorName") {
      setIsTouched({
        ...isTouched,
        authorName: true,
      });
    } else if (event.target.name === "authorEmail") {
      setIsTouched({
        ...isTouched,
        authorEmail: true,
      });
    } else if (event.target.name === "coverImgURL") {
      setIsTouched({
        ...isTouched,
        coverImgURL: true,
      });
    } else if (event.target.name === "rsPaperURL") {
      setIsTouched({
        ...isTouched,
        rsPaperURL: true,
      });
    }
  };

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };
  const authorNameHandler = (event) => {
    setEnteredAuthorName(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };
  const authorEmailHandler = (event) => {
    setEnteredAuthorEmail(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_EMAIL()]);
  };
  const coverImgURLHandler = (event) => {
    setEnteredCoverImgURL(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  }
  const researchPaperURLHandler = (event) => {
    setEnteredResearchPaperURL(event.target.value);
    inputValidate(event.target.name, event.target.value, [VALIDATOR_REQUIRE()]);
  };

  const formHandler = () => {
    const formData = {
      researchPaperTitle: enteredTitle,
      authorName: enteredAuthorName,
      authorEmail: enteredAuthorEmail,
      coverImgURL: enteredCoverImgURL,
      researchPaperURL: enteredResearchPaperURL
    };
    console.log(formData);
    setLoading(true);
    if (isValid.title && isValid.authorName && isValid.authorEmail && isValid.coverImgURL && isValid.rsPaperURL) {
      EditorService.addRSPaper(formData).then((res) => {
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
        Publish Research Paper
      </DialogTitle>
      <form>
        <DialogContent>
          <DialogContentText>
            Publish research paper to front
          </DialogContentText>

          <TextField
            required
            error={!isValid.title && isTouched.title}
            name="title"
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            onChange={titleHandler}
            onBlur={onBlurHandler}
          />
          <TextField
            required
            error={!isValid.authorName && isTouched.authorName}
            name="authorName"
            margin="dense"
            id="authorName"
            label="Author Name"
            type="text"
            fullWidth
            onChange={authorNameHandler}
            onBlur={onBlurHandler}
          />
          <TextField
            required
            error={!isValid.authorEmail && isTouched.authorEmail}
            name="authorEmail"
            margin="dense"
            id="authorEmail"
            label="Author Email"
            type="email"
            fullWidth
            onChange={authorEmailHandler}
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
          <TextField
            required
            error={!isValid.rsPaperURL && isTouched.rsPaperURL}
            name="rsPaperURL"
            margin="dense"
            id="researchPaperURL"
            label="Research Paper URL"
            type="text"
            fullWidth
            onChange={researchPaperURLHandler}
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

export default AddPaper;
