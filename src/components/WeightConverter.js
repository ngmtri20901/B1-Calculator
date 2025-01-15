// src/components/WeightConverter.js
import React, { useState } from "react";
import ConvertLayout from "./shared/ConvertLayout";
import { weightUnits, convertUnits } from "./shared/conversionLogic";

function WeightConverter() {
  return (
    <>
      {" "}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 text-center bg-gray-200 pt-10">
        Weight Converter
      </h1>{" "}
      <ConvertLayout units={weightUnits} convertFunction={convertUnits} />
    </>
  );
}

export default WeightConverter;
