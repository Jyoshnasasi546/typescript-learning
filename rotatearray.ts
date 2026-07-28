let array: number[] = [1, 2, 3, 4, 5];
let n1 = 2;

let rotated = [...array.slice(n), ...array.slice(0, n)];

console.log("Rotated Array:", rotated);