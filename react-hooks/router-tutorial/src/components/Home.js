import React from "react";
import { useNavigate } from "react-router-dom";
import Userdetails from "./Userdetails";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>HomePage</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place order
      </button>
    </>
  );
};

export default Home;
