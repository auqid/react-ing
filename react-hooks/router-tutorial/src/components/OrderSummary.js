import React from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = () => {
  const navigate = useNavigate();
  return (
    <div>
      Order completed
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
};

export default OrderSummary;
