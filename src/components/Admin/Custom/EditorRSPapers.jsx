import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";
import Button from "@material-ui/core/Button";
import ApproveButtonField from "./ApproveButtonField";
import ButtonField from "./ButtonField";
import {
  CircularProgress,
} from "@material-ui/core";

const EditorRSPapers = (props) => {
  const [initialLoading, setInitialLoading] = useState(false);
  const [clickedARP, isClickedARP] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);


  return (
    <div className="text-center" style={{ padding: "10px" }}>
      <CircularProgress hidden={initialLoading} />
      <div style={{ display: "flex" }}>
      </div>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="researchPaperTitle" />
          <TextField source="authorName" />
          <TextField source="authorEmail" />
          <ButtonField label="URL" source="researchPaperURL" />
          <EditButton basePath="/editor/rs-papers"/>
        </Datagrid>
      </List>
    </div>
  );
};

export default EditorRSPapers;
