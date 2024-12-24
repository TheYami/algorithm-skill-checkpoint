function findProductPrice(products, name) {
  let min = 0;
  let max = products.length - 1;
  
  while(min <= max){
    const mid = Math.floor((max-min)/2)
    if(products[mid].name === name){
      return products[mid].price
    }else if(products[mid].name < name){
      min = mid + 1
    }else{
      max = mid - 1
    }
  }
  return -1
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
];

console.log(findProductPrice(products, "Banana")); // Output: 0.8
console.log(findProductPrice(products, "Durian")); // Output: -1
