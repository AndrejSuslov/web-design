function sumThree (a, b, c ) {
    return a+b+c;
}
console.log(sumThree(1, 2 ,3));
 
function isNegative(num) {
    return num < 0;
}
console.log(isNegative(-8));

function multiply(a, b) {
    return a * b;
}
console.log(multiply(4, 7723));

function isInteger(a) {
    return Number.isInteger(a)
}
console.log(isInteger("Integer"));

function percentage(total, percent) {
    return percent * 100 / total
}
console.log(percentage(1238429, 382244));

function lastChar(str) {
    return str.slice(-1);
}
console.log(lastChar("qwertyui"));

function toLower(str) {   
    return str.toLowerCase();
}
console.log(toLower("QWERTYUIO"));

function contains(str, subStr) {
    return str.includes(subStr);
}
console.log(contains("qwertyuio", "ert"));

function repeatTwice(str) {
    return str+str;
}
console.log(repeatTwice("QWERT_Y"));
 
function trimSpaces(str) {
    return str.trim();
}
console.log(trimSpaces("     QWERTYUIO     "));

function andNot(a, b) {
    return a && !b;
}
console.log(andNot(true, false));

function isTrue(value) {
    return value;
}
console.log(isTrue(true));

function isSame(a, b) {
    return a === b;
}
console.log(isSame(12, 12));

function xor(a, b) {
    return (a || b) && !(a && b); 
}
console.log(true, false);
 
function toggle(value) {
    return !value;
}
console.log(toggle(false));

var obj = {
    a: 1,
    b: 2,
    c: 3,
};

function hasKey(obj, key) {
    return obj.hasOwnProperty(key);
}
console.log(hasKey(obj, 'a'));

function getKeys(obj) { return Object.keys(obj).join(', '); }
console.log(getKeys(obj));

var obj2 = {
    a: 1,
    b: 2,
    c: 4,
}
function isEqual(obj1, obj2) {
    if (obj1 === obj2) {
        return true;
    }
    
    if (obj1 == null || typeof obj1 !== 'object' || obj2 == null || typeof obj2 !== 'object') {
        return false;
    }
    
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) {
        return false;
    }
    
    for (let key of keys1) {
        if (!keys2.includes(key) || !isEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    
    return true;
}

console.log(isEqual(obj, obj2));

function removeKey(obj, key) { delete obj[key]; }
removeKey(obj, 'a');
console.log(obj);

function isValueEqual(obj, key, value) { return obj[key] === value; }
console.log(isValueEqual(obj, 'b', 2));

function createArray(start, end) { 
let array = [];
for (let i = start; i <= end; i++) { 
    array.push(i);
} 
    return array;
}
var array1 = createArray(1, 10);

function contains(array, element) {
    return array.includes(element);
}
console.log(array1, 7);

function getLength(array) {
    return array.length;
}
console.log(getLength(array1));

function addToEnd(array, element) {
    array.push(element);
    return array;
}
addToEnd(array1, 11);
console.log(array1);

function getLastElement(array) {
    return array[array.length - 1];
}
console.log(getLastElement(array1));

function logElements(array) {
    array.forEach(element => {
        console.log(element);
    });
}
logElements(array1);

function sumArray(array) {
   let sum = 0;
array.forEach(num => {sum += num;});
    return sum;
}
console.log(sumArray(array1));
var array2 = ["qwert", "asdfg","zxcvb"]
function toUpperCase(array) {
    array.forEach((str) => {
        if (typeof str === 'string') {
            console.log(str.toUpperCase());
        }
    });
}
toUpperCase(array2);

var array3 = [1 ,2 , -3, -4, 5, 6, -7, -8, 9, -10];
function countNegatives(array) {
let count = 0;
    array.forEach(num => {
        if(num < 0){
            count++;
        }
    });
return count;
}
console.log(countNegatives(array3));

function logEven(array) {
    array.forEach(num => {
        if (num % 2 === 0) {
            console.log(num);
        }
    });
}
logEven(array3);

function squareNumbers(array) {
    return array.map(num => num * num);
}
console.log(squareNumbers(array1));

function doubleElements(array) {
    return array.map(num => num * 2);
}
console.log(doubleElements(array1));

function getFirstLetters(array) {
    return array.map(str => str.charAt(0));
}
console.log(getFirstLetters(array2));

function addPrefix(array, prefix) {
    return array.map(str => prefix + str);
}
console.log(addPrefix(array2, "UIR"));

function numbersToStrings(array) {
    return array.map(num => num.toString());
}
console.log(numbersToStrings(array3));


