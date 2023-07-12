import React from "react";
import { Button_Link } from "@/interfaces/app_interfaces";
import clsx from "clsx";
import { size } from "../../constants/components";
import "./ButtonComponent.scss";
import { Link } from "react-router-dom";

export default function ButtonComponentLink({
  button_string,
  button_size = size.MEDIUM,
  className = "",
  to = "./",
  onClickEvent = () => {},
}: Button_Link) {
  return (
    <Link
      to={to}
      className={clsx(
        "btn deep-blue-bg white-clrs",
        button_size === size.LARGE && "lg",
        button_size === size.MEDIUM && "md",
        button_size === size.SMALL && "sm",
        button_size === size.NONE && "tertiary",
        className
      )}
      typeof="button"
      onClick={onClickEvent}
    >
      {button_string}
    </Link>
  );
}
