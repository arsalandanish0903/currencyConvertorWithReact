import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions= [],
    selectCurrency= "usd",
    amountDisable= false,
    currencyDisable = false,
    className=''
}) {
  return (
    <div className={`p-4 bg-white shadow-md rounded-lg flex flex-col space-y-4 ${className}`}>
        <div className="w-full">
            <label className='text-gray-700 font-semibold text-lg'>
                {label}
            </label>
            <input 
                type="text" 
                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={amount}
                disabled={amountDisable}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='w-full'>
            <label className='text-gray-700 font-semibold text-lg'>
                Currency Type
            </label>
            <select 
                className='w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                value={selectCurrency}
                disabled={currencyDisable}
            >
                {currencyOptions.map((currency) => (
                    <option key={currency} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox
