// task 1
const arr = ['Vasya', 'Petya', 'Alexey'];
function removeUser(array, index) {
    array.splice(index, 1);
}

removeUser(arr, 1);
console.log(arr);

// task 2
const obj = { name: 'Vasya', age: 1}
function getAllKeys(object) {
    return Object.keys(object);
}

console.log(getAllKeys(obj)); 

// task 3
function getAllValues(object) {
    return Object.values(object);
}

console.log(getAllValues(obj)); 
