import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import Button from "@material-ui/core/Button";
import ButtonField from "./ButtonField";
import { CircularProgress, ThemeProvider } from "@material-ui/core";
import WSPresenterService from "../../../services/WSPresenterService";
import ApproveButtonField from "./ApproveButtonField";

const WSPresenterList = (props) => {
  const [selectedID, setSelectedID] = useState("");
  const [initialLoading, setInitialLoading] = useState(false);
  var statusState;

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);

  const updateApproveStatusHandler = async (id, status) => {
    const wspresenterID = id;
    setTimeout(() => {
      setSelectedID(wspresenterID);
    }, 500);

    if (status === "Approved by Reviewer") {
      statusState = "Approved By ADMIN";
    } else {
      statusState = "Approved by Reviewer";
    }

    const updatedContent = {
      status: statusState,
    };
    console.log("updatedContent = ", statusState);
    await WSPresenterService.updateStatus(id, updatedContent);
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
          />
          <ThemeProvider theme={false}>
            <ApproveButtonField
              source="status"
              updateStatus={updateApproveStatusHandler}
            />
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
