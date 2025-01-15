import React, { useState } from "react";
import {
  differenceInYears,
  differenceInMonths,
  differenceInWeeks,
  differenceInDays,
} from "date-fns"; // Ensure date-fns library is installed

function DateCalculator() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [difference, setDifference] = useState("");

  const calculateDifference = () => {
    if (!dateFrom || !dateTo) {
      setDifference(<p className="text-md text-red-600 font-bold">Please select both dates!!</p>);
      return;
    }

    const fromDate = new Date(dateFrom);
    const toDate = new Date(dateTo);

    // Calculate the difference in years, months, weeks, and days
    const years = differenceInYears(toDate, fromDate);
    const months = differenceInMonths(toDate, fromDate) % 12; // Keep the remainder after subtracting full years
    const weeks = Math.floor(differenceInWeeks(toDate, fromDate) % 4.2380952381); // Approximate weeks in a month
    const days = differenceInDays(toDate, fromDate) % 7; // Remaining days after calculating weeks
    const totalDays = Math.abs(differenceInDays(toDate, fromDate));

    // Format the output based on the differences
    let result = "";
    if (years > 0) result += `${years} year(s)`;
    if (months > 0) result += ` ${months} month(s)`;
    if (weeks > 0) result += ` ${weeks} week(s)`;
    if (days > 0) result += ` ${days} day(s)`;

    setDifference(
      <>
        <p className="text-lg text-neutral-800 font-bold">{result || "0 day(s)"} </p>
        <p className="text-md text-neutral-500">or {totalDays} day(s)</p>
      </>
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-semibold mb-4">Date Calculation</h1>
        <div>
          <label className="block mb-2 font-semibold">From:</label>
          <input
            type="date"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">To:</label>
          <input
            type="date"
            value={dateTo}
            onChange={(e) => setDateTo(e.target.value)} 
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={calculateDifference}
          className="w-full mt-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calculate Difference
        </button>
        {difference && (
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-neutral-600">Difference:</h2>
            <p>{difference}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default DateCalculator;
