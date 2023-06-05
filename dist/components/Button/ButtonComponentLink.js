import React from "react";
import clsx from "clsx";
import { size } from "../../constants/components";
import "./ButtonComponent.scss";
import { Link } from "react-router-dom";
export default function ButtonComponentLink(_a) {
    var button_string = _a.button_string, _b = _a.button_size, button_size = _b === void 0 ? size.MEDIUM : _b, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.to, to = _d === void 0 ? "./" : _d, _e = _a.onClickEvent, onClickEvent = _e === void 0 ? function () { } : _e;
    return (React.createElement(Link, { to: to, className: clsx("btn deep-blue-bg white-clrs", button_size === size.LARGE && "lg", button_size === size.MEDIUM && "md", button_size === size.SMALL && "sm", button_size === size.NONE && "tertiary", className), typeof: "button", onClick: onClickEvent }, button_string));
}
//# sourceMappingURL=ButtonComponentLink.js.map