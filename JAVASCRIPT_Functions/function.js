"use strict"
//1
function findSmallest(arr) {
    return Math.min(...arr);
    
}

console.log(findSmallest([30,45,60,7]));
//2
function AlphabeticalOrder(str) {
    return str.split('').sort().join('')
}
console.log(AlphabeticalOrder('hello'));
//3
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }
  
  console.log(factorial(8));
  //4
  function EvenOdd(n) {
    return n%2===0 ? "Even":"Odd";
    
  }
  console.log(EvenOdd(9));
  //5
  function addup(num) {
    let sum = 0
    for (let i = num; i >= 0 ; i--) {
        sum += i
    }
    return sum ;
    
  }
  console.log(addup(9));
  //6
  function minMaxLengthAverage(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let length = arr.length;
    let sum = arr.reduce((a, b) => a + b, 0);
    let average = sum / length;
  
    return [min, max, length, average];
  }
  
  console.log(minMaxLengthAverage([7, 13, 3, 77, 100]));
  
  

