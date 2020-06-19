import React from "react";

const Radio = ({ selected, name, value, label, onChange }) => (
  <label className="radio-label">
    <input
      type="radio"
      name={name}
      value={value}
      checked={selected === value}
      onChange={onChange}
    />{" "}
    {label}
  </label>
);

export default Radio;
