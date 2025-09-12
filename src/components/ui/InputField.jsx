import React from "react";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  spellCheck = "true",
  required = false,
  error,
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label htmlFor={name} className="text-sm font-medium">
          {label}&nbsp;
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        spellCheck={spellCheck}
        className={`px-3 text-black dark:text-white py-2 border-1 rounded-sm text-sm focus:outline-none focus:ring-1
          ${error ? "border-red-500" : "border-gray-300"}
        `}
      />
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
