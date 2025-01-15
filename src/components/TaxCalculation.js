import React, { useState } from "react";
import Keyboard from "./shared/Keyboard";
import { HiOutlineReceiptTax } from "react-icons/hi";

function TaxPercentage() {
  const [value, setValue] = useState("");
  const [percentage, setPercentage] = useState("");
  const [discount, setDiscount] = useState("");
  const [activeInput, setActiveInput] = useState("value");
  const [result, setResult] = useState({
    final: 0,
    percentageValue: 0,
    discountValue: 0,
  });

  const handleInput = (input) => {
    const currentValue = activeInput === "value"
    ? value
    : activeInput === "percentage"
    ? percentage
    : discount;
  
    let newValue = currentValue;

    if (input === "AC") {
      setValue("");
      setPercentage("");
      setDiscount("");
      setResult({ final: 0, percentageValue: 0, discountValue: 0 });
      return;
    }

    if (input === "DEL") {
      newValue = currentValue.slice(0, -1);
    } else if (input === "." && !currentValue.includes(".")) {
      newValue = currentValue + input;
    } else if (input !== ".") {
      newValue = currentValue + input;
    }

    if (activeInput === "value") {
      setValue(newValue);
    } else if (activeInput === "percentage") {
      setPercentage(newValue);
    } else {
      if (parseFloat(newValue) > 100) {
        newValue = "100";
      }
      setDiscount(newValue);
    }
  };
  const calculate = () => {
    const numValue = parseFloat(value) || 0;
    const numPercentage = parseFloat(percentage) || 0;
    const numDiscount = parseFloat(discount) || 0;

    // Calculate percentage value and discount value
    const percentageValue = (numValue * numPercentage) / 100;
    const discountValue = (numDiscount * numValue) / 100;

    // Calculate final value
    const final = numValue + percentageValue - discountValue;

    // Update result
    setResult({
      final,
      percentageValue,
      discountValue, // Correctly set discountValue
    });
  };

  return (
<div className="min-h-screen bg-gray-100 flex flex-col md:flex-row items-center justify-center p-4 gap-4">
  {/* Phần chính */}
  <div className="bg-white rounded-xl shadow-2xl p-6 flex flex-col md:flex-row gap-8 w-full md:w-auto">
    <div className="flex flex-col gap-6 min-w-[380px] w-full md:w-auto">
      <div className="flex items-center gap-2 text-2xl font-semibold text-gray-700">
        <HiOutlineReceiptTax size={32} />
        <h1>Tax/Percentage Calculator</h1>
      </div>

      <div className="space-y-4">
        <div
          className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
            activeInput === "value"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200"
          }`}
          onClick={() => setActiveInput("value")}
        >
          <label className="text-sm font-medium text-gray-600">
            Original Value
          </label>
          <div className="text-2xl font-bold">{value || "0"}</div>
        </div>

        <div
          className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
            activeInput === "percentage"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200"
          }`}
          onClick={() => setActiveInput("percentage")}
        >
          <label className="text-sm font-medium text-gray-600">
            Tax/Percentage
          </label>
          <div className="text-2xl font-bold">{percentage || "0"}%</div>
        </div>

        <div
          className={`p-4 rounded-lg border-2 transition-all cursor-pointer ${
            activeInput === "discount"
              ? "border-blue-500 bg-blue-50"
              : "border-gray-200"
          }`}
          onClick={() => setActiveInput("discount")}
        >
          <label className="text-sm font-medium text-gray-600">
            Discount
          </label>
          <div className="text-2xl font-bold">{discount || "0"}%</div>
        </div>

        <div className="p-4 rounded-lg bg-gray-100">
          <label className="text-sm font-medium text-gray-600">
            Tax/Percentage Amount
          </label>
          <div className="text-2xl font-bold text-red-500">
            {result.percentageValue.toLocaleString('vi-VN')}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-gray-100">
          <label className="text-sm font-medium text-gray-600">
            Discount Amount
          </label>
          <div className="text-2xl font-bold text-green-600">
            {result.discountValue.toLocaleString('vi-VN')}{" "}
          </div>
        </div>

        <div className="p-4 rounded-lg bg-blue-600 text-white">
          <label className="text-sm font-medium text-gray-300">
            Final Amount
          </label>
          <div className="text-2xl font-bold">
            {result.final.toLocaleString('vi-VN')}
          </div>
        </div>
      </div>
    </div>

    {/* Bàn phím */}
    <div className="flex justify-center items-center w-full md:w-auto mt-4 md:mt-0">
      <Keyboard onInput={handleInput} onConvert={calculate} />
    </div>
  </div>
</div>
  );
}

export default TaxPercentage;
