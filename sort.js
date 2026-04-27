const persons = ["rakib", "sajib", "shuvo", "shakib", "sakib"];

const sortedPersons = persons.sort(); 
console.log(sortedPersons);

const numbers = [5, 2, 9, 1, 5, 6];

const numbers_asc = [...numbers].sort(function(a, b) {return a - b}); 
const numbers_desc = [...numbers].sort(function(a, b) {return b - a});
console.log(numbers_asc);
console.log(numbers_desc);



