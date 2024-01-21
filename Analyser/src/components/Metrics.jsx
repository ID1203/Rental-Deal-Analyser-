import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Metrics = ({
  monthlyRent,
  monthlyExpenses,
  propertyValue,
  monthlyMortgage,
  totalInvestment,
}) => {
  const monthly = monthlyExpenses + monthlyMortgage;
  const annualMortgagePayment = monthlyMortgage * 12;
  const cashFlow = monthlyRent - monthly;
  const annualCashFlow = cashFlow * 12;
  const capRate = propertyValue ? (annualCashFlow / propertyValue) * 100 : 0;
  const roi = totalInvestment ? (annualCashFlow / totalInvestment) * 100 : 0;
  const dscr = annualMortgagePayment
    ? annualCashFlow / annualMortgagePayment
    : 0;
  return (
    <div className="bg-white rounded-lg p-4 m-4 flex flex-col w-200 h-200">
      <h2 className="text-xl font-bold mb-4">Metrics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <p className="text-lg font-semibold">
          Cash Flow: £{cashFlow.toFixed(2)}
        </p>
        <p className="text-lg font-semibold">
          Annual Cash Flow: £{annualCashFlow.toFixed(2)}
        </p>
        <p className="text-lg font-semibold">
          Annual Cash Flow: £{annualCashFlow.toFixed(2)}
        </p>
        <p>Debt Service Coverage Ratio (DSCR): {dscr.toFixed(2)}</p>
        <div className="w-20 h-20 mb-4">
          <CircularProgressbar
            value={roi}
            text={`${roi.toFixed(2)}%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "blue",
              trailColor: "grey",
            })}
          />
          <p className="text-center mt-2">ROI</p>
        </div>
        <div className="w-20 h-20 mb-4">
          <CircularProgressbar
            value={capRate}
            text={`${capRate.toFixed(2)}%`}
            styles={buildStyles({
              textColor: "black",
              pathColor: "green",
              trailColor: "grey",
            })}
          />
          <p className="text-center mt-2">Cap Rate</p>
        </div>
      </div>
    </div>
  );
};

export default Metrics;
