console.log("Program 1 ");

let name:string="Jyoshna";
let age:number=20;
let passed:boolean=true;

console.log(name);
console.log(age);
console.log(passed);

console.log("\nProgram 2 ");

function add(a:number,b:number):number{
    return a+b;
}

console.log(add(20,30));

console.log("\n Program 3 ");

let marks:number[]=[90,95,98];

let student:{
    name:string,
    roll:number
}={
    name:"Jyoshna",
    roll:13
};

console.log(marks);
console.log(student);
export {};