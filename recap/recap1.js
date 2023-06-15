const animals = [
  {
    name: "elephant",
    age: 10,
  },
  {
    name: "puma",
    age: 4,
  },
  {
    name: "tiger",
    age: 6,
  },
  {
    name: "lobster",
    age: 100,
  },
];

console.log(animals.filter((animals) => animals.age >= 10));

let avgAge =
  animals.reduce((prev, animal) => prev + animal.age, 0) / animals.length;
console.log(avgAge);

function calculate(funct, data, char) {
  if (data.length < 2) {
    throw new Error("Error: data to small");
  }
  data.map(d => $)
}
