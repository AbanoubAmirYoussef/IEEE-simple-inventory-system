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
