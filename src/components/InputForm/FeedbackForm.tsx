import React, { useState } from "react";
import InputField from "./InputField";
import ButtonComponent from "../Button/ButtonComponent";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "../Popup/Popup";
import clsx from "clsx";
import { Popup_Interface } from "../../interfaces/app_interfaces";

export default function FeedbackForm({ toggle = false }: Popup_Interface) {
  const [feedback, setFeedback] = useState<boolean>(toggle);
  return (
    <Popup className={clsx(feedback && "active")}>
      <form className="service-popup-container">
        <div className="service-popup">
          <h3>Write feedback</h3>
          <InputField type="text" id="service-name" label="service name" />
          <InputField type="number" id="service-price" label="service price" />
          <ButtonComponent
            button_string="Add Service"
            // onClickEvent={ChangeAddService}
          />
        </div>
        <div className="close-button">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              setFeedback(false);
            }}
          />
        </div>
      </form>
    </Popup>
  );
}
