import React, { useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import Button from "@material-ui/core/Button";
import ButtonField from "../Custom/ButtonField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
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
 
  const getIDHandler = (id) => {
    const researcherID = id;
    setTimeout(()=>{
      setSelectedID(researcherID);
    },500);
  };

  const updateApproveStatusHandler = async () => {
    console.log(selectedID);
    const updatedContent = {
      status: 'Approved'
    }
    await ResearcherService.updateStatus(selectedID, updatedContent);
  };

  const deleteRejectStatusHandler = async () =>{
  
    await ResearcherService.deleteResearcher(selectedID);
    //window.location.reload;
  }

  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="fullName" />
        <TextField source="email" />
        <TextField source="mobileNo" />
        <TextField label="Approval Status" source="status" />
        <ButtonField
          label="URL"
          source="researchPaperURL"
          getID={getIDHandler}
        />
        <ThemeProvider theme={false}>
          <Button onClick={updateApproveStatusHandler}  variant="contained" color="primary">
            APPROVE
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={false}>
          <Button onClick={deleteRejectStatusHandler} variant="contained" color="secondary">
            REJECT
          </Button>
        </ThemeProvider>
      </Datagrid>
    </List>
  );
};

export default ResearchersList;
