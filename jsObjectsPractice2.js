// Challenge for You
// Create an object laptop with properties:
// brand, model, and a nested specs object with processor and ram.
// Destructure the brand and model into variables.
// Destructure the processor and ram from the nested specs object.
// Log all the destructured values.

const laptop = {
  brand: "Acer",
  model: "Nitro",
  specs: {
    processor: "Intel i7-12700k",
    ram: "32gb",
  },
};
const { brand, model } = laptop;
const {
  specs: { processor, ram },
} = laptop;

console.log(brand, model, processor, ram);
