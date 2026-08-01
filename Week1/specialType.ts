console.log("\nProgram 1 : ");
let data: any;

data = 100;
console.log(data);

data = "Jyoshna";
console.log(data);

data = true;
console.log(data);


console.log("\n Program 2 :");

let value: unknown;

value = "TypeScript";

if(typeof value === "string"){
    console.log(value.toUpperCase());
}

value = 50;

if(typeof value === "number"){
    console.log(value * 2);
}

console.log("\n Program 3 : ");

function greet(name:string):void{
    console.log("Welcome "+name);
}

greet("Jyoshna");