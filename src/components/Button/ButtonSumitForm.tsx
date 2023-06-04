import React, { useState, useEffect } from "react";
import { ButtonPopup, ButtonSubmit } from "@/interfaces/app_interfaces";
import clsx from "clsx";
import { size } from "../../constants/components";
import "./ButtonComponent.scss";
import ButtonComponent from "./ButtonComponent";
import FormContainer from "../Forms/FormContainter";
import { useScrollBlock } from "../../hook/useStopScroll";

export default function ButtonSubmitForm({
  button_string,
  button_size = size.MEDIUM,
  submitEvent,
}: ButtonSubmit) {
  return (
    <div className="button-submit">
      <button
        className={clsx(
          "btn deep-blue-bg white-clrs",
          button_size === size.LARGE && "lg",
          button_size === size.MEDIUM && "md",
          button_size === size.SMALL && "sm",
          button_size === size.NONE && "tertiary"
        )}
        typeof="button"
        type="submit"
        onSubmit={submitEvent}
      >
        {button_string}
      </button>
    </div>
  );
}
