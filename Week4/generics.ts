
function display<T>(value: T): void {
    console.log(value);
}

display<number>(100);
display<string>("Jyoshna");

let numbers: Array<number> = [10, 20, 30];
let names: Array<string> = ["A", "B", "C"];

console.log(numbers);
console.log(names);
 

class Box<T> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }

    show(): void {
        console.log("Value:", this.value);
    }
}

let box1 = new Box<number>(40);
let box2 = new Box<string>("TypeScript");

box1.show();
box2.show();