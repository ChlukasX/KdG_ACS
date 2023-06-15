const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    }
]

// function getTheTitles(array){
//     const titles = [];
//     books.forEach((entry) => {titles.push(entry.title)});
//     return titles;
// }

const getTheTitles = function (array) {
    return array.map((books) => books.title) 
}

console.log(getTheTitles(books)); // ['Book','Book2']
