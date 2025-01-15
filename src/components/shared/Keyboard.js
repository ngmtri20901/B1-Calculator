import React from "react";
import { FaDeleteLeft } from "react-icons/fa6";
const Keyboard = ({ onInput, onConvert }) => {
  const buttonClass =
    "text-lg bg-gray-700 text-white p-4 rounded hover:bg-gray-800";

  return (
    <div className="grid grid-cols-3 gap-1 p-2 w-96">
      <button
        className={`col-span-2 bg-red-500 hover:bg-red-600 ${buttonClass}`}
        onClick={() => onInput("AC")}
      >
        AC
      </button>
      <button
        className={`bg-neutral-500 hover:bg-neutral-600 ${buttonClass} flex items-center justify-center text-center`}
        onClick={() => onInput("DEL")}
      >
        <FaDeleteLeft className="h-5 w-5" />
      </button>
      {["7", "8", "9", "4", "5", "6", "1", "2", "3"].map((number) => (
        <button
          key={number}
          className={buttonClass}
          onClick={() => onInput(number)}
        >
          {number}
        </button>
      ))}
      <button className={buttonClass} onClick={() => onInput("0")}>
        0
      </button>
      <button className={buttonClass} onClick={() => onInput(".")}>
        .
      </button>
      <button
        className={`${buttonClass
          .replace("bg-gray-700", "")
          .replace("hover:bg-gray-800", "")
          .trim()} bg-blue-500 hover:bg-blue-600 `}
        onClick={onConvert}
      >
        =
      </button>
    </div>
  );
};

export default Keyboard;
