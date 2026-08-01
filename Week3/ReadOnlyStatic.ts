
class Student {
    readonly rollNo: number;

    constructor(rollNo: number) {
        this.rollNo = rollNo;
    }

    display(): void {
        console.log("Roll Number:", this.rollNo);
    }
}

let s = new Student(13);
s.display();

class College {
    static collegeName: string = "SVECW";

    static display(): void {
        console.log("College:", College.collegeName);
    }
}

College.display();

class Calculator {

    static add(a: number, b: number): number {
        return a + b;
    }
}

console.log("Sum:", Calculator.add(10, 20));