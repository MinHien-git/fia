import React from "react";
import "./Popup.scss";

export default function Popup({ children, className }) {
  return <div className={className + " popup"}>{children}</div>;
}
