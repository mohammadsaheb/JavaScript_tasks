"use strict"
//1
for (let i = 1; i <= 50; i++) {
    if( i%2 ===  0){
        console.log(i);
        
    }
    
}
//2
for (let i = 1; i <= 50; i++) {
    if( i%2 ===  0){
        console.log(i);
        
    } 
    
}
//3
for (let i = 1; i <= 50; i++) {
    if( i%2 ===  0){
        console.log(i);
        
    } else if (i %2 !==0) {
        console.log(i);
        
        
    }
    
}
//4
for (let i = 1; i < 100; i++) {
    if (i%3===0 && i%5 ===0) {
        console.log("FizzBuzz");
        
        
    } else if (i%3===0) {
        console.log("Fizz");
        
        
    }else if (i%5===0) {
        console.log("Buzz");
        
    }
    else{
        console.log(i);
        
    }
   
}
//5
function FizzBuzz(num){
    if(num%3 === 0 && num%5 === 0){
        console.log("FizzBuzz");
    }
    else if(num%3 === 0){
        console.log("Fizz");
    }
    else if(num%5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(num);
    }
}
//6
function fizzBuzz(n) {
    if (n > 0) {
        fizzBuzz(n - 1);
        
        if (n % 3 === 0 && n % 5 === 0) {
            console.log("FizzBuzz");
        } else if (n % 3 === 0) {
            console.log("Fizz");
        } else if (n % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(n);
        }
    }
}
fizzBuzz(15);
//7
function banknotes(num, arr) {
    let arr1 = [];
    for(let i=0 ; i<arr.length; i++ ){
        while(num >= arr[i]){
            arr1.push(arr[i]);
            num -= arr[i];
        }
    }
    return arr1;
}
console.log(banknotes(57, [25, 10, 5, 1]));
//8
function countCharacter(str, char) {
    const lowerStr = str.toLowerCase();
    const lowerChar = char.toLowerCase();

    let count = 0;

    
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === lowerChar) {
            count++;
        }
    }

    return count;
}

console.log(countCharacter("Coding Academy by Orange", "o")); 
