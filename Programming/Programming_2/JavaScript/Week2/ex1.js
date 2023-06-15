// Use map to create a array of an attribute
let john = { name: "John", surname: "Smith", id: 1, age: 25 };
let pete = { name: "Pete", surname: "Hunt", id: 2, age: 30 };
let mary = { name: "Mary", surname: "Key", id: 3, age: 28 };

let users = [john, pete, mary];

let names = users.map(items => items.name)

console.log(names); // John, Pete, Mary


let usersMapped = users.map(items => (
    {
        fullName: `${items.name} ${items.surname}`,
        id: items.id
    }));

let arr = [pete, john, mary];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}


// A good random sorting fucntion
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

console.log(usersMapped[0].id) // 1
console.log(usersMapped[0].fullName) // John Smith

sortByAge(arr)

console.log(arr)

// counts of appearances for all possible permutations
let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
};

for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
}

// show counts of all possible permutations
for (let key in count) {
    console.log(`${key}: ${count[key]}`);
}

// Get avarage
function getAvarageAge(array) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAvarageAge(arr))

// Get an array of uniques
function unique(arr) {
    let array = [];
    for (let str of arr) {
        if (!array.includes(str)) {
            array.push(str);
        }
    }
    return array;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O

// create objects from array
function groupById(array) {
    return array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {})
}

let usersById = groupById(users);
console.log(usersById)