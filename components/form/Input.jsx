import React, { useEffect, useState } from "react";

const Input = (props) => {
  const { type, placeholder, ...inputProps } = props;

  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    console.log("🚀 ~ Input ~ hasValue:", hasValue);
  }, [hasValue]);

  const handleInputChange = (e) => {
    setHasValue(e.target.value.length > 0);
  };

  return (
    <div className="relative w-full">
      <input
        type={type}
        id="input"
        className="peer p-3 pt-5 pb-2 border border-primary focus:outline-none focus:ring-0  w-full"
        placeholder=" "
        required
        {...inputProps}
        onChange={handleInputChange}
      />

      <label
        htmlFor="input"
        className={`absolute left-3 top-1/2 transform 
        -translate-y-1/2 text-gray-500 transition-all 
          peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm
          peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500 bg-white 
        
          `}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
