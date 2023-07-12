import clsx from "clsx";
import { TextAreaField_Interface } from "../../interfaces/app_interfaces";
import React from "react";
import classNames from "classnames";
import "./input.scss";
export default function TextAreaField({
  id,
  label,
  classNames,
  onChange,
}: TextAreaField_Interface) {
  return (
    <div className={clsx("grid text-area-field", classNames)}>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} name={label} onChange={onChange}></textarea>
    </div>
  );
}
