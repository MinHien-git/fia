import React, { useState } from "react";
import MultiRangeSlider from "./MultipleRangeSlider";
export default function DoubleSlider() {
    var _a = useState([0, 100]), values = _a[0], setValues = _a[1];
    var handleChange = function (newValues) { return setValues(newValues); };
    return (React.createElement("div", { className: "range-slider-container" },
        React.createElement("div", { className: "slider-container" },
            React.createElement(MultiRangeSlider, { min: 10, max: 100, onChange: function () { } }))));
}
//# sourceMappingURL=DoubleSlider.js.map