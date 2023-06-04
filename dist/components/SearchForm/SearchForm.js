import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchForm.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SearchForm() {
    return (React.createElement("form", { className: "search-form flex relative" },
        React.createElement("input", { id: "search", type: "text" }),
        React.createElement("label", { htmlFor: "search" }, "What service?"),
        React.createElement("button", null,
            React.createElement(FontAwesomeIcon, { icon: faSearch }))));
}
//# sourceMappingURL=SearchForm.js.map