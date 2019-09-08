import React from "react";

const DropdownField = ({ title, options }) => {
  return (
    <div>
      <p style={{marginBottom: '1.5em'}}>
        <label className="label">
          {title}
        </label>
        <div className="select">
          <select>
            {options.map(option => (
              <option>{option}</option>
            ))}
          </select>
        </div>
      </p>
    </div>
  );
};

export default DropdownField;
