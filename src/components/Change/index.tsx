import React from "react";
import "./style.css";

interface ChangeProps {
  change: string;
}

const Change: React.FC <ChangeProps> = ({ change }) => {
  return <h1 className="change">{change} </h1> 
}

export default Change;