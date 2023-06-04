import React, { useState, useEffect } from "react";
import { size } from "../../constants/components";
import "./ButtonComponent.scss";
import ButtonComponent from "./ButtonComponent";
import FormContainer from "../Forms/FormContainter";
import { useScrollBlock } from "../../hook/useStopScroll";
export default function ButtonPopupComponent(_a) {
    var button_string = _a.button_string, _b = _a.button_size, button_size = _b === void 0 ? size.MEDIUM : _b, popUp = _a.popUp, _c = _a.className, className = _c === void 0 ? "" : _c, id = _a.id;
    var _d = useState(false), focus = _d[0], setFocus = _d[1];
    var _e = useScrollBlock(), blockScroll = _e[0], allowScroll = _e[1];
    useEffect(function () {
        focus ? blockScroll() : allowScroll();
    }, [focus]);
    var OpenPopup = function () {
        setFocus(!focus);
    };
    return (React.createElement("div", { className: "button-popup-container ".concat(className) },
        React.createElement(ButtonComponent, { onClickEvent: OpenPopup, button_size: button_size, button_string: button_string }),
        focus ? (React.createElement(FormContainer, { stateChange: setFocus, id: id }, popUp)) : null));
}
//# sourceMappingURL=ButtonPopup.js.map