import { useState } from "react";
import "./App.css";
import LoanDetails from "./components/LoanDetails";
import Metrics from "./components/Metrics";
import MonthlyExspenses from "./components/MonthlyExspenses";
import PurchaseDetails from "./components/purchaseDetails";

function App() {
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [monthlyMortgage, setMonthlyMortgage] = useState(0);
  const [monthlyRent, setMonthlyRent] = useState(0);
  const [monthlyExpenses, setMonthlyExpenses] = useState(0);
  const [propertyValue, setPropertyValue] = useState(0);

  return (
    <div className="w-full h-screen grid grid-cols-2 grid-rows-2">
      <PurchaseDetails
        purchasePrice={purchasePrice}
        setPurchasePrice={setPurchasePrice}
        monthlyRent={monthlyRent}
        setMonthlyRent={setMonthlyRent}
        propertyValue={propertyValue}
        setPropertyValue={setPropertyValue}
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
      />
    </div>
  );
}

export default App;
