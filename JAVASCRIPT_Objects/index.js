"use strict"
//1
let person ={
    name:"Mohammad",
    age:23,
    gender:"male"
};
console.log(person.name ,person.age ,person.gender);
//2
person.country ="jordan";
console.log(person);
//3
let person1 ={
    name:"Mohammad",
    age:"23"
};
person1["gender"]="male";
console.log(person1);
//4
console.log(person1.name);
//5
console.log(person["name"]);

