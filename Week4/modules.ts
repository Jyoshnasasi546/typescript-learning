export let college = "SVECW";
console.log(college);


export function greet(name: string): void {
    console.log("Welcome " + name);
}

greet("Jyoshna");

export class Student {

    constructor(public name: string) {}

    display(): void {
        console.log("Student:", this.name);
    }
}

let s = new Student("Jyoshna Bethala");
s.display();