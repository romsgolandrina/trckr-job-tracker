import React from "react";
import { LuChevronDown } from "react-icons/lu";

const SelectField = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
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
      <div className="relative inline-block w-full">
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-3 appearance-none text-black dark:text-white bg-base-300 py-2 border-1 rounded-sm text-sm focus:outline-none focus:ring-1"
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
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
          <LuChevronDown size={20} />
        </div>
      </div>
    </div>
  );
};

export default SelectField;
