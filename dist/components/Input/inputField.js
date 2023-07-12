import React from "react";
import "input.scss";
export default function InputField(_a) {
    var _b = _a.type, type = _b === void 0 ? "text" : _b, id = _a.id, label = _a.label, formEvent = _a.formEvent;
    return (React.createElement("div", null,
        React.createElement("div", { className: "grid input-container" },
            React.createElement("input", { type: type, id: id, name: id, placeholder: label, autoComplete: "on", onChange: formEvent }),
            React.createElement("label", { htmlFor: id },
                "label",
                label))));
}
//# sourceMappingURL=inputField.js.map