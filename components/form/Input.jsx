import React, { useEffect, useState } from "react";

const Input = (props) => {
  const { type, errorMessage, touched, placeholder, ...inputProps } = props;

  const [hasValue, setHasValue] = useState(false);

  useEffect(() => {
    console.log("🚀 ~ Input ~ hasValue:", hasValue);
  }, [hasValue]);

  const handleInputChange = (e) => {
    setHasValue(e.target.value.length > 0);
  };

  return (
    // <div className="relative w-full">
    //   <input
    //     type={type}
    //     id="input"
    //     className="peer p-3 pt-5 pb-2 border border-primary focus:outline-none focus:ring-0  w-full"
    //     placeholder=" "
    //     required
    //     {...inputProps}
    //     // onChange={handleInputChange}
    //   />

    //   <label
    //     htmlFor="input"
    //     className={`absolute left-3 top-1/2 transform
    //     -translate-y-1/2 text-gray-500 transition-all
    //       peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm
    //       peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-500 bg-white

    //       `}
    //   >
    //     {placeholder}
    //   </label>
    // </div>

    <div className="w-full">
      <label className="relative block cursor-text w-full">
        <input
          type={type}
          className={`h-14 w-full border outline-none px-4 peer 
          ${type !== "datetime-local" && "pt-2"}
          ${touched && errorMessage ? "border-red-500" : "border-primary"}
          
          `}
          required
          {...inputProps}
        />
        {type !== "datetime-local" && (
          <span className="absolute top-0 left-0 px-4 text-sm flex items-center h-full peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all">
            {placeholder}
          </span>
        )}
      </label>
      {touched && <span className="text-xs text-danger">{errorMessage}</span>}
    </div>
  );
};

export default Input;
