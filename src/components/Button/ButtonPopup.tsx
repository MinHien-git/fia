import React, { useState, useEffect } from "react";
import { ButtonPopup } from "@/interfaces/app_interfaces";
import clsx from "clsx";
import { size } from "../../constants/components";
import "./ButtonComponent.scss";
import ButtonComponent from "./ButtonComponent";
import FormContainer from "../Forms/FormContainter";
import PostProjectForm from "../Forms/PostProjectForm";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
export default function ButtonPopupComponent({
  button_string,
  button_size = size.MEDIUM,
  className = "",
  id,
}: ButtonPopup) {
  const [focus, setFocus] = useState(false);

  useEffect(() => {
    focus ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
  }, [focus]);

  const OpenPopup = () => {
    setFocus(!focus);
  };
  return (
    <div className={`button-popup-container ${className}`}>
      <ButtonComponent
        onClickEvent={OpenPopup}
        button_size={button_size}
        button_string={button_string}
      ></ButtonComponent>
      {focus ? (
        <FormContainer stateChange={setFocus} id={id}>
          <PostProjectForm closeForm={() => setFocus(false)} />
        </FormContainer>
      ) : null}
    </div>
  );
}
