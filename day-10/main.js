import "./styles.css";

const numbers = [5, 3, 8, 1, 9, 2];
const names = ["Alice", "Bob", "Charlie", "Diana"];
const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];

// Old Methods (Mutating)
const oldSorted = numbers.sort((a, b) => b - a);
const oldReversed = names.reverse();
const oldSpliced = tasks.splice(1, 2);

// New Methods (Immutable)
const newSorted = numbers.toSorted((a, b) => b - a);
const newReversed = names.toReversed();
const newSpliced = tasks.toSpliced(1, 2);

// Output Results
const output = document.getElementById("output");

output.innerHTML = `
  <h2>Numbers</h2>
  <p><strong>Original:</strong> ${JSON.stringify(numbers)}</p>
  <p><strong>Old Sorted:</strong> ${JSON.stringify(oldSorted)}</p>
  <p><strong>New toSorted:</strong> ${JSON.stringify(newSorted)}</p>

  <h2>Names</h2>
  <p><strong>Original:</strong> ${JSON.stringify(names)}</p>
  <p><strong>Old Reversed:</strong> ${JSON.stringify(oldReversed)}</p>
  <p><strong>New toReversed:</strong> ${JSON.stringify(newReversed)}</p>

  <h2>Tasks</h2>
  <p><strong>Original:</strong> ${JSON.stringify(tasks)}</p>
  <p><strong>Old Spliced:</strong> ${JSON.stringify(oldSpliced)}</p>
  <p><strong>New toSpliced:</strong> ${JSON.stringify(newSpliced)}</p>
`;
