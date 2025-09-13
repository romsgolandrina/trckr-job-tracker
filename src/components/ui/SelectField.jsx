import React from "react";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-black dark:text-white"
        >
          {label}&nbsp;
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <select
        name={name}
        value={value}
        onChange={onChange}
        className={`px-3 text-black dark:text-white bg-base-300 py-2 border-1 rounded-sm text-sm focus:outline-none focus:ring-1
          ${error ? "border-red-500" : "border-base-300"}
        `}
      >
        <option value="" disabled>
          Select {label?.toLowerCase() || "an option"}
        </option>
        {options.map((option) => (
          <option key={option} value={option} className="text-black">
            {option}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default SelectField;
