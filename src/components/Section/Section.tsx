import { Sec_Interface } from "@/interfaces/app_interfaces";
import React from "react";
import "./Section.scss";

export default function Section({ children, className, id }: Sec_Interface) {
  return (
    <section className={"section-content " + className} id={id}>
      {children}
    </section>
  );
}
