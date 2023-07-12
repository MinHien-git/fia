import React, { useState } from "react";
import InputField from "./InputField";
import ButtonComponent from "../Button/ButtonComponent";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Popup from "../Popup/Popup";
import clsx from "clsx";
export default function FeedbackForm(_a) {
    var _b = _a.toggle, toggle = _b === void 0 ? false : _b;
    var _c = useState(toggle), feedback = _c[0], setFeedback = _c[1];
    return (React.createElement(Popup, { className: clsx(feedback && "active") },
        React.createElement("form", { className: "service-popup-container" },
            React.createElement("div", { className: "service-popup" },
                React.createElement("h3", null, "Write feedback"),
                React.createElement(InputField, { type: "text", id: "service-name", label: "service name" }),
                React.createElement(InputField, { type: "number", id: "service-price", label: "service price" }),
                React.createElement(ButtonComponent, { button_string: "Add Service" })),
            React.createElement("div", { className: "close-button" },
                React.createElement(FontAwesomeIcon, { icon: faXmark, onClick: function () {
                        setFeedback(false);
                    } })))));
}
//# sourceMappingURL=FeedbackForm.js.map