import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";
import ButtonField from "./ButtonField";
import Button from "@material-ui/core/Button";
import {
  CircularProgress,
} from "@material-ui/core";
import AddTopic from "../Editor/AddTopic";

const EditorTopics = (props) => {
  const [initialLoading, setInitialLoading] = useState(false);
  const [clickedARP, isClickedARP] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);

  const setToClose = (cls) => {
    isClickedARP(cls);
  };

  const topicHandler = () => {
    isClickedARP(true)
  }


  return (
    <div className="text-center" style={{ padding: "10px" }}>
      <CircularProgress hidden={initialLoading} />
      <div style={{ display: "flex" }}>
        <Button onClick={topicHandler} color="primary" variant="contained">
          Publish Conference Topic
        </Button>
      </div>
      <div style={{ display: "flex" }}>
      </div>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="topicTitle" />
          <TextField source="description" />
          <TextField label="Approval Status" source="status" />
          <EditButton basePath="/editor/conference-topics"/>
        </Datagrid>
      </List>
      {clickedARP ? <AddTopic open={clickedARP} close={setToClose}/> : ""}
    </div>
  );
};

export default EditorTopics;
