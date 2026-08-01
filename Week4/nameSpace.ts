namespace College {

    export function display() {
        console.log("Welcome to SVECW");
    }
}

College.display();

namespace StudentInfo {

    export let name = "Jyoshna";

    export function show() {
        console.log("Student:", name);
    }
}

StudentInfo.show();

namespace Vehicle {

    export class Car {

        display(): void {
            console.log("Man is in the Car");
        }
    }
}

let c = new Vehicle.Car();
c.display();