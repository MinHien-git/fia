import React from "react";
import clsx from "clsx";
import { size } from "../../constants/components";
import "./ButtonComponent.scss";
export default function ButtonSubmitForm(_a) {
    var button_string = _a.button_string, _b = _a.button_size, button_size = _b === void 0 ? size.MEDIUM : _b, submitEvent = _a.submitEvent;
    return (React.createElement("div", { className: "button-submit" },
        React.createElement("button", { className: clsx("btn deep-blue-bg white-clrs", button_size === size.LARGE && "lg", button_size === size.MEDIUM && "md", button_size === size.SMALL && "sm", button_size === size.NONE && "tertiary"), typeof: "button", type: "submit", onSubmit: submitEvent }, button_string)));
}
//# sourceMappingURL=ButtonSumitForm.js.map