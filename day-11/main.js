import "./styles.css";

const colors = ["Red", "Blue", "Green", "Yellow"];

// Old Way: Using Array Copy and Splice (Manual Immutability)
const oldReplaced = [...colors];
oldReplaced.splice(-1, 1, 'Black');

// New Way: Using `with` for Immutability
const newReplaced = colors.with(-1, 'Black');

// Output Results
const output = document.getElementById("output");
output.innerHTML = `
  <h2>Colors Array</h2>
  <p><strong>Original:</strong> ${JSON.stringify(colors)}</p>
  <p><strong>Old Way (Manually Replacing):</strong> ${JSON.stringify(oldReplaced)}</p>
  <p><strong>New Way (Using .with):</strong> ${JSON.stringify(newReplaced)}</p>
`;
