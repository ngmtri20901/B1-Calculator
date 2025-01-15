import React from 'react';
import ConvertLayout from './shared/ConvertLayout';
import { lengthUnits, convertUnits } from './shared/conversionLogic';

function LengthConverter() {
    return (
      <>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-700 text-center bg-gray-200 pt-10">Length Converter</h1>
        <ConvertLayout units={lengthUnits} convertFunction={convertUnits} />
      </>
    );
  }
  

export default LengthConverter;
