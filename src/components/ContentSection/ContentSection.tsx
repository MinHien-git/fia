import { Content } from "@/interfaces/app_interfaces";
import React from "react";
import "./ContentSection.scss";

export default function ContentSection({ children, className = "" }: Content) {
  return <main className={`primary-content ${className}`}>{children}</main>;
}
