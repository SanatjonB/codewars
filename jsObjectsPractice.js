// Challenge for You
// Create an object called car with properties: brand, model, and year.
// Add a method getDetails that returns a string: "Brand: [brand], Model: [model], Year: [year]".
// Use Object.keys to log all keys of the object.
// Use delete to remove the year property and log the updated object.
const car = {
  brand: "Nissan",
  model: "Hell Cat",
  year: 2024,
  getDetails: function () {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  },
};
console.log(Object.keys(car));
delete car.year;
console.log(car);
