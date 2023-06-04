import React, { useState } from "react";
import InputField from "./InputField";
import MultiRangeSlider from "./MultipleRangeSlider";
export default function DoubleSlider() {
    var _a = useState([0, 100]), values = _a[0], setValues = _a[1];
    var handleChange = function (newValues) { return setValues(newValues); };
    return (React.createElement("div", { className: "range-slider-container" },
        React.createElement(MultiRangeSlider, { min: 10, max: 100, onChange: function () { } }),
        React.createElement(InputField, { id: "min", label: "min" }),
        React.createElement(InputField, { id: "max", label: "max" })));
}
//# sourceMappingURL=DoubleSlider.js.map