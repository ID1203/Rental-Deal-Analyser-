import React, { useState, useEffect } from "react";
import MoneyInput from "./MoneyInput";

const PurchaseDetails = ({
  purchasePrice,
  setPurchasePrice,
  monthlyRent,
  setMonthlyRent,
  propertyValue,
  setPropertyValue,
  totalInvestment,
  setTotalInvestment,
}) => {
  const [refurb, setRefurb] = useState(0);
  const [stampDuty, setStampDuty] = useState(0);
  const [closingCost, setClosingCost] = useState(0);

  useEffect(() => {
    const newTotal = [purchasePrice, refurb, stampDuty, closingCost]
      .reduce((acc, current) => acc + (parseFloat(current) || 0), 0)
      .toFixed(2);
    setTotalInvestment(newTotal);
  }, [purchasePrice, refurb, stampDuty, closingCost]);

  const handlePurchasePriceChange = (event) =>
    setPurchasePrice(event.target.value);
  const handleClosingCost = (event) => setClosingCost(event.target.value);
  const handlePropertyValue = (event) => setPropertyValue(event.target.value);
  const handleMonthlyRentChange = (event) => setMonthlyRent(event.target.value);
  const handleRefurbChange = (event) => setRefurb(event.target.value);
  const handleStampDutyChange = (event) => setStampDuty(event.target.value);

  return (
    <div className="border-4 border-black rounded-lg p-4 m-4 flex flex-col  w-200 h-200">
      <h2 className="text-xl font-bold mb-4">Purchase Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MoneyInput
          name="Purchase Price"
          value={purchasePrice}
          onChange={handlePurchasePriceChange}
        />
        <MoneyInput
          name="Property Value"
          value={propertyValue}
          onChange={handlePropertyValue}
        />
        <MoneyInput
          name="Monthly Rent"
          value={monthlyRent}
          onChange={handleMonthlyRentChange}
        />
        <MoneyInput
          name="Stamp Duty"
          value={stampDuty}
          onChange={handleStampDutyChange}
        />
        <MoneyInput
          name="Refurb"
          value={refurb}
          onChange={handleRefurbChange}
        />
        <MoneyInput
          name="Closing Cost"
          value={closingCost}
          onChange={handleClosingCost}
        />
      </div>
      <div className="text-xl font-bold pt-10 mb-4">
        Total Investment = £{totalInvestment}
      </div>
    </div>
  );
};

export default PurchaseDetails;
