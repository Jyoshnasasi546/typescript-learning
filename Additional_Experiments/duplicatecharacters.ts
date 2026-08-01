let tex: string = "programming";

let result = "";

for (let char of tex) {
    if (!result.includes(char)) {
        result += char;
    }
}

console.log("Original String:", tex);
console.log("After Removing Duplicates:", result);