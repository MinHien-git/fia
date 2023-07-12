import React from "react";
import clsx from "clsx";
import { size } from "../../constants/components";
import "./ButtonComponent.scss";
export default function ButtonComponentLink(_a) {
    var button_string = _a.button_string, _b = _a.button_size, button_size = _b === void 0 ? size.MEDIUM : _b, className = _a.className, _c = _a.onClickEvent, onClickEvent = _c === void 0 ? function () { } : _c;
    return (React.createElement("button", { className: clsx("btn deep-blue-bg white-clrs", className, button_size === size.LARGE && "lg", button_size === size.MEDIUM && "md", button_size === size.SMALL && "sm", button_size === size.NONE && "tertiary"), typeof: "button", onClick: onClickEvent }, button_string));
}
//# sourceMappingURL=ButtonComponent.js.map