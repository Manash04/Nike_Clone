import React from "react";

const Button = ({ label, iconURL }) => {
  return (
    <button className="flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-red-500 rounded-full text-white">
      {label}
      {iconURL && <img
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full h-5 w-5 "
      ></img>}
    </button>
  );
};

export default Button;
