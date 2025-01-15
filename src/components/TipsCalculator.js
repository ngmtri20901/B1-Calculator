import React, { useState } from 'react';
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaUserFriends } from "react-icons/fa";
import { FaPercent } from "react-icons/fa";



function TipsCalculator() {
    const [bill, setBill] = useState('');
    const [people, setPeople] = useState('1');
    const [showTips, setShowTips] = useState(false);
    const [tipType, setTipType] = useState('amount');
    const [tipValue, setTipValue] = useState('');
    
    const calculateTotal = () => {
      const billAmount = parseFloat(bill) || 0;
      const numberOfPeople = Math.max(1, parseInt(people) || 1); // Ensure at least 1 person
      let tipAmount = 0;
    
      if (showTips && tipValue) {
        if (tipType === 'amount') {
          tipAmount = Math.max(0, parseFloat(tipValue) || 0); // No negative tips
        } else {
          tipAmount = Math.max(0, (billAmount * (parseFloat(tipValue) || 0)) / 100);
        }
      }
    
      const total = billAmount + tipAmount;
      const perPerson = total / numberOfPeople;
    
      return {
        total: total,
        perPerson: perPerson,
      };
    };
    
    const results = calculateTotal() || { total: '0.00', perPerson: '0.00' };
    
  return (
    <div className="min-h-screen bg-neutral-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-8">Tips Calculator</h1>

        <div className="space-y-4">
          {/* Bill Input */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Total Bill
            </label>
            <div className="relative">
              <FaMoneyBill1Wave className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="number"
                value={bill}
                onChange={(e) => setBill(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="0.00"
              />
            </div>
          </div>

          {/* Number of People */}
          <div className="relative">
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Number of People
            </label>
            <div className="relative">
              <FaUserFriends className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="number"
                value={people}
                onChange={(e) => setPeople(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="1"
                min="1"
              />
            </div>
          </div>

          {/* Tips Toggle */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Add Tips</span>
            <button
              onClick={() => setShowTips(!showTips)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                showTips ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out ${
                  showTips ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
          </div>

          {/* Tips Input */}
          {showTips && (
            <div className="space-y-3">
              <div className="flex gap-2">
                <button
                  onClick={() => setTipType('amount')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                    tipType === 'amount'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Amount
                </button>
                <button
                  onClick={() => setTipType('percent')}
                  className={`flex-1 py-2 px-4 rounded-lg font-medium ${
                    tipType === 'percent'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  Percentage
                </button>
              </div>
              <div className="relative">
                {tipType === 'amount' ? (
                  <FaMoneyBill1Wave className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                ) : (
                  <FaPercent className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                )}
                <input
                  type="number"
                  value={tipValue}
                  onChange={(e) => setTipValue(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={tipType === 'amount' ? '0.00' : '0'}
                />
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="mt-6 bg-blue-600 rounded-xl p-6 text-white">
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-blue-100">Total Bill</span>
              <span className="text-2xl font-bold">{results.total.toLocaleString('vi-VN')}</span>
            </div>
            <div className="border-t border-blue-400 pt-4 flex justify-between items-center">
              <span className="text-blue-100">Per Person</span>
              <span className="text-2xl font-bold">{results.perPerson.toLocaleString('vi-VN')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TipsCalculator;