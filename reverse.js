const numbers = [22, 33, 44, 55, 66];

numbers.reverse();

console.log(numbers);

const reversed = numbers.reverse(); 
console.log(reversed);

const rev_numbers = []

for (const num of numbers) {
    // console.log(num);
    rev_numbers.unshift(num);
}

console.log(rev_numbers);

const reversed_numbers = []; 
for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]; 
    reversed_numbers.unshift(num);
}