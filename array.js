//using reduce() method

// Use the Array.reduce() method to iterate over the array.
// Set the initial value in the reduce method to 0.
// On each iteration, return the sum of the accumulated value and the current number

let myArray =[1, 2, 4, 7]
let sum = myArray.reduce((a,b)=>{
    return a+b
},0);
console.log(sum);

//for of helps iterate through the array
// Declare a sum variable and initialize it to 0.
// Use the for...of loop to iterate over the array.
// On each iteration, reassign the sum variable to its current value plus the value of the current element.

const arr =[1, 2, 4, 7]
let sum =0
for (const value of arr) {
    sum+=value
}
// console.log(sum);

//loop through the array

const arr =[1, 2, 4, 7]

let sum =0;

for(let index=0; index<arr.length; index++ ){

    sum+=arr[index]
}
console.log(sum);

