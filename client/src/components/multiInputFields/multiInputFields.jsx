import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import "./multiInputFields.css";

function MultiInputFields({ names, onChange }) {
  const [values, setValues] = useState(
    names.reduce((acc, name) => {
      acc[name] = "";
      return acc;
    }, {})
  );
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (name, value) => {
    const newValues = {
      ...values,
      [name]: value,
    };
    setValues(newValues);
    onChange(newValues);
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="form">
      {names.map((name, index) => (
        <div key={index} className="datos">
          <TextField
            id={name}
            variant="outlined"
            label={name}
            type={name === "Contraseña" && !showPassword ? "password" : "text"}
            value={values[name]}
            onChange={(event) => handleChange(name, event.target.value)}
            InputProps={{
              endAdornment: name === "Contraseña" ? (
                <InputAdornment position="end">
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ) : null,
            }}
          />
        </div>
      ))}
    </div>
  );
}

export default MultiInputFields;
