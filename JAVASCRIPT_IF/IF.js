"use strict"
//1
let age = 27;
if (age>18) {
    console.log("You are an adult");
    
}
//2
let num = 4;
if (num % 2 ===0) {
    console.log("the number is even");
}
//3
let char = 'a';
if (/[a-zA-Z]/.test(char)) {
  console.log("It's a letter");
}
//4
let array =[1,2,3];
if (Array.isArray(array)) {
    console.log("it's an array");
}
//5
let x = 5;
if(x>0){
    console.log("x is a positive number");
}
//9
let z = 9;
if (z % 3 ===0) {
    console.log("z is a multiple of 3");
    
}
//10
let password= "mypassword123";
if (password.length>=8) {
    console.log("Your password is strong");
}
//11
let age_1 = 30 ;
if (age_1 >=18 && age_1 <= 65) {
    console.log(" you are if working age");
}
//12 
let color = "red";
if (["red", "green", "blue"].includes(color)) {
  console.log("${color} is a primary color");
}
//13
function isValidNumber(input) {
    if (!isNaN(input)) {
      console.log(`${input} is a valid number`);
    } else {
      console.log(`${input} is not a number`);
    }
  }
  
  isValidNumber(11);       
  isValidNumber("19");      
  isValidNumber("xyz");     
  isValidNumber("17.5");    
  isValidNumber("21F");     
  

