function createItem(name, category, price, stock) {
  let checkInventory = () => {
    for (let i = 0; i < inventory.items.length; i++) {
      if (inventory.items[i].name === name) {
        return true;
      }
    }
    return false;
  };

  if (!checkInventory()) {
    let item = {
      name: name || "Unknown",
      category: category || "Unknown",
      price: price || 0,
      stock: stock || 0,
      updateStock: function (newStock) {
        if (typeof newStock === "number" && newStock >= 0) {
          this.stock = newStock;
          return "Stock updated successfully";
        } else {
          return "Invalid stock value";
        }
      },
      applyDiscount: function (discount) {
        if (
          typeof discount === "number" &&
          discount >= 0 &&
          discount <= this.price
        ) {
          this.price -= discount;
          return "Discount applied successfully";
        } else {
          return "Invalid discount value";
        }
      },
    };
    return item;
  } else {
    return "Item already exists";
  }
}
let inventory = {
  items: [],
  addItem: function (item) {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === item.name) {
        return "Item already exists";
      }
    }
    if (item) {
      this.items.push(item);
      return "Item added successfully";
    } else {
      return "Can't add item";
    }
  },
  removeItem: function (itemName) {
    if (itemName) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === itemName) {
          this.items.splice(i, 1);
          return "Item removed successfully";
        }
      }
      return "Item not found";
    } else {
      return "Can't remove item without item name";
    }
  },
  getItem: function (itemName) {
    if (itemName) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === itemName) {
          return this.items[i];
        }
      }
      return "Item not found";
    } else {
      return "Can't get item without item name";
    }
  },
  filterItems: function (predicate) {
    if (predicate) {
      return this.items.filter(predicate);
    } else {
      return "Can't filter item without predicate";
    }
  },
};

// Create several item instances and add them to the inventory (Test the code)
let Laptop = createItem("Laptop", "Electronics", 30000, 8);
let PhoneCharger = createItem("Phone Charger", "Electronics", 180, 15);
let UsbC = createItem("UsbC", "Electronics", 45, 20);
let Pen = createItem("Pen", "Library", 6, 12);
let Notebook = createItem("Notebook", "Library", 10, 12);
inventory.addItem(Laptop);
inventory.addItem(PhoneCharger);
inventory.addItem(Pen);
inventory.addItem(Notebook);
inventory.addItem(UsbC);
console.log(inventory);
Laptop.applyDiscount(2500);
console.log(inventory.getItem("Phone Charger"));
inventory.removeItem("UsbC");

let electronicsItems = inventory.filterItems(
  (element) => element.category === "Electronics"
);
let stockItems = inventory.filterItems((element) => element.stock <= 10);
console.log(electronicsItems);
console.log(stockItems);
