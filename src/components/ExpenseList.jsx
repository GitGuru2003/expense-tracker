import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ExpenseList = ({ expenses, onDeleteExpense }) => {
  const [search, SetSearch] = useState("");
  const [searchResult, SetSearchResult] = useState([]);
  const [totalAmount, SetTotalAmount] = useState(0);

  useEffect(() => {
    SetSearchResult(expenses);
  }, [expenses]);

  const searchExpense = (e) => {
    e.preventDefault();

    let result = expenses.filter((expense) => {
      return expense.title.toLowerCase().includes(search.toLowerCase());
    });
    SetSearchResult(result);
  };

  return (
    <div className="w-full p-4 bg-gray-100 rounded flex flex-col gap-4">
      <form onSubmit={searchExpense} className="flex items-center gap-4 mb-4">
        <TextField
          type="text"
          variant="outlined"
          placeholder="Search By Title"
          value={search}
          onChange={(e) => SetSearch(e.target.value)}
          className="flex-grow bg-white shadow-sm rounded"
          InputProps={{
            style: { backgroundColor: "#fff", padding: "10px" },
          }}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          className="shadow-sm"
        >
          Search
        </Button>
      </form>

      <div>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border px-4 py-2 text-left">Title</th>
              <th className="border px-4 py-2 text-left">Amount</th>
              <th className="border px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {searchResult.length > 0 ? (
              searchResult.map((item) => (
                <tr
                  key={item.id}
                  className="hover:bg-gray-100 transition-colors duration-200"
                >
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">$ {item.amount}</td>
                  <td className="border px-4 py-2">
                    <FaRegEdit className="inline mr-2" />
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => onDeleteExpense(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="3"
                  className="border px-4 py-2 text-center text-gray-500"
                >
                  No Expenses to show
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
