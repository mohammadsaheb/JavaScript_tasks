"use strict"
//1.1
let cash= 1000;
let currentliabilities= 500;
console.log( 'Cash flow ratio =' ,cash/currentliabilities);
//1.2
let revenues = 1000;
let expenses = 500;
let netIncome = revenues - expenses;
console.log('netincome=',netIncome);
//1.3
let liabilities=1000;
let equity=500;
let totalassests=liabilities+equity;
console.log('total assets =',totalassests);
//1.4
let profit=1000;
let sales=500;
let netincome=profit*sales
console.log('net income=',netincome);
//1.5
let num1=7;
let num2=9;
let num3=2;
let average = (num1 + num2 +num3)/3;
console.log(average);
//1.6
let price = 150;
let discount = 0.3;
let dis_price = price -(price * discount);
console.log(dis_price);
//1.7
let age = 20;
let agelimit = age>18 && age<30;
console.log(agelimit);
//1.8
let number1 = 2;
let number2 = 3;
let exponential = number1 ** number2
console.log(exponential);
//1.9
let r_number1 = 10;
let r_number2 = 4;
let remainder = r_number1 % r_number2;
console.log(remainder);
//------------//

//3
let str = "Welcome to orange";
//3.1
console.log(str.toUpperCase());
//3.2
console.log(str.substring(8,10));
//3.3
console.log(str.replace("Welcome to ", "Hello from ") );
//3.4
console.log(str.toLowerCase());
//3.5
console.log(str.length);
//3.6
console.log(str.replace("orange",'"orange"'));
//3.7
console.log(str + " jordan");

//4

//5 arrays 1
let array_1 = ["Coding","Academy","By","Orange"];
//5.1
let array1 =array_1.push("jordan");
console.log(array_1);
let array = ["Coding","Academy","By","Orange"];
//5.2
let array2 = array.slice (0,2);
console.log(array2);
//5.3
let array3 = ["Welcome","To"].concat(array);
console.log(array3);
//5.4
let array4 = array.slice(1);
console.log(array4);
//5.5
let array5 = array.join();
console.log(array5);
//5.6
let array6 = array.slice();
console.log(array6);
//5.7
let array7 = [array[0],array[3]];
console.log(array7);

//6 array 2
let fruit =  ["banana", "apple", "orange", "watermelon"];
let vegetables =  ["carrot", "tomato", "pepper", "lettuce"]; 
//a
vegetables.pop();
//b
fruit.shift();
//c
let index = fruit.indexOf("orange");
console.log(index);
//d
fruit.push(1);
//e
console.log(vegetables.length);
//f
vegetables.push(3);
//g
let food = fruit.concat(vegetables);
console.log(food);
//h
food.splice(4,2);
console.log(food);
//i
food.reverse();
console.log(food);
//j
let food_str=food.toString()
console.log(food_str);







































