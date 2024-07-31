class Order {
  public items: Item[];

  constructor() {
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  calculateTotal() {
    let total = 0;
    for (const item of this.items) {
      total += item.price;
    }
    return total;
  }
}

class Item {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

class OrderPrinter {
  print(order: Order) {
    console.log('Order Details:');
    for (const item of order.items) {
      console.log(`- ${item.name}: $${item.price}`);
    }
    console.log(`Total: $${order.calculateTotal()}`);
  }
}

const order = new Order();
order.addItem(new Item('Shirt', 20));

order.addItem(new Item('Pants', 50));

order.addItem(new Item('Shoes', 100));

order.addItem(new Item('Hat', 10));

const orderPrinter = new OrderPrinter();
orderPrinter.print(order);
