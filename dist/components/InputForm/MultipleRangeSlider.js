import React, { useCallback, useEffect, useState, useRef, } from "react";
import classnames from "classnames";
import "./multiRangeSlider.css";
export default function MultiRangeSlider(_a) {
    var min = _a.min, max = _a.max, onChange = _a.onChange;
    var _b = useState(min), minVal = _b[0], setMinVal = _b[1];
    var _c = useState(max), maxVal = _c[0], setMaxVal = _c[1];
    var minValRef = useRef(null);
    var maxValRef = useRef(null);
    var range = useRef(null);
    // Convert to percentage
    var getPercent = useCallback(function (value) { return Math.round(((value - min) / (max - min)) * 100); }, [min, max]);
    // Set width of the range to decrease from the left side
    useEffect(function () {
        if (maxValRef.current) {
            var minPercent = getPercent(minVal);
            var maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number
            if (range.current) {
                range.current.style.left = "".concat(minPercent, "%");
                range.current.style.width = "".concat(maxPercent - minPercent, "%");
            }
        }
    }, [minVal, getPercent]);
    // Set width of the range to decrease from the right side
    useEffect(function () {
        if (minValRef.current) {
            var minPercent = getPercent(+minValRef.current.value);
            var maxPercent = getPercent(maxVal);
            if (range.current) {
                range.current.style.width = "".concat(maxPercent - minPercent, "%");
            }
        }
    }, [maxVal, getPercent]);
    // Get min and max values when their state changes
    useEffect(function () {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);
    return (React.createElement("div", { className: "container" },
        React.createElement("input", { type: "range", min: min, max: max, value: minVal, ref: minValRef, onChange: function (event) {
                var value = Math.min(+event.target.value, maxVal - 1);
                setMinVal(value);
                event.target.value = value.toString();
            }, className: classnames("thumb thumb--zindex-3", {
                "thumb--zindex-5": minVal > max - 100,
            }) }),
        React.createElement("input", { type: "range", min: min, max: max, value: maxVal, ref: maxValRef, onChange: function (event) {
                var value = Math.max(+event.target.value, minVal + 1);
                setMaxVal(value);
                event.target.value = value.toString();
            }, className: "thumb thumb--zindex-4" }),
        React.createElement("div", { className: "slider" },
            React.createElement("div", { className: "slider__track" }),
            React.createElement("div", { ref: range, className: "slider__range" }),
            React.createElement("div", { className: "slider__left-value" }, minVal),
            React.createElement("div", { className: "slider__right-value" }, maxVal))));
}
//# sourceMappingURL=MultipleRangeSlider.js.map