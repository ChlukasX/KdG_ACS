function range(start, end) {
    let array = [];
    for (let i = start; i <= end; i++) {
        array.push(i);
    }
    return array;
}

function sum(array){
    let sum = 0;
    for (let i in array){
        sum += array[i];
    }
    return sum;
}

console.log(sum(range(11, 10)));