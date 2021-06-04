import { Backdrop, Button, CircularProgress } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import React, { useEffect, useState } from "react";

const Logout = () => {

  useEffect(() => {
    setTimeout(() => {
        window.location.href = "../../../../admin-login";
    }, 3000);
  }, []);

  return (
    <Backdrop open={true}>
      <CircularProgress color="inherit" />
      <p>Logging out...</p>
    </Backdrop>
  );
};

export default Logout;
