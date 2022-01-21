import React from "react";
import "./style.css";

interface CancelOderProps {
  cancelorder: string;
}

const CancelOrder: React.FC <CancelOderProps> = ({ cancelorder }) => {
  return <h1 className="cancelorder">{cancelorder} </h1> 
}

export default CancelOrder;