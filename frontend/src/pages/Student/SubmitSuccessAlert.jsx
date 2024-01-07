import React from "react";
import { SuccessAlert } from "./StyleComponent/SubmitSuccessAlert.styled";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const SubmitSuccessAlert = () => {
  return (
    <SuccessAlert>
        <div className="icon">
          <IoCheckmarkCircleOutline />
        </div>
        <div className="detail">
          <h1>Paper Submitted Successfully</h1>
          <Link to="/student/">Go Dashboard</Link>
        </div>
    </SuccessAlert>
  );
};

export default SubmitSuccessAlert;
