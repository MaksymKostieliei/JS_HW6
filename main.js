// task 1
const arr = ['Vasya', 'Petya', 'Alexey'];
function removeUser(array, index) {

    array.splice(index, 1);
}

removeUser(arr, 1);
// console.log(arr);

// task 2
const obj = { name: 'Vasya', age: 1}
function getAllKeys(object) {

    return Object.keys(object);
}

// console.log(getAllKeys(obj)); 

// task 3
function getAllValues(object) {

    return Object.values(object);
}

// console.log(getAllValues(obj)); 


//task 4
function insertIntoArr(obj, id) {  
    let i = null;
    
    condidateArr.forEach(function (element, index) {
        if (element._id === id) {
            i = index;           
        }
    });

    return condidateArr.splice(i, 0, obj);   
}

insertIntoArr('RESULT', '5e216bc92864acb9f35ad276');
// console.log(condidateArr);


//task 5
class Condidate {
    constructor(person) {
        Object.assign(this, person);
    }

    get state () {
        let stateArr = this['address'].split(', ');
        return stateArr[2];
    }
}

const condidate = new Condidate(condidateArr[8]);

// console.log(condidate.state);


//task 6
function getCompanyNames() {
    let result = condidateArr.map(element => {
       return element['company'];
    });

    return result;
}

// console.log(getCompanyNames());

//task 7

function getUsersByYear(year) {
    let result = [];    

    condidateArr.forEach(element => {
        let registeredYear = '';

        if (element['registered']) {
            registeredYear = element['registered'].split('-')[0];
        }
        
        if (registeredYear == year) {
        result.push(element['_id'])}
    });

    return result;
}
 
// console.log(getUsersByYear(2018));  

//task 8

function getCandidatesByUnreadMsg(number) {   

    let result = [];

    condidateArr.forEach(element => {
        let greetingArr = [];

        if (element["greeting"]) {
            greetingArr = element["greeting"].split(" ");
        }

        let numberOfMsg = greetingArr[greetingArr.length - 3];

        if (numberOfMsg == number) {
            const condidate = new Condidate(element);
            result.push(condidate);
        }
    });

    return result;
}

// console.log(getCandidatesByUnreadMsg(2));

//task 9

function getCandidatesByGender(gender) {
    let result = condidateArr.filter(condidate => condidate['gender'] === gender);
    return result;
}

console.log(getCandidatesByGender('male'));


