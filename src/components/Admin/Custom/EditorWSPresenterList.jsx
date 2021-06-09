import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import Button from "@material-ui/core/Button";
import ButtonField from "./ButtonField";
import { CircularProgress} from "@material-ui/core";

const EditorWSPresenterList = (props) => {
  const [selectedID, setSelectedID] = useState("");
  const [initialLoading, setInitialLoading] = useState(false);
  var statusState;

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);

  return (
    <div className="text-center" style={{ padding: "10px" }}>
      <CircularProgress hidden={initialLoading} />
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="fullName" />
          <TextField source="email" />
          <TextField source="mobileNo" />
          <TextField label="Approval Status" source="status" />
          <ButtonField
            label="URL"
            source="wsProposalLink"
          />
        </Datagrid>
      </List>
    </div>
  );
};

export default EditorWSPresenterList;
