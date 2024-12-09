## Frontend Advent Calendar 2024

### 🎄 For Whom:
This advent calendar is designed for frontend developers and anyone passionate about web development.
Whether you’re a experienced professional or just starting your journey, this calendar offers something valuable for everyone.

### ✨ What It’s About:
Each day reveals a new interactive challenge, tutorial, or feature focused on frontend development.
Topics include cutting-edge JavaScript and CSS features from the last few years, including those with limited availability or newly supported in modern browsers.
Think of it as a fun and educational countdown to Christmas, combining the joy of learning with the holiday spirit!

### Day 2: CSS - Scroll-Driven Animations
- Task: Animate a Header’s Size While Scrolling.
- Steps:
1.	Use @scroll-timeline to link scrolling progress to a CSS animation.
2.	Create a keyframe animation for the header’s height and font size.
3.	Apply the animation using animation-timeline.
- DX Improvement: Removes the need for complex JavaScript scroll listeners, making animations smoother and more declarative.

### Day 4: CSS - Container Queries
- Task: Create a Responsive Product Card.
- Steps:
1.	Design a card layout that adjusts from vertical to horizontal at 500px container width.
2.	Use @container to conditionally apply styles.
- DX Improvement: Allows truly modular components that adapt to their containers without relying on global breakpoints.

### Day 6: CSS - :has() Pseudo-Class
- Task: Enable Submit Button Conditionally.
- Steps:
1.	Style a submit button to remain disabled unless all form fields are valid.
2.	Use :has(:invalid) to dynamically toggle styles.
- DX Improvement: Reduces reliance on JavaScript for interactive form behavior, improving maintainability.

### Day 7: JavaScript - RegExp ‘v’ Flag
- Task: Validate Emoji-Only Input.
- Steps:
1.	Write a regular expression using the ‘v’ flag to match only Unicode emojis.
2.	Validate and sanitize user input in a web form.
- DX Improvement: Simplifies Unicode handling, improving accuracy and eliminating the need for verbose regex patterns.

### Day 8: CSS - @property for Custom Properties
- Task: Animate a Button’s Background on Hover.
- Steps:
1.	Use @property to define an animatable --bg-color.
2.	Apply the background color dynamically on hover with smooth transitions.
- DX Improvement: Enables animation of CSS variables directly, avoiding JavaScript workarounds for dynamic styling.

### Day 9: JavaScript - Decorators
- Task: Automatically Log Method Calls in a Class.
- Steps:
1.	Write a @log decorator to log method names and arguments.
2.	Apply it to methods in a user management class (e.g., login and logout).

Mock data:
```
class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    return `${this.name} has logged in.`;
  }
  logout() {
    return `${this.name} has logged out.`;
  }
}
```
- DX Improvement: Simplifies repetitive meta-programming tasks, improving code modularity and clarity.

### Day 10: CSS - Individual Transform Properties
- Task: Add Interactive Transform Effects.
- Steps:
1.	Create a button that rotates slightly on hover and scales up on click.
2.	Use rotate and scale independently for smooth animations.
- DX Improvement: Reduces reliance on the complex transform shorthand, improving readability and maintainability.

### Day 11: JavaScript - Promise.withResolvers
- Task: Create a Debounced Search Box.
- Steps:
1.	Use Promise.withResolvers to debounce API calls during user input.
2.	Only trigger the API call if no input occurs for 300ms.
- DX Improvement: Simplifies promise-based workflows by avoiding manual resolve and reject handling.

### Day 12: CSS - New Color Functions
- Task: Build a Smooth Dark Mode Toggle.
- Steps:
1.	Use color-mix() to transition between light and dark themes.
2.	Apply the colors to the background and text dynamically.
- DX Improvement: Eliminates the need for JavaScript or preprocessors for color calculations, improving code simplicity.

### Day 13: JavaScript - Atomics.waitAsync
- Task: Synchronize Worker Progress.
- Steps:
1.	Use SharedArrayBuffer and Atomics.waitAsync to track progress across multiple workers.
2.	Log when all workers have completed their tasks.

Mock data:
```
const sharedBuffer = new SharedArrayBuffer(4); // 4 bytes for one integer
const sharedArray = new Int32Array(sharedBuffer);
// Simulating worker progress
const workers = [
  { id: 1, name: "Worker 1", progress: 0 },
  { id: 2, name: "Worker 2", progress: 0 },
  { id: 3, name: "Worker 3", progress: 0 }
];
```
- DX Improvement: Enables efficient synchronization in multithreaded JavaScript applications.

