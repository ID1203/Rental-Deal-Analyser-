import React, { useEffect, useState } from "react";
import MoneyInput from "./MoneyInput";

const LoanDetails = ({
  purchasePrice,
  monthlyMortgage,
  setMonthlyMortgage,
}) => {
  const [LTV, setLTV] = useState(0);
  const [depositPercentage, setDepositPercentage] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  const [mortgageTerm, setMortgageTerm] = useState(0);
  const [loanRequired, setLoanRequired] = useState(0);
  const [mortgageRate, setMortgageRate] = useState(0);

  const roundToTwo = (num) => {
    return Math.round(num * 100) / 100;
  };

  useEffect(() => {
    if (purchasePrice && depositPercentage) {
      const deposit = roundToTwo(
        parseFloat(purchasePrice) * (parseFloat(depositPercentage) / 100)
      );
      setDepositAmount(deposit);
    }
  }, [purchasePrice, depositPercentage]);

  useEffect(() => {
    if (purchasePrice && depositAmount) {
      const loan = roundToTwo(
        parseFloat(purchasePrice) - parseFloat(depositAmount)
      );
      setLoanRequired(loan);
    }
  }, [purchasePrice, depositAmount]);

  useEffect(() => {
    if (purchasePrice && loanRequired) {
      const ltv = roundToTwo(
        (parseFloat(loanRequired) / parseFloat(purchasePrice)) * 100
      );
      setLTV(ltv);
    }
  }, [purchasePrice, loanRequired]);

  useEffect(() => {
    const monthlyRate = parseFloat(mortgageRate) / 100 / 12;
    const numberOfPayments = parseFloat(mortgageTerm) * 12;
    const principal = parseFloat(loanRequired);

    let monthly;
    if (monthlyRate === 0 || numberOfPayments === 0) {
      // Handle the case where mortgageTerm is 0
      monthly = 0; // or any other fallback value you consider appropriate
    } else {
      const pow = Math.pow(1 + monthlyRate, numberOfPayments);
      monthly = pow === 0 ? 0 : (principal * monthlyRate * pow) / (pow - 1);
    }

    monthly = roundToTwo(monthly);

    if (Number.isFinite(monthly)) {
      setMonthlyMortgage(monthly);
    }
  }, [loanRequired, mortgageRate, mortgageTerm, setMonthlyMortgage]);

  return (
    <div className="bg-white rounded-lg p-4 m-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4">Loan Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MoneyInput
          name="LTV"
          value={LTV}
          onChange={(e) => setLTV(e.target.value)}
        />
        <MoneyInput
          name="Loan Required"
          value={loanRequired}
          onChange={(e) => setLoanRequired(e.target.value)}
        />
        <MoneyInput
          name="Deposit Percentage"
          value={depositPercentage}
          onChange={(e) => setDepositPercentage(e.target.value)}
        />
        <MoneyInput
          name="Deposit Amount"
          value={depositAmount}
          onChange={(e) => setDepositAmount(e.target.value)}
        />
        <MoneyInput
          name="Mortgage Rate"
          value={mortgageRate}
          onChange={(e) => setMortgageRate(e.target.value)}
        />
        <MoneyInput
          name="Mortgage Term"
          value={mortgageTerm}
          onChange={(e) => setMortgageTerm(e.target.value)}
        />
        <MoneyInput
          name="Mortgage Monthly Payment"
          value={monthlyMortgage}
          onChange={(e) => setMonthlyMortgage(e.target.value)}
        />
      </div>
    </div>
  );
};

export default LoanDetails;
