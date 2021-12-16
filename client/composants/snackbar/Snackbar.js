import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function SnackbarComposant({
  response,
  setResponse,
  responseAuth,
  setResponseAuth,
}) {
  const [open, setOpen] = useState(true);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleMessageResponse = (response, responseAuth) => {
    if (response) return response?.data?.message;
    if (responseAuth) return responseAuth?.data?.message;
  };

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        severity={
          responseAuth?.status === 200 || response?.status === 201
            ? "success"
            : "error"
        }
        sx={{ width: "100%" }}
      >
        {handleMessageResponse(response, responseAuth)}
      </MuiAlert>
    </Snackbar>
  );
}
