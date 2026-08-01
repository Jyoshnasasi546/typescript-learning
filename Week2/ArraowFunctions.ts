console.log("Program 1");

const square=(n:number):number=>n*n;

console.log(square(6));

console.log("\n Program 2 ");

let nums:number[]=[1,2,3,4,5];

let result=nums.map(n=>n*n);

console.log(result);

console.log("\n Program 3");

let even=nums.filter(n=>n%2==0);

console.log(even);