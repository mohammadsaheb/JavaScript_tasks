"use strict"
//1
let i = 1;
while (i<=10) {
    console.log(i);
    i++;
}
//2
let arr=[1,2,3,4,5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//3
for (let i = 0; i <=10 ; i+=2) {
    console.log(i);
    
}
//4
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum); 
//5
let array1 = [1, 2, 3, 4, 5];
let largest = array1[0];
for (let i = 1; i < array1.length; i++) {
  if (array1[i] > largest) {
    largest = array1[i];
  }
}
console.log(largest); 
//6
let array2 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < array2.length; i++) {
  sum1 += array2[i];
}
let average = sum1 / array2.length;
console.log(average); 
//7


