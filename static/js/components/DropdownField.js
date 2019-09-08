import React from "react";

const DropdownField = ({ title, options }) => {
  return (
    <div className="field">
      <p>
        <label className="label is-inline">{title}</label>
      </p>
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
