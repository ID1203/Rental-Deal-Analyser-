import React from "react";

const MoneyInput = ({ name, value, onChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-lg">
        {name}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500 sm:text-sm">£</span>
        </div>
        <input
          type="Number"
          name={name}
          value={value}
          onChange={onChange}
          id={name}
          className="pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-lg leading-none text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default MoneyInput;
