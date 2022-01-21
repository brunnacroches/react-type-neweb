import React from "react";
import "./style.css";

interface PriceOrder {
  price: string;
}

const Price: React.FC <PriceOrder> = ({ price }) => {
  return <h1 className="price">{ price } </h1> 
}

export default Price;