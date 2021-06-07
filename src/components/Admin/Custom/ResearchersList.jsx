import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import Button from "@material-ui/core/Button";
import ApproveButtonField from "./ApproveButtonField";
import ButtonField from "./ButtonField";
import {
  CircularProgress,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import ResearcherService from "../../../services/ResearcherService";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const ResearchersList = (props) => {
  const [selectedID, setSelectedID] = useState("");
  const [colortheme, setColorTheme] = useState("");
  const [initialLoading, setInitialLoading] = useState(false);
  var statusState;

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);

  const updateApproveStatusHandler = async (id, status) => {
    const researcherID = id;
    setTimeout(() => {
      setSelectedID(researcherID);
    }, 500);

    if (status === "Approved by Reviewer") {
      statusState = "Approved By ADMIN";
      //console.log("if = ", statusState);
    } else {
      statusState = "Approved by Reviewer";
      //console.log("else = ", statusState);
    }

    const updatedContent = {
      status: statusState,
    };
    console.log("updatedContent = ", statusState);
    await ResearcherService.updateStatus(id, updatedContent);
  };

  const deleteRejectStatusHandler = async () => {
    await ResearcherService.deleteResearcher(selectedID);
    //window.location.reload;
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
          <ButtonField label="URL" source="researchPaperURL" />
          <ThemeProvider theme={false}>
            <ApproveButtonField
              source="status"
              updateStatus={updateApproveStatusHandler}
            />
          </ThemeProvider>
          <ThemeProvider theme={false}>
            <Button
              onClick={deleteRejectStatusHandler}
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

export default ResearchersList;
