import { Sec } from "@/interfaces/app_interfaces";
import React from "react";
import "./Section.scss";

export default function Section({ children, className }: Sec) {
  return (
    <section className={"section-content " + className}>{children}</section>
  );
}
