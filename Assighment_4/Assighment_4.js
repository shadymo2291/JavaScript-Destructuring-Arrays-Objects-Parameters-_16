console.log("#".repeat(30));
console.log(
  "%cDestructuring Arrays-Objects-Parameters|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_4

const member = {
  age: 30,
  working: false,
  country: "Egypt",
  hobbies: ["Reading", "Swimming", "Programming"],
};

({ age: a, working: w } = member);

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// My Age Is 30 And Iam Not Working

({ country: c } = member);

console.log(`I Live in ${c}`);
// I Live in Egypt

({
  hobbies: [h1, , h3],
} = member);

console.log(`My Hobbies: ${h1} And ${h3}`);
// My Hobbies: Reading And Programming
