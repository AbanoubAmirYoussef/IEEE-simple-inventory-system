function createItem(name, category, price, stock) {
  let item = {
    name: name || "Unknown",
    category: category || "Unknown",
    price: price || 0,
    stock: stock || 0,
    updateStock: function (newStock) {
      this.stock = newStock;
    },
    applyDiscount: function (discount) {
      this.price = this.price - discount;
    },
  };
  return item;
}

let inventory = {
  items: [],
  addItem: function (item) {
    if (item) {
      this.items.push(item);
    } else {
      return "Can't add item";
    }
  },
  removeItem: function (itemName) {
    if (itemName) {
      for (let i = 0; i < this.items.length; i++) {
        if (this.items[i].name === itemName) {
          this.items.splice(i, 1);
        }
      }
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
    } else {
      return "Can't add item without item name";
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
