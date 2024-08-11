// Inventory Management System

// Item constructor function
function Item(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

// Inventory object to hold all items
let inventory = {};

// Function to add an item to the inventory
function addItem(id, name, quantity, price) {
    if (inventory[id]) {
        console.log(`Item with ID ${id} already exists.`);
        return;
    }
    inventory[id] = new Item(id, name, quantity, price);
    console.log(`Item ${name} added to the inventory.`);
}

// Function to update an item in the inventory
function updateItem(id, name, quantity, price) {
    if (!inventory[id]) {
        console.log(`Item with ID ${id} does not exist.`);
        return;
    }
    inventory[id].name = name;
    inventory[id].quantity = quantity;
    inventory[id].price = price;
    console.log(`Item ${id} updated.`);
}

// Function to delete an item from the inventory
function deleteItem(id) {
    if (!inventory[id]) {
        console.log(`Item with ID ${id} does not exist.`);
        return;
    }
    delete inventory[id];
    console.log(`Item ${id} deleted from the inventory.`);
}

// Function to get an item by ID
function getItem(id) {
    if (!inventory[id]) {
        console.log(`Item with ID ${id} not found.`);
        return null;
    }
    return inventory[id];
}

// Function to print the entire inventory in JSON format
function printInventory() {
    console.log(JSON.stringify(inventory, null, 2));
}

// Example usage

// Initial Inventory
addItem(1, "Apple", 10, 0.5);
addItem(2, "Banana", 20, 0.2);
console.log("Initial Inventory:");
printInventory();

// Adding item
addItem(3, "Orange", 15, 0.7);
console.log("\nAdding item:");
printInventory();

// Updating item
updateItem(2, "Banana", 30, 0.2);
console.log("\nUpdating item:");
printInventory();

// Deleting item
deleteItem(2);
console.log("\nDeleting item:");
printInventory();
