// index.js
// Simple script to store and display keys

// You can store your keys here
const keys = [
  "key_1_example",
  "key_2_example",
  "key_3_example"
];

// Display keys in order
console.log("Stored Keys:\n");
keys.forEach((key, index) => {
  console.log(`(${index + 1}) ${key}`);
});
