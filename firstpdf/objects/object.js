"use strict"
//1
function getObjectProperties(obj) {
    return Object.keys(obj);
}

const person = { name: "mohammad", age: 23, country: "Jordan" };
console.log(getObjectProperties(person));
//2
function getPropertyCount(obj) {
    return Object.keys(obj).length;
}

const person1 = { name: "mohammad", age: 23, country: "Jordan" };
console.log(getPropertyCount(person1)); 
//3
function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}

const objA = { name: "mohammad", age: 23 };
const objB = { country: "Jordan", job: " WebDeveloper" };

console.log(mergeObjects(objA, objB));
//4
function convertPropertiesToUpper(obj) {
    let upperCaseObj = {};
    
    for (let key in obj) {
        if (typeof obj[key] === "string") {
            upperCaseObj[key] = obj[key].toUpperCase();
        } else {
            upperCaseObj[key] = obj[key];
        }
    }
    
    return upperCaseObj;
}
const person2 = { name: "mohammad", age: 22, country: "Jordan" };
console.log(convertPropertiesToUpper(person2));
//5
function removeNullProperties(obj) {
    let filteredObj = {};
    
    for (let key in obj) {
        if (obj[key] !== null) { 
            filteredObj[key] = obj[key]; 
        }
    }
    
    return filteredObj;
}

const data = { name: "mohammmad", age: 22, country: null, job: "WebDeveloper", score: null };
console.log(removeNullProperties(data));
//6
function getSortedPropertyNames(obj) {
    return Object.keys(obj).sort();
}

const person3 = { name: "mohammad", age: 22, country: "Jordan", job: "WebDeveloper" };
console.log(getSortedPropertyNames(person3));