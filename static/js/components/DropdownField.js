import React from "react";

const DropdownField = ({ title, options }) => {
  return (
    <div className="field">
      <label className="label is-inline">{title}</label>
      <div className="control">
        <div className="select">
          <select>
            {options.map(option => (
              <option>{option}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownField;