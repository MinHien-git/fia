import React from "react";
import "./tag.scss";
export default function Tag(_a) {
    var tag_value = _a.tag_value, tag_id = _a.tag_id, name = _a.name, onClickEvent = _a.onClickEvent, _b = _a.isChecked, isChecked = _b === void 0 ? false : _b;
    return (React.createElement("li", { className: "tag" },
        React.createElement("input", { className: "absolute", type: "checkbox", id: tag_id, value: tag_value, name: name }),
        React.createElement("label", { className: "tag-label", htmlFor: tag_id, onClick: onClickEvent }, tag_value)));
}
//# sourceMappingURL=tag.js.map