import { useState } from "react";
import {
  FaCalculator,
  FaDivide,
  FaMinus,
  FaPlus,
  FaDeleteLeft,
  FaAngleUp,
  FaXmark,
  FaSquareRootVariable,
} from "react-icons/fa6";
import { TbMathPi } from "react-icons/tb";
import { LuRotateCcw } from "react-icons/lu";
import { LuSquareFunction } from "react-icons/lu";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const handleNumber = (num) => {
    setError("");
    setInput((prev) => prev + num);
  };

  const handleOperator = (op) => {
    setError("");
    setInput((prev) => prev + op);
  };

  const handleClear = () => {
    setInput("");
    setResult("");
    setError("");
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
    setError("");
  };

  const handleEquals = () => {
    try {
      // Replace mathematical expressions with JavaScript equivalents
      let expression = input
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E")
        .replace(/sin\(/g, "Math.sin(")
        .replace(/cos\(/g, "Math.cos(")
        .replace(/tan\(/g, "Math.tan(")
        .replace(/log\(/g, "Math.log10(")
        .replace(/ln\(/g, "Math.log(")
        .replace(/√\(/g, "Math.sqrt(")
        .replace(/\^/g, "**");

      // Handle factorial
      while (expression.includes("!")) {
        expression = expression.replace(/(\d+)!/, (match, num) => {
          let result = 1;
          for (let i = 2; i <= parseInt(num); i++) result *= i;
          return result.toString();
        });
      }

      const result = eval(expression);
      setResult(Number(result.toFixed(8)).toString());
      setError("");
    } catch (err) {
      setError("Invalid expression");
    }
  };

  const buttons = [
    { label: "sin", onClick: () => handleOperator("sin(") },
    { label: "cos", onClick: () => handleOperator("cos(") },
    { label: "tan", onClick: () => handleOperator("tan(") },
    { label: "(", onClick: () => handleOperator("(") },
    { label: ")", onClick: () => handleOperator(")") },
    { label: "e", onClick: () => handleOperator("e") },
    { label: "π", onClick: () => handleOperator("π"), icon: TbMathPi },
    { label: "DEL", onClick: handleDelete, icon: FaDeleteLeft },
    { label: "^", onClick: () => handleOperator("^"), icon: FaAngleUp },
    {
      label: "√",
      onClick: () => handleOperator("√("),
      icon: FaSquareRootVariable,
    },
    { label: "log", onClick: () => handleOperator("log(") },
    { label: "AC", onClick: handleClear },
    { label: "7", onClick: () => handleNumber("7") },
    { label: "8", onClick: () => handleNumber("8") },
    { label: "9", onClick: () => handleNumber("9") },
    { label: "÷", onClick: () => handleOperator("/"), icon: FaDivide },
    { label: "4", onClick: () => handleNumber("4") },
    { label: "5", onClick: () => handleNumber("5") },
    { label: "6", onClick: () => handleNumber("6") },
    { label: "×", onClick: () => handleOperator("*"), icon: FaXmark },
    { label: "1", onClick: () => handleNumber("1") },
    { label: "2", onClick: () => handleNumber("2") },
    { label: "3", onClick: () => handleNumber("3") },
    { label: "-", onClick: () => handleOperator("-"), icon: FaMinus },
    { label: "0", onClick: () => handleNumber("0") },
    { label: ".", onClick: () => handleNumber(".") },
    { label: "=", onClick: handleEquals },
    { label: "+", onClick: () => handleOperator("+"), icon: FaPlus },
  ];

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 bg-white">
          <div className="flex items-center gap-2 mb-6">
            <FaCalculator className="h-6 w-6 text-blue-400" />
            <h1 className="text-xl font-semibold text-gray-900">
              Scientific Calculator
            </h1>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <div className="h-8 text-right text-gray-500 text-sm mb-1 overflow-x-auto">
              {input || "0"}
            </div>
            <div className="h-10 text-right text-2xl font-semibold text-gray-900 overflow-x-auto">
              {error ? (
                <span className="text-red-500">{error}</span>
              ) : (
                result || "0"
              )}
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {buttons.map((btn, index) => {
              let buttonClass =
                "h-14 rounded-lg font-medium transition-all duration-200 flex items-center justify-center active:scale-95 shadow-sm ";

              // Assign specific colors based on button type
              if (["÷", "×", "-", "+", "="].includes(btn.label)) {
                buttonClass += "bg-blue-500 hover:bg-blue-600 text-white"; // Operators
              } else if ([".", "0","1", "2","3","4","5", "6","7","8","9"].includes(btn.label)) {
                buttonClass += "bg-gray-700 hover:bg-gray-800 text-white"; // 
              } else if (["AC"].includes(btn.label)) {
                buttonClass += "bg-red-500 hover:bg-red-600 text-white"; //C 
              } else if (["DEL"].includes(btn.label)) {
                buttonClass += "bg-neutral-500 hover:bg-neutral-600 text-white"; // AC
              } else {
                buttonClass += "bg-gray-300 hover:bg-gray-400 text-neutral-400 hover:text-neutral-100"; // Numeric keys
              }

              return (
                <button
                  key={index}
                  onClick={btn.onClick}
                  className={buttonClass}
                >
                  {btn.icon ? <btn.icon className="h-5 w-5" /> : btn.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
