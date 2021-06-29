import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField, EditButton } from "react-admin";
import ButtonField from "./ButtonField";
import Button from "@material-ui/core/Button";
import {
  CircularProgress,
} from "@material-ui/core";
import AddTopic from "../Editor/AddTopic";

const Inquiries = (props) => {
  const [initialLoading, setInitialLoading] = useState(false);

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
          <TextField source="fullName" />
          <TextField source="email" />
          <TextField source="message" />
        </Datagrid>
      </List>
    </div>
  );
};

export default Inquiries;
