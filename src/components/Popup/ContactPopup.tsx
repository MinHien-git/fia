import React, { useState, useContext } from "react";
import Popup from "./Popup";
import InputField from "../InputForm/InputField";
import clsx from "clsx";
import ButtonComponent from "../Button/ButtonComponentLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  Popup_Interface,
  AuthContextType,
} from "../../interfaces/app_interfaces";
import TextAreaField from "../InputForm/TextAreaField";
import { AuthContext } from "../../context/authenticateContext";

export default function ContactPopup({
  toggle = false,
  close,
}: Popup_Interface) {
  const { auth } = useContext(AuthContext) as AuthContextType;
  const [guest, setGuest] = useState(false);
  const [form, setForm] = useState();
  const submitForm = () => {
    
  };
  
  return (
    <Popup className={clsx(toggle && "active", "contact-popup")}>
      <div className="service-popup-container">
        <div className="service-popup">
          {auth ? (
            <>
              {" "}
              <h3>Contact Agency</h3>
              <InputField
                type="text"
                id="brief-description"
                label="brief description"
              />
              <TextAreaField
                id="project-description"
                label="project-description"
              />
              <ButtonComponent
                button_string="Contact Agency"
                onClickEvent={submitForm}
              />
            </>
          ) : (
            <>
              {!guest ? (
                <>
                  <h3>You must login first</h3>
                  <InputField type="text" id="email" label="email" />
                  <InputField type="password" id="password" label="password" />
                  <ButtonComponent
                    button_string="Next"
                    // onClickEvent={ChangeAddService}
                  />
                  <p className="register-section">
                    Contact as <span onClick={() => setGuest(true)}>guest</span>
                  </p>
                </>
              ) : (
                <>
                  <h3>Tell us some information</h3>
                  <InputField type="text" id="guess-name" label="name" />
                  <InputField type="text" id="guess-email" label="email" />
                  <ButtonComponent
                    button_string="Next"
                    // onClickEvent={ChangeAddService}
                  />
                  <p className="register-section">
                    Have an account?{" "}
                    <span onClick={() => setGuest(false)}>login</span>
                  </p>
                </>
              )}
            </>
          )}
        </div>
        <div className="close-button">
          <FontAwesomeIcon icon={faXmark} onClick={close} />
        </div>
      </div>
    </Popup>
  );
}
