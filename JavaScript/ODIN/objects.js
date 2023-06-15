let users = new Object();

// let user = {
//     name: "luke",
//     age: 29
// }

// user["Is a Jedi"] = true; // adding varibale with value to the object user

// console.log(user.name);
// console.log(user.age);
// console.log(user["Is a Jedi"]);

// delete user["is a Jedi!"];


// let data = {};

// console.log("is there data.noSuchProperty:", data.noSuchProperty === undefined);

// for (const key in user) { // using for..in loop with object
//     console.log("object variable: ", key);
//     console.log("Variable value: ", user[key]);
// }


/* ODIN objects tasks */
// hello object 
let user = {};
user.name = "John";
user.surname = "Smith";
console.log(user.name);
console.log(user.surname);
user.name = "Pete"
console.log(user.name);
delete user.name;
console.log(user.name === undefined);
