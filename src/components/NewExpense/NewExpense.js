import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showFormHandle = () => {
    setShowForm(true);
  };

  const cancelFormHandle = () => {
    setShowForm(false);
  };

  let showAddExpenses = <button onClick={showFormHandle}>Add Expenses </button>;

  if (showForm) {
    showAddExpenses = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        showFormHandle={showFormHandle}
        stopAdd={cancelFormHandle}
      />
    );
  }

  return <div className="new-expense">{showAddExpenses}</div>;
};

export default NewExpense;
