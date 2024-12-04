function sumThree (a, b, c ) {
    return a+b+c;
}

 
function isNegative(num) {
    return num < 0;
}


function multuply(a, b) {
    return a * b;
}

function isInteger(a) {
    return Number.isInteger(a)
}

function percentage(total, percent) {
    return percent * 100 / total
}


function lastChar(str) {
    return str.slice(-1);
}

function toLower(str) {   
    return str.toLowerCase();
}

function contains(str, subStr) {
    return str.includes(subStr);
}

function repeatTwice(str) {
    return str+str;
}
 
function trimSpaces(str) {
    return str.trim();
}


function andNot(a, b) {
    return a && !b;
}

function isTrue(value) {
    return value;
}

function isSame(a, b) {
    return a == b;
}

function xor(a, b) {
    return (a || b) && !(a && b); 
}
 
function toggle(value) {
    return !value;
}


function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}

function getKeys(obj) { return Object.keys(obj).join(', '); }

function isEqual(obj1, obj2) {
    return obj1 === obj2;
}

function removeKey(obj, key) { delete obj[key]; }

function isValueEqual(obj, key, value) { return obj[key] === value; }


function createArray(start, end) { 
let array = [];
for (let i = start; i <= end; i++) { 
    array.push(i);
} 
    return array;
}

function contains(array, element) {
    return array.includes(element);
}

function getLength(array) {
    return array.length;
}

function addToEnd(array, element) {
    array.push(element);
    return array;
}

function getLastElement(array) {
    return array[-1];
}


function logElements(array) {
    array.forEach(element => {
        console.log(element);
    });
}

function sumArray(array) {
   let sum = 0;
array.forEach(num => {sum += num;});
    return array;
}

function toUpperCase(array) {
    array.forEach((str) => {
        if (typeof str === 'string') {
            console.log(str.toUpperCase());
        }
    });
}

function countNegatives(array) {
let count = 0;
    array.forEach(num => {
        if(num < 0){
            count++;
        }
    });
return count;
}

function logEven(array) {
    array.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}


function squareNumbers(array) {
    return array.map(num => num * num);
}

function doubleElements(array) {
    return array.map(num => num * 2);
}

function getFirstLetters(array) {
    return array.map(str => str.charAt(0));
}

function addPrefix(array, prefix) {
    return array.map(str => prefix + str);
}

function numbersToStrings(array) {
    return array.map(num => num.toString());
}


