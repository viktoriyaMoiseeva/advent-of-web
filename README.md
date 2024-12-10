## Frontend Advent Calendar 2024

### 🎄 For Whom:
Haven’t been keeping up with the latest frontend trends?
This advent is perfect for you to explore and experiment with new web technologies and features that have emerged in recent years.
Whether you’re a experienced professional or just starting your journey, this calendar offers something valuable for everyone.

### ✨ What It’s About:
Each day reveals a new interactive challenge, tutorial, or feature focused on frontend development.
Topics include cutting-edge JavaScript and CSS features from the last few years, including those with limited availability or newly supported in modern browsers.
Think of it as a fun and educational countdown to Christmas, combining the joy of learning with the holiday spirit!

### 🛠️ Requirements:
A latest version of Chrome browser.

TODO:
- [] page view transition?
- [] transfer 'task pages' to codepen sandboxes
- [] https://blog.saeloun.com/2023/08/11/2023-ecmascript-2023-new-features/

### Day 1: CSS - Scroll-Driven Animations
- Task: Animate a Header’s Size While Scrolling.
- Steps:
1.	Use @scroll-timeline to link scrolling progress to a CSS animation.
2.	Create a keyframe animation for the header’s height and font size.
3.	Apply the animation using animation-timeline.
- DX Improvement: Removes the need for complex JavaScript scroll listeners, making animations smoother and more declarative.

### Day 2: CSS - Container Queries
- Task: Create a Responsive Product Card.
- Steps:
1.	Design a card layout that adjusts from vertical to horizontal at 500px container width (more than 500px - horizontal view).
2.	Use @container to conditionally apply styles.
- DX Improvement: Allows truly modular components that adapt to their containers without relying on global breakpoints.

### Day 3: CSS - :has() Pseudo-Class
- Task: Enable Submit Button Conditionally.
- Steps:
1.	Style a submit button to remain disabled unless all form fields are valid.
2.	Use :has(:invalid) to dynamically toggle styles.
- DX Improvement: Reduces reliance on JavaScript for interactive form behavior, improving maintainability.

### Day 4: CSS - Scroll-Driven Animations 2
- Task: Animate the Card’s Size And Background While Scrolling.
- Steps:
1.	Create a card that scales from 0.6 to 1 and changes its background color as it scrolls into view
2.	Use the view() function to define the animation based on the element’s visibility in the viewport.
- DX Improvement: Simplifies scroll-driven animations without relying on JavaScript, improving performance and maintainability.

### Day 5: Web API - Popover API with Anchor Positioning
- Task: Implement a Custom Popover Component.
- Steps:
1.	Create a custom popover component that displays content on hover.
2.	Use the Popover API to manage the popover’s visibility.
3.  Use the Anchor Positioning API to position the popover relative to the anchor element.
- DX Improvement: Simplifies the creation of interactive components with built-in popover functionality.

### Day 6: CSS - text-wrap: balance
- Task: Implement Balanced and Aesthetically Pleasing Text Wrapping.
- Steps:
1.	Use the text-wrap: balance property on the paragraphs to enable balanced text wrapping.
2.	Implement fallbacks or feature queries to maintain graceful degradation in browsers that do not support text-wrap: balance yet.
- DX Improvement: Simplifies the creation of interactive components with built-in popover functionality.

### Day 7: CSS - light-dark() Function
- Task: Implement a Light-Dark Theme.
- Steps:
1.  Set "color-scheme: light dark" to enable the light-dark() color function for the document.
1.	Define CSS variables for primary colors (text color and background color) used for both light and dark themes using light-dark() function.
2.  Highlight how the light-dark() function simplifies theme management compared to manually toggling classes or redefining variables.
- DX Improvement: Simplifies theme management and enhances user experience by enabling dynamic color adjustments based on the selected theme.

### Day 11: JavaScript - Promise.withResolvers
- Task: Create a Reusable Deferred Promise Wrapper
- Steps:
1.	Before implementing Promise.withResolvers(), review how to create a deferred promise using external resolve and reject variables
2.	Create a function createDeferred() that leverages Promise.withResolvers() to return an object containing the promise, and its resolve and reject functions.
3.	Use the createDeferred() function to create multiple promises. Demonstrate resolving and rejecting these promises from outside the executor function.
4.  Notice how Promise.withResolvers() simplifies the code by eliminating the need for external variables.
- DX Improvement: Simplifies promise-based workflows by avoiding manual resolve and reject handling.

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
