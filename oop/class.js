/* const products = [
  { id: 1, productName: "Laptop", price: 1200 },
  { id: 2, productName: "Smartphone", price: 800 },
  { id: 3, productName: "Headphones", price: 150 },
  { id: 4, productName: "Keyboard", price: 100 },
  { id: 5, productName: "Mouse", price: 50 }
]; 
*/

class Product {
  constructor(id, productName, price) {
    this.id = id;
    this.productName = productName;
    this.price = price;
  }

  successMessage(product) {
    console.log(`${product} added successfully!`);
  }
}

// const firstProduct = new Product(1, 'Laptop', 1200);
// console.log(firstProduct);
// firstProduct.successMessage(firstProduct.productName);

// const secondProduct = new Product(2, 'SmartPhone', 800);
// console.log(secondProduct);
// secondProduct.successMessage(secondProduct.productName);

const thirdProduct = new Product(3, 'Headphones', 150);
console.log(thirdProduct);
thirdProduct.successMessage(thirdProduct.productName);
