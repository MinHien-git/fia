import { ConvertTag } from "../../functions/convert_tag";
import React from "react";
import { Link } from "react-router-dom";
export default function AgencyCard(_a) {
    var title = _a.title, tag = _a.tag, desc = _a.desc, id = _a.id;
    return (React.createElement("li", { className: "card agency-card" },
        React.createElement(Link, { to: "/agency/".concat(id), className: "flex" },
            React.createElement("div", { className: "image-outline" }),
            React.createElement("h3", null, title),
            React.createElement("ul", { className: "tag-container flex" }, tag.map(function (v) { return (React.createElement("li", { key: v }, ConvertTag(v))); })),
            React.createElement("p", null, desc))));
}
//# sourceMappingURL=AgencyCard.js.map