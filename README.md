# Expense Tracker Application

A simple, user-friendly web application to track and manage your daily expenses. The app allows users to add, delete, search, and view their expenses in a table format. It uses React for the frontend and leverages localStorage for data persistence.

## Features

- **Add Expense**: Add new expenses with a title and amount.
- **Search Expenses**: Search for expenses by title using a dynamic search bar.
- **Delete Expense**: Remove specific expenses from the list.
- **Expense Table**: View all expenses in a neatly formatted table.
- **Total Amount**: Dynamically calculates and displays the total of all listed expenses.
- **Data Persistence**: Stores expense data in localStorage to ensure it persists across page reloads.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS, Material-UI
- **Icons**: react-icons
- **Data Storage**: localStorage

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: Comes bundled with Node.js

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd expense-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser at `http://localhost:5173`.

## File Structure

```
expense-tracker/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ExpenseForm.jsx
│   │   └── ExpenseList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── dummy_data.json
├── package.json
├── tailwind.config.js
└── README.md
```

## Usage

### Adding an Expense

1. Enter a title and amount in the provided form.
2. Click the "Add Expense" button to save the expense.

### Searching Expenses

1. Use the search bar to filter expenses by title.
2. The table updates dynamically based on your input.

### Deleting an Expense

1. Click the "Delete" button next to the expense you want to remove.

### Viewing Total Amount

- The total amount of all listed expenses is displayed above the table.

## Example Data

Sample data is included in `dummy_data.json` for initial testing. It is loaded into the app on first launch if no data exists in localStorage.

## Customization

- **Styling**: Modify `App.css` or integrate your preferred CSS framework.
- **Icons**: Replace or add icons using the `react-icons` library.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for review.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

## Acknowledgments

- [React.js Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material-UI](https://mui.com/)
