class Student {
    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    display(): void {
        console.log("Student Name:", this.name);
    }
}

let s1 = new Student("Jyoshna");
console.log("Accessing Public Variable:", s1.name);
s1.display();

class BankAccount {
    private balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }

    showBalance(): void {
        console.log("Balance:", this.balance);
    }
}

let account = new BankAccount(5000);

account.showBalance();

class Employee {
    protected salary: number;

    constructor(salary: number) {
        this.salary = salary;
    }
}

class Manager extends Employee {

    constructor(salary: number) {
        super(salary);
    }

    display(): void {
        console.log("Manager Salary:", this.salary);
    }
}

let manager = new Manager(75000);
manager.display();