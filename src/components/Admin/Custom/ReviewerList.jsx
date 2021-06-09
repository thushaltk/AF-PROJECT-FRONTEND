import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";
import {
  Button,
  CircularProgress
} from "@material-ui/core";
import { useHistory } from "react-router";
import AddReviewer from "../Reviewer/AddReviewer";


const ReviewerList = (props) => {
  const [initialLoading, setInitialLoading] = useState(false);
  const [clickedReviewer, isClickedReviewer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);

  const setToClose = (cls) => {
    isClickedReviewer(cls);
  };

  const reviewerHandler = () => {
    isClickedReviewer(true);
  };

  return (
    <div className="text-center" style={{ padding: "10px" }}>
      <CircularProgress hidden={initialLoading} />
      <div style={{ display: "flex" }}>
        <Button onClick={reviewerHandler} color="primary" variant="contained">
          ADD NEW REVIEWER
        </Button>
      </div>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="fullName" />
          <TextField source="email" />
          <TextField source="mobileNo" />
          <EditButton basePath="/reviewer"/>
        </Datagrid>
      </List>
      {clickedReviewer ? <AddReviewer open={clickedReviewer} close={setToClose}/> : ""}
      
    </div>
  );
};

export default ReviewerList;
