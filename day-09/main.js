import "./styles.css";

const transactions = [
  { id: 1, amount: 500, category: "Food" },
  { id: 2, amount: 200, category: "Transport" },
  { id: 3, amount: 800, category: "Shopping" },
  { id: 4, amount: 150, category: "Food" },
  { id: 5, amount: 300, category: "Transport" },
];

// Group transactions by category using Object.groupBy
const groupedTransactions = {};

// Render grouped transactions
const groupedTransactionsContainer = document.getElementById(
  "grouped-transactions",
);
groupedTransactionsContainer.innerHTML = `
  <ul>
    ${Object.entries(groupedTransactions)
      .map(
        ([category, transactions]) => `
      <li>
        <p>${category}:</p>
        <ul>
          ${transactions
            .map(
              (transaction) =>
                `<li>id: ${transaction.id}, amount: ${transaction.amount}</li>`,
            )
            .join("")}
        </ul>
      </li>
    `,
      )
      .join("")}
  </ul>
`;
