let arr3: number[] = [1, 2, 3, 2, 4, 1, 2];

let freq: { [key: number]: number } = {};

for (let num of arr3) {
    if (freq[num]) {
        freq[num]++;
    } else {
        freq[num] = 1;
    }
}

console.log(freq);