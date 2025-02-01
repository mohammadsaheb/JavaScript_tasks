"use strict"
//1
let array1 = [1,2,3,4,5];
array1.push(6);
array1.forEach(element => {
    console.log(element);
    
});
//2
let squarednumber = array1.map(function(array1){
    return array1 * array1;
});
console.log(squarednumber);
//3
let even =array1.filter(function(array1){
return array1 % 2 === 0;
});
console.log(even);
//4
let sum = array1.reduce(function(acc,array1){
    return acc + array1;
},0);
console.log(sum);
//5
let fruit =["apple","banana","cherry"];
let sort = fruit.sort();
console.log(sort);
//6.A
let reverse = fruit.reverse();
console.log(reverse);
//6.B
let arr1=["1","2","3"];
let arr2=["4","5","6"];
let total = arr1.concat(arr2);
console.log(total);
//6.C
let array_1= [1, 2, 3, 4, 5, 6] ;
let slicearr = array_1.slice(2,4);
console.log(slicearr);
//6.D
let array_2=["1","2","3","4","5"];
let splicearr = array_2.splice(1,1);
console.log(splicearr);
//6.E
let array_E =["1","2","3","4","5"];
let array_in = array_E.indexOf("3");
console.log(array_in);
//6.F
let array_F = ["1","2","3","4"]
let array_string = array_F.join(",")
console.log(array_string);

//6.G
let numbers = "1,2,3,4,5";
let numbers_array = numbers.split(",");
console.log(numbers_array);
//7
let array_7 = ["1","2","3","4","5"];
let array_length = array_7.length;
console.log(array_length);
//8
for( let num of array_7){
    console.log(num);
    
}
//9 
for( let index of array_7){
    console.log(index);
    
}
//10
console.log(Array.isArray(array_7));
//11
let array_8 = Array.of("1","2","3");
console.log(array_8);


















    
    
