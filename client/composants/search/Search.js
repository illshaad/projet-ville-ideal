import React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function Search({ dataIleDeFrance }) {
  const nameCity = dataIleDeFrance.dataAll.map((e) => {
    return {
      label: e.nom,
      value: e.nom,
    };
  });

  const defaultProps = {
    options: nameCity,
    getOptionLabel: (option) => option.label,
  };

  return (
    <Autocomplete
      {...defaultProps}
      id="auto-complete"
      autoComplete
      includeInputInList
      renderInput={(params) => (
        <TextField
          {...params}
          label="Rechercher votre ville"
          variant="standard"
        />
      )}
    />
  );
}
