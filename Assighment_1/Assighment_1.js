console.log("#".repeat(30));
console.log(
  "%cDestructuring Arrays-Objects-Parameters|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_1

let myNumbers = [1, 2, 3, 4, 5];

[a, , , , e] = myNumbers;

console.log(a * e); // 5
