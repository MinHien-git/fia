import React from "react";
import "./tag.scss";
import { Tags } from "@/interfaces/app_interfaces";

export default function Tag({
  tag_value,
  tag_id,
  name,
  onClickEvent,
  isChecked = false,
}: Tags) {
  return (
    <li className="tag">
      <input
        className="absolute"
        type="checkbox"
        id={tag_id}
        value={tag_value}
        name={name}
      />
      <label className="tag-label" htmlFor={tag_id} onClick={onClickEvent}>
        {tag_value}
      </label>
    </li>
  );
}
