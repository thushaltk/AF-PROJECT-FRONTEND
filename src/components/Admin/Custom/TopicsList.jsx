import React, { useEffect, useState } from "react";
import { List, Datagrid, TextField } from "react-admin";
import Button from "@material-ui/core/Button";
import ApproveButtonField from "./ApproveButtonField";
import RejectButtonField from "./RejectButtonField";
import ButtonField from "./ButtonField";
import {
  CircularProgress,
  ThemeProvider,
} from "@material-ui/core";
import EditorService from "../../../services/EditorService";

const TopicsList = (props) => {
  const [selectedID, setSelectedID] = useState("");
  const [initialLoading, setInitialLoading] = useState(false);
  var statusState;

  useEffect(() => {
    setTimeout(() => {
      setInitialLoading(true);
    }, 500);
  }, []);

  const updateApproveStatusHandler = async (id, status) => {
    const topicid = id;
    setTimeout(() => {
      setSelectedID(topicid);
    }, 500);

    if (status === "Pending") {
      statusState = "Approved By ADMIN";
      //console.log("if = ", statusState);
    }

    const updatedContent = {
      status: statusState,
    };
    console.log("updatedContent = ", statusState);
    await EditorService.updateStatus(id, updatedContent);
  };

  const deleteRejectStatusHandler = async (id) => {
    await EditorService.deleteTopic(id);
  };

  return (
    <div className="text-center" style={{ padding: "10px" }}>
      <CircularProgress hidden={initialLoading} />
      <List {...props}>
        <Datagrid>
          <TextField source="id" />
          <TextField source="topicTitle" />
          <TextField source="description" />
          <TextField label="Approval Status" source="status" />
          <ThemeProvider theme={false}>
            <ApproveButtonField
              source="status"
              updateStatus={updateApproveStatusHandler}
            />
          </ThemeProvider>
          <ThemeProvider theme={false}>
            <RejectButtonField
              source="id"
              rejectAndDelete={deleteRejectStatusHandler}
            />
          </ThemeProvider>
        </Datagrid>
      </List>
    </div>
  );
};

export default TopicsList;
