import clsx from "clsx";
import React from "react";
import "./input.scss";
export default function TextAreaField(_a) {
    var id = _a.id, label = _a.label, classNames = _a.classNames, onChange = _a.onChange;
    return (React.createElement("div", { className: clsx("grid text-area-field", classNames) },
        React.createElement("label", { htmlFor: id }, label),
        React.createElement("textarea", { id: id, name: label, onChange: onChange })));
}
//# sourceMappingURL=TextAreaField.js.map