import React from "react";
import { Button } from "@/interfaces/app_interfaces";
import clsx from "clsx";
import { size } from "../../constants/components";
import "./ButtonComponent.scss";

export default function ButtonComponentLink({
  button_string,
  button_size = size.MEDIUM,
  className,
  onClickEvent = () => {},
}: Button) {
  return (
    <button
      className={clsx(
        "btn deep-blue-bg white-clrs",
        className,
        button_size === size.LARGE && "lg",
        button_size === size.MEDIUM && "md",
        button_size === size.SMALL && "sm",
        button_size === size.NONE && "tertiary"
      )}
      typeof="button"
      onClick={onClickEvent}
    >
      {button_string}
    </button>
  );
}
