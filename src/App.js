import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/shared/Layout';
import BasicCalculator from './components/BasicCalculator';
import DateCalculator from './components/DateCalculation'
import BMICalculator from './components/BMICalculator';
import CurrencyConverter from './components/CurrencyConverter';
import LengthConverter from './components/LengthConverter';
import WeightConverter from './components/WeightConverter';
import TimeConverter from './components/TimeConverter';
import DataConverter from './components/DataConverter';
import TipsCalculator from './components/TipsCalculator';
import TaxPercentage from './components/TaxCalculation';
import AdvancedCalculator from './components/AdvancedCalculator';
function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="basic-calculator" element={<BasicCalculator />} />
          <Route path="advanced-calculator" element={<AdvancedCalculator />} />
          <Route path="bmi-calculator" element={<BMICalculator />} />
          <Route path="date-calculation" element={<DateCalculator />} />
          <Route path="tip-calculator" element={<TipsCalculator />} />
          <Route path="tax-percentage" element={<TaxPercentage />} />
          <Route path="currency-converter" element={<CurrencyConverter />} />
          <Route path="length-converter" element={<LengthConverter />} />
          <Route path="weight-converter" element={<WeightConverter />} />
          <Route path="time-converter" element={<TimeConverter />} />
          <Route path="data-converter" element={<DataConverter />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;