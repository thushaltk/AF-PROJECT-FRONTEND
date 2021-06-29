import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import Button from "@material-ui/core/Button";
import ButtonField from "./ButtonField";
import { CircularProgress} from "@material-ui/core";
import AddProposal from "../Editor/AddProposal";

const EditorWSPresenterList = (props) => {
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

  const publishProposalHandler = () => {
    isClickedARP(true)
  }

  return (
    <div className="text-center" style={{ padding: "10px" }}>
      <CircularProgress hidden={initialLoading} />
      <div style={{ display: "flex" }}>
        <Button onClick={publishProposalHandler} color="primary" variant="contained">
          Publish Proposal
        </Button>
      </div>
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
      {clickedARP ? <AddProposal open={clickedARP} close={setToClose}/> : ""}
    </div>
  );
};

export default EditorWSPresenterList;
