import "./Card.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export default function Card() {
    return (React.createElement("div", { className: "flex card" },
        React.createElement(FontAwesomeIcon, { icon: faSearch }),
        React.createElement("h3", null, "Find you a Agency fit for your need."),
        React.createElement("p", { className: "grey-color" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at sapien eu ipsum ornare sollicitudin vel nec nisl. Nullam ut lacus porttitor, vestibulum ipsum eu, porta libero. Aliquam erat volutpat. Morbi ac tincidunt orci.")));
}
//# sourceMappingURL=Card.js.map