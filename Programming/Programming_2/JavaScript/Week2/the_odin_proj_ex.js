const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

function getTheOldest(array) {
    const currentYear = new Date().getFullYear();
    array.map((person) => person.yearOfDeath == null ? person.age = (currentYear - person.yearOfBirth) : person.age = (person.yearOfDeath - person.yearOfBirth));
    array.sort((a, b) => a.age > b.age ? -1 : 1);
    return array[0];
}

const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function (array) {
    return array.reduce((oldest, currentPerson) => {
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const currentAge = getAge(
            currentPerson.yearOfBirth,
            currentPerson.yearOfDeath
        );
        return oldestAge < currentAge ? currentPerson : oldest;
    });
};

console.log(findTheOldest(people));
console.log(getTheOldest(people));