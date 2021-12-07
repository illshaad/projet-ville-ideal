import React , { useState }from "react";
import Snackbar from "@material-ui/core/Snackbar";


export default function SnackbarComposant({ response, setResponse }) {
  const [open, setOpen] = useState(true);


  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setResponse();
    setOpen(false);
  };

  return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={response}
      />
  );
}

