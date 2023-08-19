import React from "react";
import { useParams } from "react-router-dom";

const Userdetails = () => {
  const params = useParams();
  const userId = params.userId;
  return <div>Userdetails {userId}</div>;
};

export default Userdetails;
