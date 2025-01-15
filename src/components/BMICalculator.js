// src/components/BMICalculator.js
import { useState } from 'react';
import { FaRegQuestionCircle } from "react-icons/fa";
import { Button, Popover } from "flowbite-react";


function BMICalculator() {
  // State hooks to manage the input values and results
  const [weight, setWeight] = useState(''); // Stores the user's weight input
  const [height, setHeight] = useState(''); // Stores the user's height input
  const [bmi, setBmi] = useState(null); // Stores the calculated BMI result
  const [classification, setClassification] = useState(''); // Stores the BMI classification result
  const [unit, setUnit] = useState('metric'); // Stores the current unit system (metric or US)

  // Function to handle changes in the weight input
  const handleWeightChange = (event) => {
    const value = event.target.value;
    // Only set weight if it's a valid number and greater than 0
    if (value >= 0 || value === '') {
      setWeight(value);
    }
  };
  // Function to handle changes in the height input
  const handleHeightChange = (event) => {
    const value = event.target.value;
    // Only set height if it's a valid number and greater than 0
    if (value >= 0 || value === '') {
      setHeight(value);
    }
  };


  // Function to determine the BMI classification based on the calculated BMI
  const getClassification = (bmi) => {
    if (bmi < 16) return 'Severe Thinness';
    if (bmi >= 16 && bmi < 17) return 'Moderate Thinness';
    if (bmi >= 17 && bmi < 18.5) return 'Mild Thinness';
    if (bmi >= 18.5 && bmi < 25) return 'Normal';
    if (bmi >= 25 && bmi < 30) return 'Overweight';
    if (bmi >= 30 && bmi < 35) return 'Obese Class I';
    if (bmi >= 35 && bmi < 40) return 'Obese Class II';
    return 'Obese Class III'; // Classification for BMI > 40
  };

  const content = (
    <div className="w-64 text-sm text-gray-500">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2">
        <h3 className="font-semibold text-gray-900 dark:text-white">BMI Information</h3>
      </div>
      <div className="px-3 py-2">
        <p>BMI is a measurement that assesses a person's body weight relative to their height to categorize them as underweight, normal weight, overweight, or obese</p>
      </div>
      <div className="px-4 py-3">
        <a href='https://www.who.int/europe/news-room/fact-sheets/item/a-healthy-lifestyle---who-recommendations' className="text-blue-600 font-bold hover:text-blue-800 hover:underline" target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    </div>
  );

  // Function to calculate BMI based on the selected unit system (metric or US)
  const calculateBMI = () => {
    // Reset error state

    let bmiResult = null;

    // If the unit is metric (kg and cm), calculate BMI using the standard formula
    if (unit === 'metric' && weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      bmiResult = (weight / (heightInMeters ** 2)).toFixed(2); // BMI formula: weight (kg) / height (m)^2
    }
    // If the unit is US (lbs and inches), calculate BMI using the US formula
    else if (unit === 'us' && weight && height) {
      const heightInInches = height; // Height is already in inches
      const weightInLbs = weight; // Weight is already in lbs
      // BMI formula for US units: weight (lbs) / height (inches)^2 * 703
      bmiResult = ((weightInLbs / (heightInInches ** 2)) * 703).toFixed(2);
    }

    // If a valid BMI result was calculated, set the BMI and its classification
    if (bmiResult) {
      setBmi(bmiResult); // Set BMI result in the state
      setClassification(getClassification(parseFloat(bmiResult))); // Set classification based on BMI
    } else {
      // If the result is invalid (empty inputs), reset the BMI and classification
      setBmi(null);
      setClassification('');
    }
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      
      {/* Wrapper for the calculator */}
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-center text-2xl font-semibold mb-4">BMI Calculator</h1>

        {/* Unit toggle buttons */}
        <div className="flex justify-center mb-4">
          <button
            className={`px-6 py-2 mr-2 rounded-full rounded-r-md transition-all duration-300 ${unit === 'metric' ? 'bg-blue-500 text-white scale-105' : 'bg-gray-300'}`}
            onClick={() => setUnit('metric')}
          >
            Metric (kg/cm)
          </button>
          <button
            className={`px-6 py-2 rounded-full rounded-l-md transition-all duration-300 ${unit === 'us' ? 'bg-blue-500 text-white scale-105' : 'bg-gray-300'}`}
            onClick={() => setUnit('us')}
          >
            US (lbs/inch)
          </button>
        </div>

        {/* Conditionally render input fields based on selected unit */}
        {unit === 'metric' ? (
          <>
            {/* Input for weight in kilograms (metric system) */}
            <div className="mb-4">
              <label htmlFor="weight" className="block text-lg mb-2">Weight (kg)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={handleWeightChange} // Call handleWeightChange on input change
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your weight"
              />
            </div>

            {/* Input for height in centimeters (metric system) */}
            <div className="mb-4">
              <label htmlFor="height" className="block text-lg mb-2">Height (cm)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={handleHeightChange} // Call handleHeightChange on input change
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your height"
              />
            </div>
          </>
        ) : (
          <>
            {/* Input for weight in pounds (US system) */}
            <div className="mb-4">
              <label htmlFor="weight" className="block text-lg mb-2">Weight (lbs)</label>
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={handleWeightChange} // Call handleWeightChange on input change
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your weight"
              />
            </div>

            {/* Input for height in inches (US system) */}
            <div className="mb-4">
              <label htmlFor="height" className="block text-lg mb-2">Height (inches)</label>
              <input
                type="number"
                id="height"
                value={height}
                onChange={handleHeightChange} // Call handleHeightChange on input change
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your height"
              />
            </div>
          </>
        )}

        {/* Button to calculate BMI */}
        <button
          onClick={calculateBMI} // Call calculateBMI function on button click
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Calculate BMI
        </button>

        {/* Display the BMI result and classification if available */}
        {bmi !== null && (
          <div className="mt-6 text-center text-xl">
            <p className="text-lg">Your BMI is: <strong>{bmi}</strong></p>
            <p className="mt-2 text-sm text-gray-600">
              You look like: <strong>{classification}</strong>
            </p>
          </div>
        )}
        {/* Display BMI  Information*/}
        <div>
          <div className="flex gap-2 ">
            <Popover content={content} trigger="hover">
              <Button className='absolute bottom-12 right-7 items-center text-center rounded-full bg-neutral-700 hover:bg-neutral-500 active:bg-neutral-500 transition-colors'>
                <FaRegQuestionCircle className='animate-bounce mr-2' />
                <span>BMI Information</span>
              </Button>
            </Popover>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BMICalculator;
