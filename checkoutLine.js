let eggs = {
  itemName: 'dozen eggs',
  quantity: 2,
  price: 0.99
};

let milk = {
  itemName: 'gallon of milk',
  quantity: 1,
  price: 2.99
};

let bread = {
  itemName: 'loaf of bread',
  quantity: 1,
  price: 3.50
};

let coffee = {
  itemName: 'lbs. of coffee',
  quantity: 10,
  price: 8.99
};

let shoppingCart = [eggs, milk, bread, coffee];

let coffeeItem = shoppingCart.find((item) => item.itemName === `lbs. of coffee`);

let milkItem = shoppingCart.find((item) => item.itemName === `gallon of milk`);

console.log(`One pound of coffee is $${coffeeItem.price}.`);
console.log(`There are ${milkItem.quantity} gallons of milk in the cart.`);

let total = 0;
const TAX_RATE = 6.25;
shoppingCart.forEach((item) => {
  total = total + item.price * item.quantity;
});

console.log(`SUBTOTAL: ${total}`);
console.log(`TOTAL:${total * (1 + (TAX_RATE / 100))}`);
