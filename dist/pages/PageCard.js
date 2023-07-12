import React from "react";
import { Link } from "react-router-dom";
import { ConvertTag } from "../functions/convert_tag";
export default function PageCard(_a) {
    var id = _a.id, title = _a.title, tag = _a.tag, desc = _a.desc;
    return (React.createElement(Link, { to: "/business/pages/".concat(id), className: "card pages-card" },
        React.createElement("div", { className: "image-outline" }),
        React.createElement("h3", null, title),
        React.createElement("ul", { className: "tag-container flex" }, tag.slice(0, 2).map(function (v) { return (React.createElement("li", { key: v }, ConvertTag(v))); })),
        React.createElement("p", null, desc)));
}
//# sourceMappingURL=PageCard.js.map