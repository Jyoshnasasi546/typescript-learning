let numberr: number = 145;
let temp = number;
let sum0 = 0;

while (temp > 0) {
    let digit = temp % 10;

    let factorial = 1;
    for (let i = 1; i <= digit; i++) {
        factorial *= i;
    }

    sum0 += factorial;
    temp = Math.floor(temp / 10);
}
if (sum0 === number) {
    console.log(number + " is a Strong Number");
} else {
    console.log(number + " is not a Strong Number");
}