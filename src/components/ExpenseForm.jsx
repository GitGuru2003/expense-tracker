import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");

  const titleHandler = (e) => {
    setTitle(e.target.value);
  };
  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    onAddExpense({ id: Math.random().toString(), title, amount });

    setAmount("");
    setTitle("");
  };

  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="bg-gray-100 p-4 rounded flex flex-col gap-4"
      >
        <div className="flex items-center justify-center gap-2 p-2">
          <TextField
            type="text"
            value={title}
            fullWidth
            variant="outlined"
            label="Title"
            placeholder="Enter the title"
            onChange={titleHandler}
          />
        </div>
        <div className="flex items-center justify-center gap-2 p-2">
          <TextField
            label="Amount"
            variant="outlined"
            fullWidth
            value={amount}
            onChange={amountHandler}
            placeholder="Enter the amount"
            type="number"
          />
        </div>
        <Button
          type="submit"
          className="bg-emerald-500 text-white px-4 py-2 rounded font-semibold hover:bg-emerald-600"
        >
          Add Expense
        </Button>
      </form>
    </div>
  );
};

export default ExpenseForm;
