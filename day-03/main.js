// Initial state: Immutable Record and Tuple
let cart = #{
  metadata: #{
    totalItems: 0,
    totalCost: 0,
  },
  items: #[],
};

// Utility: Add item to the cart
function addItem(cart, item) {
  const newItems = cart.items.concat(item); // Create a new Tuple with the item
  const newTotalCost = newItems.reduce((sum, item) => sum + item.price, 0); // Calculate new total cost

  return cart.with({
    metadata: cart.metadata.with({
      totalItems: newItems.length,
      totalCost: newTotalCost,
    }),
    items: newItems,
  });
}

// Utility: Remove item from the cart by name
function removeItem(cart, itemName) {
  const newItems = cart.items.filter((item) => item.name !== itemName); // Create a new Tuple without the item
  const newTotalCost = newItems.reduce((sum, item) => sum + item.price, 0); // Calculate new total cost

  return cart.with({
    metadata: cart.metadata.with({
      totalItems: newItems.length,
      totalCost: newTotalCost,
    }),
    items: newItems,
  });
}

// Example Usage

// Add items
cart = addItem(cart, { name: "Apple", price: 1.2 });
cart = addItem(cart, { name: "Banana", price: 0.8 });

console.log("Cart after adding items:", cart);

// Remove an item
cart = removeItem(cart, "Apple");
console.log("Cart after removing Apple:", cart);

// Original state is preserved due to immutability
