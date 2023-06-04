import "./Card.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Card(_a) {
    var title = _a.title, desc = _a.desc, icon = _a.icon;
    return (React.createElement("div", { className: "flex card" },
        React.createElement("div", { className: "svg-img" },
            React.createElement(FontAwesomeIcon, { icon: icon })),
        React.createElement("h3", null, title),
        React.createElement("p", { className: "grey-color" }, desc)));
}
//# sourceMappingURL=Card.js.map