import React, { useState } from "react";
import ReactSlider from "react-slider";
import InputField from "./InputField";
import MultiRangeSlider from "./MultipleRangeSlider";

export default function DoubleSlider() {
  const [values, setValues] = useState([0, 100]);
  const handleChange = (newValues) => setValues(newValues);

  return (
    <div className="range-slider-container">
      <div className="slider-container">
        <MultiRangeSlider min={10} max={100} onChange={() => {}} />
      </div>
    </div>
  );
}
