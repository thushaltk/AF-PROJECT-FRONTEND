import React, { useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import AttendeeCount from "./AttendeeCount";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const AttendeeList = (props) => {

  return (
    <div style={{padding: "10px"}}>
      <AttendeeCount/>
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="fullName" />
          <TextField source="email" />
          <TextField source="mobileNo" />
          <TextField source="isPaid" />
        </Datagrid>
      </List>
    </div>
  );
};

export default AttendeeList;