### Day 14: CSS - Nesting
- Task: Refactor a Component’s Styles.
- Steps:
1.	Take a complex stylesheet for a card component and refactor it to use nesting.
2.	Group related styles hierarchically to reduce redundancy.
- DX Improvement: Improves stylesheet readability and organization, reducing maintenance overhead.

### Day 15: JavaScript - String.toWellFormed
- Task: Sanitize User Input for Unicode Compliance.
- Steps:
1.	Write a function that accepts any user input string.
2.	Use .toWellFormed() to ensure the string has no invalid surrogate pairs.
3.	Log or display the sanitized string to confirm it’s valid.
- DX Improvement: Simplifies handling of malformed Unicode without manual checks or third-party libraries.

### Day 16: CSS - Subgrid
- Task: Align Nested Grids with Parent Grid.
- Steps:
1.	Create a parent grid layout with defined columns and rows.
2.	Add nested child elements that use subgrid to inherit column alignment.
3.	Style the nested grid to seamlessly align with the parent structure.
- DX Improvement: Simplifies nested layouts by eliminating the need to replicate grid definitions, reducing redundancy.

### Day 17: JavaScript - Object.groupBy
- Task: Group Transactions by Category.
- Steps:
1.	Take an array of transaction objects with properties like category and amount.
2.	Use Object.groupBy to organize transactions by category.
3.	Calculate and log total amounts per category.

Mock data:
```
const transactions = [
  { id: 1, amount: 500, category: "Food" },
  { id: 2, amount: 200, category: "Transport" },
  { id: 3, amount: 800, category: "Shopping" },
  { id: 4, amount: 150, category: "Food" },
  { id: 5, amount: 300, category: "Transport" }
];
```
- DX Improvement: Reduces boilerplate for grouping arrays, making it more intuitive and easier to read.

### Day 18: CSS - :is() Pseudo-Class
- Task: Simplify Shared Heading Styles.
- Steps:
1.	Apply common styles (e.g., color, font size) to h1, h2, and h3 using :is().
2.	Combine it with hover styles to apply consistent interactivity.
- DX Improvement: Avoids repetitive rules for selectors, reducing code size and improving maintainability.

### Day 19: JavaScript - WeakRefs Improvements
- Task: Implement a Lightweight Cache.
- Steps:
1.	Create a cache system that uses WeakRef for temporary storage of expensive computations.
2.	Test the cache by accessing or recreating values if they are garbage-collected.
- DX Improvement: Allows efficient memory management for temporary data, making applications more performant.

### Day 20: CSS - Media Query Range Syntax
- Task: Create Responsive Font Scaling.
- Steps:
1.	Use media queries with the new range syntax (width >= 400px) and (width <= 800px).
2.	Scale font sizes smoothly between 16px and 24px across this range.
- DX Improvement: Simplifies media query definitions, improving readability and reducing errors in responsive designs.

### Day 21: JavaScript - Symbol.hash
- Task: Use Hashable Objects as Map Keys.
- Steps:
1.	Define a custom object with Symbol.hash to create a unique hashable identifier.
2.	Store and retrieve the object from a Map using its hash.

Mock data:
```
class CustomObject {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
  [Symbol.hash]() {
    return `${this.id}-${this.name}`;
  }
}
const obj1 = new CustomObject(1, "Alice");
const obj2 = new CustomObject(2, "Bob");
const obj3 = new CustomObject(3, "Charlie");
```
- DX Improvement: Solves the problem of using complex objects as map keys, improving data structure flexibility.

### Day 22: CSS - Accent-Color Property
- Task: Style a Form with Accent Colors.
- Steps:
1.	Apply a consistent accent-color to all form controls (checkboxes, radio buttons, progress bars).
2.	Add hover and focus styles for interactivity.
- DX Improvement: Provides a simple, declarative way to style form controls consistently without custom styling for each.

### Day 23: JavaScript - Async Context
- Task: Track User Sessions Across Async Calls.
- Steps:
1.	Use AsyncContext to store and retrieve session-related data (e.g., user ID) across asynchronous API calls.
2.	Test the context propagation by logging data in each async function.
- DX Improvement: Simplifies context management across asynchronous workflows, avoiding manual parameter passing.
