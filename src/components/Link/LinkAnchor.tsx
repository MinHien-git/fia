import React from "react";
import { Link } from "@/interfaces/app_interfaces";
import clsx from "clsx";
import { size } from "@/constants/components";

export default function Link({ button_string, href }: Link) {
  return (
    <a className={clsx("btn-tertiary")} href={href}>
      {button_string}
    </a>
  );
}
