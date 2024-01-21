import React from "react";
import { useState } from "react";
import LoanDetails from "./LoanDetails";
import Metrics from "./Metrics";
import MonthlyExspenses from "./MonthlyExspenses";
import PurchaseDetails from "./purchaseDetails";

export default function Dashboard() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [monthlyMortgage, setMonthlyMortgage] = useState(0);
  const [monthlyRent, setMonthlyRent] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [propertyValue, setPropertyValue] = useState(0);
  const [totalInvestment, setTotalInvestment] = useState(0);

  return (
    <div className="grid grid-cols-2 grid-rows-2 bg-blue-100 text-gray-800">
      <PurchaseDetails
        purchasePrice={purchasePrice}
        setPurchasePrice={setPurchasePrice}
        monthlyRent={monthlyRent}
        setMonthlyRent={setMonthlyRent}
        propertyValue={propertyValue}
        setPropertyValue={setPropertyValue}
        totalInvestment={totalInvestment}
        setTotalInvestment={setTotalInvestment}
      />
      <MonthlyExspenses
        monthlyExpenses={monthlyExpenses}
        setMonthlyExpenses={setMonthlyExpenses}
      />
      <LoanDetails
        purchasePrice={purchasePrice}
        monthlyMortgage={monthlyMortgage}
        setMonthlyMortgage={setMonthlyMortgage}
      />
      <Metrics
        monthlyRent={monthlyRent}
        monthlyExpenses={monthlyExpenses}
        propertyValue={propertyValue}
        monthlyMortgage={monthlyMortgage}
        totalInvestment={totalInvestment}
      />
    </div>
  );
}
