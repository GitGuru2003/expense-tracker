import React from "react";
import "../App.css";

const Navbar = () => {
  return (
    <nav className="bg-emerald-700 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-center p-4">
        <h4 className="text-xl font-bold">Expense Tracker</h4>
      </div>
    </nav>
  );
};

export default Navbar;
