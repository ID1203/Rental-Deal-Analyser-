import React, { useState, useEffect } from "react";
import MoneyInput from "./MoneyInput";

const MonthlyExpenses = ({ monthlyExpenses, setMonthlyExpenses }) => {
  const [managingAgentFee, setManagingAgentFee] = useState(0);
  const [landlordInsurance, setLandlordInsurance] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);
  const [groundRent, setGroundRent] = useState(0);
  const [utilities, setUtilities] = useState(0);
  const [maintenance, setMaintenance] = useState(0);
  const [otherCosts, setOtherCosts] = useState(0);

  useEffect(() => {
    const total = [
      managingAgentFee,
      landlordInsurance,
      serviceCharge,
      groundRent,
      utilities,
      maintenance,
      otherCosts,
    ].reduce((acc, value) => acc + (parseFloat(value) || 0), 0);
    setMonthlyExpenses(total);
  }, [
    managingAgentFee,
    landlordInsurance,
    serviceCharge,
    groundRent,
    utilities,
    maintenance,
    otherCosts,
  ]);

  return (
    <div className="bg-white rounded-lg p-4 m-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Monthly Operating Expenses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MoneyInput
          name="Managing Agent Fee"
          value={managingAgentFee}
          onChange={(e) => setManagingAgentFee(e.target.value)}
        />
        <MoneyInput
          name="Landlord Insurance"
          value={landlordInsurance}
          onChange={(e) => setLandlordInsurance(e.target.value)}
        />
        <MoneyInput
          name="Service Charge"
          value={serviceCharge}
          onChange={(e) => setServiceCharge(e.target.value)}
        />
        <MoneyInput
          name="Ground Rent"
          value={groundRent}
          onChange={(e) => setGroundRent(e.target.value)}
        />
        <MoneyInput
          name="Utilities"
          value={utilities}
          onChange={(e) => setUtilities(e.target.value)}
        />
        <MoneyInput
          name="Maintenance"
          value={maintenance}
          onChange={(e) => setMaintenance(e.target.value)}
        />
        <MoneyInput
          name="Other Monthly Costs"
          value={otherCosts}
          onChange={(e) => setOtherCosts(e.target.value)}
        />
        <div className="text-xl font-bold pt-10 mb-4">
          Total: £{monthlyExpenses}
        </div>
      </div>
    </div>
  );
};

export default MonthlyExpenses;
