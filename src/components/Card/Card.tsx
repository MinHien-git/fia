import "./Card.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Card_Interface } from "@/interfaces/app_interfaces";

export default function Card({ title, desc, icon }: Card_Interface) {
  return (
    <div className="flex card">
      <div className="svg-img">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h3>{title}</h3>
      <p className="grey-color">{desc}</p>
    </div>
  );
}
