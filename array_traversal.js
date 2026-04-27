// accessing each element of an array one by one in a sequence. Traversal is really about controlling an index and moving it correctly. 

// using for loop 
const arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
}

// using while loop (more flexible, more dangerous)
const arr2 = [100, 200, 300, 400, 500];

let i = 0; 

while (i < arr2.length) {
    console.log(arr2[i]); 
    i++; 
}