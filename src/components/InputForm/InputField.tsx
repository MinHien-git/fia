import { InputField_Interface } from "../../interfaces/app_interfaces";
import React from "react";
import "./input.scss";

export default function InputField({
  type = "text",
  id,
  label,
  value,
  formEvent,
}: InputField_Interface) {
  return (
    <div>
      <div className="grid input-container">
        <input
          type={type}
          id={id}
          name={id}
          placeholder={label}
          autoComplete="on"
          onChange={formEvent}
          required
          value={value}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    </div>
  );
}
