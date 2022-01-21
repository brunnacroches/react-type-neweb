import React from "react";
import "./style.css";

interface ButtonProps {
  button: string;
}

const Button: React.FC <ButtonProps> = ({ button }) => {
  return <h1 className="button">{button} </h1> 
}

export default Button;