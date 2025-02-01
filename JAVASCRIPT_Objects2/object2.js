"use strict"
//1
let person ={
    name:"Mohammad",
    age:23,
    gender :"male"
}
console.log(Object.keys(person));
//2
console.log(Object.values(person));
//3
console.log(Object.entries(person));
//4
let obj1={
    name:"Mohammed",
    age:23
};
let obj2={
    gender:"male"
};
let mergedobjects= Object.assign({}, obj1,obj2);
console.log(mergedobjects);
//5
Object.freeze(person);
console.log(person);
//6
Object.seal(obj1);
obj1.age=30;

console.log(obj1);





