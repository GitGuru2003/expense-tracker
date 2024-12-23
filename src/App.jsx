import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import "./App.css";
import dummy_data from "./dummy_data.json";

const App = () => {
  const [expenses, SetExpenses] = useState(() => {
    const storedItems = localStorage.getItem("expenses");
    return storedItems ? JSON.parse(storedItems) : dummy_data;
  });

  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const onAddExpense = (expense) => {
    expense.title.trim().length > 0 &&
    (expense.amount !== null ||
      !isNaN(expense.amount) ||
      parseFloat(expense.amount) > 0)
      ? SetExpenses((prevExpenses) => {
          return [expense, ...prevExpenses];
        })
      : alert("Please input valid data");
  };

  const onDeleteExpense = (id) => {
    SetExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => {
        return expense.id !== id;
      });
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4">
        <div className="flex justify-center items-start gap-4">
          <div className="w-1/3">
            <ExpenseForm onAddExpense={onAddExpense} />
          </div>
          <div className="w-2/3">
            <ExpenseList
              expenses={expenses}
              onDeleteExpense={onDeleteExpense}
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
