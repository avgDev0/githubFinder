import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import AlertContext from "../../../context/alert/alertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <div className="alert alert-ligth">
        <FontAwesomeIcon icon={faInfoCircle} /> {alert}
      </div>
    )
  );
};

export default Alert;
