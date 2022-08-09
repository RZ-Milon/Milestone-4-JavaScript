const friends = [20, 25, 22, 15, 30, 35];

// Removes elements from an array 
// and, if necessary, inserts new elements in their place, 
// returning the deleted elements.
// will change the original array
const partial = friends.splice(2, 3, 222, 300, 450);
console.log(partial);
console.log(friends);


