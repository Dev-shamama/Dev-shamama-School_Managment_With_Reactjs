import React from "react";
import { AlertComponent } from "./Alert.Styled";

const Alert = (props) => {
  return (
    props.alert && (
      <AlertComponent
        bg={props.alert.title === "Success" ? "#c8e6c9" : "#ffcdd2"}
        status={props.alert.title === "Success" ? "#00c853" : "#d50000"}
      >
        <div className="alertIcon">
          <div className="icon">{props.alert.icon}</div>
          <div className="alertMessage">
            <h3>{props.alert.title}</h3>
            <p>{props.alert.text}</p>
          </div>
        </div>
      </AlertComponent>
    )
  );
};

export default Alert;
