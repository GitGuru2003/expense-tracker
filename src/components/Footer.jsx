import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <footer className="bg-emerald-700 text-white p-4">
      <div className="container mx-auto text-center">
        <h4 className="text-lg font-semibold">Expense Tracker</h4>
        <p className="text-sm mt-1">
          &copy; {new Date().getFullYear()} Munib Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
