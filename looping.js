/*
Looping technique 
- for loop 
- while loop 
- do while --> ignore 
- for of loop 
- for in loop
*/

const friends = ['john', 'peter', 'bob', 'anna'];

for (const friend of friends) {
    // console.log(friend);
}

for (let i = 0; i < friends.length; i++) {
    console.log(i); 
    console.log(friends[i]); 
}

const numbers = [22, 33, 44, 55, 66];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); 
}

let i = 0; 
while (i < friends.length) {
    console.log(friends[i]); 
    i++; 
}

let n = 0; 
while(n < numbers.length) {
    console.log(numbers[n]); 
    n++; 
}