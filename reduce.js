const arr = [10, 20, 30, 40, 50];

const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// console.log(sum);


const cart = [
  { id: 1, productName: "Laptop", price: 1200 },
  { id: 2, productName: "Smartphone", price: 800 },
  { id: 3, productName: "Headphones", price: 150 },
  { id: 4, productName: "Keyboard", price: 100 },
  { id: 5, productName: "Mouse", price: 50 }
];


const cartTotal = cart.reduce((accumulator, product) => accumulator + product.price, 0);

console.log(cartTotal);
