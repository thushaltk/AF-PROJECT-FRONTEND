import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";
import {
  Button,
  CircularProgress,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import { useHistory } from "react-router";
import AddEditor from "../Editor/AddEditor";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const EditorList = (props) => {
  const [initialLoading, setInitialLoading] = useState(false);
  const [clickedEditor, isClickedEditor] = useState(false);
  let history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);

  const setToClose = (cls) => {
    isClickedEditor(cls);
  };

  const editorHandler = () => {
    isClickedEditor(true);
  };

  return (
    <div className="text-center" style={{ padding: "10px" }}>
      <CircularProgress hidden={initialLoading} />
      <div style={{ display: "flex" }}>
        <Button onClick={editorHandler} color="primary" variant="contained">
          ADD NEW EDITOR
        </Button>
      </div>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="fullName" />
          <TextField source="email" />
          <TextField source="mobileNo" />
          <EditButton basePath="/editor"/>
        </Datagrid>
      </List>
      {clickedEditor ? <AddEditor open={clickedEditor} close={setToClose}/> : ""}
      
    </div>
  );
};

export default EditorList;
