import { useState, useEffect } from "react";
import { FiRefreshCw } from "react-icons/fi";
import { MdOutlineCurrencyExchange } from "react-icons/md";

function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("CNY");
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleString());

  const currencies = [
    "USD",
    "EUR",
    "GBP",
    "BRL",
    "JPY",
    "AUD",
    "CAD",
    "CHF",
    "CNY",
    "INR",
    "SGD",
    "KRW",
  ];

  const convertCurrency = (amount, fromCurrency, toCurrency) => {
    fetch(
      `https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`
    )
      .then((resp) => resp.json())
      .then((data) => {
        // Calculate the converted amount
        const convertedAmount = (amount * data.rates[toCurrency]).toFixed(2);
        // Update the state with the converted amount
        setConvertedAmount(convertedAmount);
        setLastUpdate(new Date().toLocaleString()); // Update last update time
      })
      .catch((error) => {
        // Error fetching data
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    convertCurrency(amount, fromCurrency, toCurrency);
  }, [amount, fromCurrency, toCurrency]);

  const handleRefresh = () => {
    setAmount("1");
  };

  return (
    <div className="min-h-screen  bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-center mb-8 inline-flex items-center gap-5">
          <MdOutlineCurrencyExchange className="text-blue-600"/>
          Currency Converter
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 p-2 border"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                From
              </label>
              <div className="mt-1 relative">
                <img
                  src={`https://flagsapi.com/${fromCurrency.slice(
                    0,
                    2
                  )}/flat/64.png`}
                  alt={fromCurrency}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                />
                <select
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                To
              </label>
              <div className="mt-1 relative">
                <img
                  src={`https://flagsapi.com/${toCurrency.slice(
                    0,
                    2
                  )}/flat/64.png`}
                  alt={toCurrency}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 w-6 h-6"
                />
                <select
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                  className="block w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-semibold">
                  {convertedAmount ? (
                    <>
                      {amount} {fromCurrency} = {convertedAmount} {toCurrency}
                    </>
                  ) : (
                    "Converting..."
                  )}
                </p>
                <p className="text-sm text-gray-500">
                  Last update: {lastUpdate}
                </p>
              </div>
              <button
                onClick={handleRefresh}
                className="p-2 text-blue-600 hover:bg-gray-200 rounded-full transition-colors"
              >
                <FiRefreshCw className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <h1>
          Due to the limitations of the free API, this app may not support all
          currencies worldwide. <br />
          For real-time currency updates and a more
          comprehensive list of currencies, you can use{" "}
          <a
            href="https://g.co/kgs/NCzhDRV"
            className="text-blue-500 hover:underline"
            target="_blank"
          >
            Google
          </a>
          .
        </h1>
      </div>
    </div>
  );
}

export default CurrencyConverter;
