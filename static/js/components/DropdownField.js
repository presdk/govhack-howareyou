import React from "react";

const DropdownField = ({ title, options }) => {
  return (
    <div className="field">
      <div className="control">
          <label style={{marginRight: '1em'}} className="label is-inline">{title}</label>
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
