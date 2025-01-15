// src/components/DataConverter.js
import React, { useState } from "react";
import ConvertLayout from "./shared/ConvertLayout";
import { dataUnits, convertUnits } from "./shared/conversionLogic";

function DataConverter() {
  return (
    <div>
      {" "}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 text-center bg-gray-200 pt-10">
        Data Converter
      </h1>{" "}
      <ConvertLayout units={dataUnits} convertFunction={convertUnits} />
    </div>
  );
}
export default DataConverter;
