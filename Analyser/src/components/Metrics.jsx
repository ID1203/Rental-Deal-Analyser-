import React, { useState } from "react";

const Metrics = ({
  monthlyRent,
  monthlyExpenses,
  propertyValue,
  monthlyMortgage,
}) => {
  const [totalInvestment, setTotalInvestment] = useState(0);
  const [annualMortgagePayment, setAnnualMortgagePayment] = useState(0);
  const [grossOperatingIncome, setGrossOperatingIncome] = useState(0);

  const monthly = monthlyExpenses + monthlyMortgage;
  const cashFlow = monthlyRent - monthly;
  const annualCashFlow = cashFlow * 12;
  const capRate = propertyValue ? (annualCashFlow / propertyValue) * 100 : 0;
  const roi = totalInvestment ? (annualCashFlow / totalInvestment) * 100 : 0;
  const dscr = annualMortgagePayment
    ? annualCashFlow / annualMortgagePayment
    : 0;
  const ber = grossOperatingIncome
    ? ((monthlyExpenses * 12 + annualMortgagePayment) / grossOperatingIncome) *
      100
    : 0;

  return (
    <div className="border-4 border-black rounded-lg p-4 m-4 flex flex-col w-200 h-200">
      <h2 className="text-xl font-bold mb-4">Metrics</h2>
      <div className="overflow-auto">
        <p>Cash Flow: £{cashFlow.toFixed(2)}</p>
        <p>Annual Cash Flow: £{annualCashFlow.toFixed(2)}</p>
        <p>Net Yield / Cap Rate: {capRate.toFixed(2)}%</p>
        <p>Return on Investment (ROI): {roi.toFixed(2)}%</p>
        <p>Debt Service Coverage Ratio (DSCR): {dscr.toFixed(2)}</p>
        <p>Break-Even Ratio (BER): {ber.toFixed(2)}%</p>
        <p>Test: {monthly.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Metrics;
