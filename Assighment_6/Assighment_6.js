console.log("#".repeat(30));
console.log(
  "%cDestructuring Arrays-Objects-Parameters|Chalenges|Assighnments",
  "color: #ff3377; font-size: 20px; font-weight: bold"
);
console.log("#".repeat(30));

// Assighment_6

let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

if (chosen === 1) {
  [
    {
      title,
      age,
      available,
      skills: [, skill],
    },
  ] = myFriends;
} else if (chosen === 2) {
  [
    ,
    {
      title,
      age,
      available,
      skills: [, skill],
    },
  ] = myFriends;
} else if (chosen === 3) {
  [
    ,
    ,
    {
      title,
      age,
      available,
      skills: [, skill],
    },
  ] = myFriends;
}

available = available ? "Available" : "Not Available";

console.log(title);
console.log(age);
console.log(available);
console.log(skill);

// If chosen === 1

// ("Osama");
// 39;
// ("Available");
// ("CSS");

// If chosen === 2

// ("Ahmed");
// 25;
// ("Not Available");
// ("Django");

// If chosen === 3

// ("Sayed");
// 33;
// ("Available");
// ("Laravel");
