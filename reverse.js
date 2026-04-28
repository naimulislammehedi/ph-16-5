// using built-in reverse() (fasted, but with a catch)
const arr = [10, 20, 30, 40, 50];

console.log(arr);
arr.reverse(); 
console.log(arr);

// hidden risk 
const original = [1, 2, 3, 4, 5];
const reversed = original.reverse(); 
console.log(reversed); 
console.log(original);

// keep the original array unchanged
const origanl2 = [...original].reverse(); 
console.log(origanl2);

// without reverse() (manual approach - this is what matters)
// two pointer swap 
const arr3 = [10, 20, 30, 40, 50];

let left = 0; 
let right = arr.length - 1; 

while (left < right) {
    // swap 
    [arr3[left], arr3[right]] = [arr3[right], arr3[left]];
    left++;
    right--;
}
console.log(arr3);

const arr4 = [10, 20, 30, 40, 50];
const reversedArr4 = [];

for (let i = arr4.length - 1; i >= 0; i--) {
    reversedArr4.push(arr4[i]); 
}

console.log(reversedArr4);

const arr5 = [10, 20, 30, 40, 50];
const reversedArr5 = []; 

for (let i = 0; i < arr5.length; i++) {
    reversedArr5.unshift(arr5[i]); 
}
console.log(reversedArr5);