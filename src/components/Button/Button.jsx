import React from 'react';
import "./button.css";
import { useState } from 'react';

function Button(props) {
  const [colorState, setColorState] = useState (
    { backgroundColor: props.color || "ligthblue"}
  );  

function handleClick() {
  setColorState ({backgroundColor:"#cc76cc"});
}

return (
  <button onClick={props.onClick} style= {colorState} className={`btn ${props.type || "" }`}>
    {props.children}
  </button>
);
}
export default Button;