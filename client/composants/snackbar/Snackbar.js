import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function SnackbarComposant({ response }) {
  const [open, setOpen] = useState(true);

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleMessageResponse = (response) => {
    if (response) return response?.data?.message;
  };

  useEffect(() => {
    if (response && !open) setOpen(true);
  }, [response]);

  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert
        onClose={handleClose}
        severity={
          response.status === 200 || response.status === 201
            ? "success"
            : "error"
        }
        sx={{ width: "100%" }}
      >
        {handleMessageResponse(response)}
      </MuiAlert>
    </Snackbar>
  );
}
