import React from "react";
import ButtonSubmitForm from "../Button/ButtonSumitForm";
export default function ContactAgency() {
    return (React.createElement("form", { id: "contact-form", className: "form-section flex relative" },
        React.createElement("div", { className: "section-container flex" },
            React.createElement("h3", null, "Let us know what you need"),
            React.createElement("div", { className: "contact-form-information flex" },
                React.createElement("div", { className: "flex" },
                    React.createElement("label", null, "First name"),
                    React.createElement("input", { type: "text", placeholder: "First name" })),
                React.createElement("div", { className: "flex" },
                    React.createElement("label", null, "Last name"),
                    React.createElement("input", { type: "text", placeholder: "Last name" })),
                React.createElement("div", { className: "flex" },
                    React.createElement("label", null, "Email"),
                    React.createElement("input", { type: "email", placeholder: "Enter your Email" })),
                React.createElement("div", { className: "flex" },
                    React.createElement("label", null, "Your message"),
                    React.createElement("textarea", { placeholder: "Enter your message" }))),
            React.createElement(ButtonSubmitForm, { button_string: "Submit" }))));
}
//# sourceMappingURL=ContactAgency.js.map