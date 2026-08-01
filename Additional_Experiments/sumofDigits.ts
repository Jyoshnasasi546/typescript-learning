let num: number = 12345;
let s = 0;

while (num > 0) {
    s+= num % 10;
    num = Math.floor(num / 10);
}

console.log("Sum of digits =", s);