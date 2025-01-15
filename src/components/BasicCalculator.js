// src/components/BasicCalculator.js
import React, { useState } from 'react';
import axios from "axios";


export default function BasicCalculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (result) {
      setInput(result + value);
      setResult("");  // Xóa kết quả cũ
    } else {
      setInput(input + value);
    }
  };

  const handleEqual = () => {
    try {
      // Tính toán biểu thức bằng eval
      const calculatedResult = eval(input); 
      setResult(calculatedResult); // Hiển thị kết quả
    } catch (error) {
      setResult("Error"); // Nếu lỗi, hiển thị "Error"
    }
  };
  


  const handleClear = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        {/* Display */}
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full bg-gray-200 text-right text-2xl p-2 rounded-t-md"
          />
          <div
            className="w-full bg-gray-100 text-right text-xl p-2 rounded-b-md text-gray-500"
          >
            {result}
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {/* Numbers and Operators */}
          {[
            "7",
            "8",
            "9",
            "/",
            "4",
            "5",
            "6",
            "*",
            "1",
            "2",
            "3",
            "-",
            "C",
            "0",
            "=",
            "+",
          ].map((item) => (
            <button
              key={item}
              onClick={
                item === "C"
                  ? handleClear
                  : item === "="
                  ? handleEqual
                  : () => handleClick(item)
              }
              className={`text-white text-lg font-bold p-4 rounded ${
                ["+", "-", "*", "/", "="].includes(item)
                  ? "bg-blue-500 hover:bg-blue-600"
                  : item === "C"
                  ? "bg-red-500 hover:bg-red-600"
                  : "bg-gray-700 hover:bg-gray-800"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
