"use strict"
//conditinlas 1
    let age = 30;

    if (age > 60) {
        console.log("You may join the seniors’ program.");
    } else if (age > 30) {
        console.log("You are not eligible. You may join other programs.");
    } else if (age >= 18) {
        console.log("You are eligible. Start your application.");
    } else {
        console.log("You may join the kids' program.");
    }
    //2
    function switchCase(str) {
        return str
            .split("")
            .map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase())
            .join("");
    }
    console.log(switchCase("OrAnGe"));
    //3
  
    
    //4
    function remove_element(arr,element) {
        return arr.filter(item => item !== element)
    }
    let arr = ["Coding", "Academy", "By", "Orange", "By"];
    console.log(remove_element(arr,"By"));
    //5

    function oddeven(num) {
    return num % 2 === 0 ? "Even" : "Odd";
    }
    console.log(oddeven(6));
    console.log(oddeven(5)); 
    //6
    function isNumber(value) {
        return typeof value === 'number';
      }
      
      console.log(isNumber(10));    
      console.log(isNumber("Hello")); 
    //7

    function findLargest(num1, num2) {
        return num1 > num2 ? num1 : num2;
      }
      
      console.log(findLargest(5, 10));

    //8
    function triangleType(a, b, c) {
        if (a === b && b === c) {
          return "Equilateral";
        } else if (a === b || b === c || a === c) {
          return "Isosceles";
        } else {
          return "Scalene";
        }
      }
      
      console.log(triangleType(3, 3, 3)); 
      console.log(triangleType(3, 4, 4)); 
      console.log(triangleType(3, 4, 5));

    //9
    function isInRange(num, min, max) {
        return num >= min && num <= max;
      }
      
      console.log(isInRange(5, 1, 10));
      console.log(isInRange(15, 1, 10));
    //10
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
      }
      
      console.log(isLeapYear(2020));
      console.log(isLeapYear(2021));
      


 
    
    
    



