import { ConvertTag } from "../../functions/convert_tag";
import { AgencyCard_Interface } from "../../interfaces/app_interfaces";
import React from "react";
import { Link } from "react-router-dom";
export default function AgencyCard({
  title,
  tag,
  desc,
  id,
}: AgencyCard_Interface) {
  return (
    <li className="card agency-card">
      <Link to={`/agency/${id}`} className="flex">
        <div className="image-outline"></div>

        <h3>{title}</h3>
        <ul className="tag-container flex">
          {tag.map((v) => (
            <li>{ConvertTag(v)}</li>
          ))}
          {/* <li>Freelance</li>
          <li>Advertise</li> */}
        </ul>
        <p>{desc}</p>
      </Link>
    </li>
  );
}
