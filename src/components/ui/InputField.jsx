import React from "react";

const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  spellCheck = true,
  required = false,
  error,
  iconLeft: IconLeft,
  iconRight: IconRight,
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {/* Label */}
      {label && (
        <label
          htmlFor={name}
          className="text-sm font-medium text-black dark:text-white"
        >
          {label}&nbsp;
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Input Wrapper */}
      <div className="relative w-full">
        {/* Left Icon */}
        {IconLeft && (
          <span className="absolute inset-y-0 left-3 flex items-center text-gray-500">
            <IconLeft size={16} />
          </span>
        )}

        {/* Input */}
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          spellCheck={spellCheck}
          className={`w-full bg-base-300 text-black dark:text-white border rounded-sm text-sm py-2 px-3
            focus:outline-none focus:ring-1
            ${error ? "border-red-500" : "border-base-300"}
            ${IconLeft ? "pl-9" : ""}
            ${IconRight ? "pr-9" : ""}
          `}
        />

        {/* Right Icon */}
        {IconRight && (
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            <IconRight size={16} />
          </span>
        )}
      </div>

      {/* Error Message */}
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
};

export default InputField;
