import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
export default function FormContainer(_a) {
    var children = _a.children, id = _a.id, stateChange = _a.stateChange;
    var CloseForm = function () {
        stateChange(false);
    };
    return (React.createElement("div", { className: "form-container", id: id },
        React.createElement("div", { id: "form-close-button", className: "flex" },
            React.createElement(FontAwesomeIcon, { icon: faXmark, onClick: CloseForm })),
        children));
}
//# sourceMappingURL=FormContainter.js.map