import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import { CircularProgress, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import AttendeeCount from "./AttendeeCount";

const theme = createMuiTheme({
  palette: {
    primary: green,
    secondary: red,
  },
});

const AttendeeList = (props) => {
  const [initialLoading, setInitialLoading] = useState(false);

    useEffect(()=>{
        setTimeout(()=>{
            setInitialLoading(true);
        },500)
    },[])

  return (
    <div className="text-center" style={{padding: "10px"}}>
      <AttendeeCount/>
      <CircularProgress hidden={initialLoading}/>
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
