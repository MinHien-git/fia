import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function FormContainer({ children, id, stateChange }) {
  const CloseForm = () => {
    stateChange(false);
  };
  return (
    <div className="form-container" id={id}>
      <div id="form-close-button" className="flex">
        <FontAwesomeIcon icon={faXmark} onClick={CloseForm} />
      </div>
      {children}
    </div>
  );
}
