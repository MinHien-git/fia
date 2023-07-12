import { AgencyCard_Interface } from "@/interfaces/app_interfaces";
import React from "react";
import { Link } from "react-router-dom";
import { ConvertTag } from "../functions/convert_tag";

export default function PageCard({
  id,
  title,
  tag,
  desc,
}: AgencyCard_Interface) {
  return (
    <Link to={`/business/pages/${id}`} className="card pages-card">
      <div className="image-outline"></div>

      <h3>{title}</h3>
      <ul className="tag-container flex">
        {tag.slice(0, 2).map((v) => (
          <li key={v}>{ConvertTag(v)}</li>
        ))}
      </ul>
      <p>{desc}</p>
    </Link>
  );
}
