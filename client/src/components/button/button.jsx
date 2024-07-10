import React from 'react';
import { Button } from "@mui/material";
import "./button.css"
function Buttonn({name, onClick }) {
  return (
    <div className='button'>
      <Button variant="outlined" onClick={onClick}>{name}</Button>
     
    </div>
  );
}
//<button onClick={onClick}>{name}</button>
export default Buttonn;
