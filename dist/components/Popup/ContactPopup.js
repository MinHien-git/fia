import React, { useState, useContext } from "react";
import Popup from "./Popup";
import InputField from "../InputForm/InputField";
import clsx from "clsx";
import ButtonComponent from "../Button/ButtonComponentLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import TextAreaField from "../InputForm/TextAreaField";
import { AuthContext } from "../../context/authenticateContext";
export default function ContactPopup(_a) {
    var _b = _a.toggle, toggle = _b === void 0 ? false : _b, close = _a.close;
    var auth = useContext(AuthContext).auth;
    var _c = useState(false), guest = _c[0], setGuest = _c[1];
    return (React.createElement(Popup, { className: clsx(toggle && "active", "contact-popup") },
        React.createElement("div", { className: "service-popup-container" },
            React.createElement("div", { className: "service-popup" }, auth ? (React.createElement(React.Fragment, null,
                " ",
                React.createElement("h3", null, "Contact Agency"),
                React.createElement(InputField, { type: "text", id: "brief-description", label: "brief description" }),
                React.createElement(TextAreaField, { id: "project-description", label: "project-description" }),
                React.createElement(ButtonComponent, { button_string: "Contact Agency" }))) : (React.createElement(React.Fragment, null, !guest ? (React.createElement(React.Fragment, null,
                React.createElement("h3", null, "You must login first"),
                React.createElement(InputField, { type: "text", id: "email", label: "email" }),
                React.createElement(InputField, { type: "password", id: "password", label: "password" }),
                React.createElement(ButtonComponent, { button_string: "Next" }),
                React.createElement("p", { className: "register-section" },
                    "Contact as ",
                    React.createElement("span", { onClick: function () { return setGuest(true); } }, "guest")))) : (React.createElement(React.Fragment, null,
                React.createElement("h3", null, "Tell us some information"),
                React.createElement(InputField, { type: "text", id: "guess-name", label: "name" }),
                React.createElement(InputField, { type: "text", id: "guess-email", label: "email" }),
                React.createElement(ButtonComponent, { button_string: "Next" }),
                React.createElement("p", { className: "register-section" },
                    "Have an account?",
                    " ",
                    React.createElement("span", { onClick: function () { return setGuest(false); } }, "login"))))))),
            React.createElement("div", { className: "close-button" },
                React.createElement(FontAwesomeIcon, { icon: faXmark, onClick: close })))));
}
//# sourceMappingURL=ContactPopup.js.map