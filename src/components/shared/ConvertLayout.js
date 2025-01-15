import React, { useState } from "react";
import Keyboard from "./Keyboard";

function ConvertLayout({ units = {}, convertFunction }) {
  const [InputValue, setInputValue] = useState("");
  const [SelectedUnit, setSelectedUnit] = useState(Object.keys(units)[0]);
  const [Output, setOutput] = useState("");
  const [rightSelectedUnit, setRightSelectedUnit] = useState(
    Object.keys(units)[0]
  );

  const handleInput = (value) => {
    if (value === "AC") {
      setInputValue("");
      setOutput("");
    } else if (value === "DEL") {
      setInputValue(InputValue.slice(0, -1));
    } else if (!isNaN(value) || value === ".") {
      setInputValue((prev) => prev + value);
    }
  };

  const handleConvert = () => {
    const result = convertFunction(
      InputValue,
      SelectedUnit,
      rightSelectedUnit,
      units
    );
    setOutput(result);
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setInputValue(value);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200">
      {/* Input và Output */}
      <div className="flex flex-col justify-center items-center md:items-start md:pl-32 w-full md:w-auto pt-32 xl:pt-0">
        <div className="mb-4">
          <label className="text-xl font-extrabold mb-3 text-gray-800">
            Input Value:
          </label>
          <div>
            <input
              type="text"
              value={InputValue}
              onChange={handleInputChange}
              className="text-xl text-center font-bold w-60 p-2 bg-neutral-200 border rounded mb-4 mt-2"
            />
          </div>
          <select
            value={SelectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
            className="text-lg p-2 bg-neutral-200 border rounded w-60 text-center"
          >
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col items-center md:items-start pt-7">
          <label className="text-xl font-extrabold mb-2 text-gray-800">
            Output Value:
          </label>
          <input
            type="text"
            value={Output}
            readOnly
            className="text-xl text-center font-bold w-60 p-2 bg-neutral-200 border rounded mb-4"
          />
          <select
            value={rightSelectedUnit}
            onChange={(e) => setRightSelectedUnit(e.target.value)}
            className="text-lg p-2 bg-neutral-200 border rounded w-60 text-center"
          >
            {Object.keys(units).map((unit) => (
              <option key={unit} value={unit}>
                {unit}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Bàn phím */}
      <div className="flex justify-center items-center w-full md:w-auto md:flex-1 mt-6 md:mt-0">
        <Keyboard onInput={handleInput} onConvert={handleConvert} />
      </div>
    </div>
  );
}

export default ConvertLayout;
