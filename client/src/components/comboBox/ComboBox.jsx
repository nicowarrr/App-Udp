import React from "react";
import { Autocomplete, TextField } from "@mui/material";
import "./ComboBox.css";

function ComboBox({ options, onChange }) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      className="Combo-box"
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label="Selecciona tu Rol" />
      )}
      onChange={(event, value) => onChange(value)}
    />
  );
}

export default ComboBox;
