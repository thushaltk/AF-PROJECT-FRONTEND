import React, { useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import Button from "@material-ui/core/Button";
import ButtonField from "../Custom/ButtonField";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const ResearchersList = (props) => {
    //TODO: Do Approve and Reject button functionality
  const [selectedID, setSelectedID] = useState("");
  const [colortheme, setColorTheme] = useState("");


  const getIDHandler = (id) => {
    setSelectedID(id);
  };

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
          <Button variant="contained" color="primary">
            APPROVE
          </Button>
        </ThemeProvider>
        <ThemeProvider theme={false}>
          <Button variant="contained" color="secondary">
            REJECT
          </Button>
        </ThemeProvider>
      </Datagrid>
    </List>
  );
};

export default ResearchersList;
