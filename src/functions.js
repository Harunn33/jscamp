function addToCart(productName, quantity) {
  console.log("Sepete eklendi : " + productName + " Adet : " + quantity);
}
addToCart("Bilgisayar", 10);

let sayHello = () => {
  console.log("Hello World");
};
sayHello();

let addToCart2 = () => {};
let product1 = { productName: "Elma", unitPrice: 10, quantity: 5 };
let product2 = { productName: "Armut", unitPrice: 8, quantity: 15 };
let product3 = { productName: "Ayva", unitPrice: 3, quantity: 10 };

let addToCart3 = (product) => {
  console.log(
    "Ürün : " +
      product.productName +
      " Fiyat : " +
      product.unitPrice +
      " Adet : " +
      product.quantity
  );
};
addToCart3(product1);

function addToCart4(products) {
  console.log(products);
}
let products = [
  { productName: "Elma", unitPrice: 10, quantity: 5 },
  { productName: "Armut", unitPrice: 8, quantity: 15 },
  { productName: "Ayva", unitPrice: 3, quantity: 10 },
];
addToCart4(products);

//rest operatörü
function add(...numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log(total);
}
add(20, 30);
// add(2, 3, 4);
// add(2, 3, 4, 5, 6, 7, 8, 9);

let numbers = [10, 20, 30, 40, 300, 400];
// console.log(...numbers); ///spread ayrıştırır
console.log(Math.max(...numbers));

let [
  icAnadolu,
  marmara,
  karadeniz,
  [icAnadoluSehirleri, marmaraSehirleri, karadenizSehirleri],
] = [
  { name: "İç Anadolu", population: "20M" },
  { name: "Marmara", population: "30M" },
  { name: "Karadeniz", population: "10M" },
  [
    ["Ankara", "Konya"],
    ["İstanbul", "Bursa"],
    ["Sinop", "Trabzon"],
  ],
];
// console.log(marmara);
console.log(icAnadoluSehirleri);

let newProductName, newUnitPrice, newQuantity;
({
  productName: newProductName,
  unitPrice: newUnitPrice,
  quantity: newQuantity,
} = {
  productName: "Elma",
  unitPrice: 10,
  quantity: 5,
});
console.log(newProductName);
console.log(newUnitPrice);
console.log(newQuantity);
