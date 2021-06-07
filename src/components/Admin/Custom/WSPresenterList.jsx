import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import Button from "@material-ui/core/Button";
import ButtonField from "./ButtonField";
import { CircularProgress, ThemeProvider } from "@material-ui/core";
import WSPresenterService from "../../../services/WSPresenterService";s

const WSPresenterList = (props) => {
  //TODO: Do Approve and Reject button functionality
  const [selectedID, setSelectedID] = useState("");
  const [initialLoading, setInitialLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);

  const getIDHandler = (id) => {
    const wsid = id;
    setTimeout(() => {
      setSelectedID(wsid);
    }, 500);
  };

  const deleteWSPresenterHandler = async () => {
    await WSPresenterService.deleteWSPresenter(selectedID);
  };

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
            getID={getIDHandler}
          />
          <ThemeProvider theme={false}>
            <Button variant="contained" color="primary">
              APPROVE
            </Button>
          </ThemeProvider>
          <ThemeProvider theme={false}>
            <Button
              onClick={deleteWSPresenterHandler}
              variant="contained"
              color="secondary"
            >
              REJECT
            </Button>
          </ThemeProvider>
        </Datagrid>
      </List>
    </div>
  );
};

export default WSPresenterList;
