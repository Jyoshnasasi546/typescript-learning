class Students {
    readonly studentId: number;
    name: string;
    constructor(studentId: number, name: string) {
        this.studentId = studentId;
        this.name = name;
    }

    display(): void {
        console.log("Student ID:", this.studentId);
        console.log("Name:", this.name);
    }
}

let students = new Students(13, "Jyoshna");

student.display();
