import React from "react";
import ConvertLayout from "./shared/ConvertLayout";
import { timeUnits, convertUnits } from "./shared/conversionLogic";

function TimeConverter() {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 text-center bg-gray-200 pt-10">
        Time Converter
      </h1>
      <ConvertLayout units={timeUnits} convertFunction={convertUnits} />;
    </>
  );
}

export default TimeConverter;
