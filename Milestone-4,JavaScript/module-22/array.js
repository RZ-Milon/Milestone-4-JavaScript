const country = 'Bangladesh';
const age = 28;
const isIndependent = true;
const student ={
    id: 123, 
    class: 11,
    name: 'Agun'
};
const friendsAge = [20, 25, 22, 15, 30, 35];
function add(num1, num2){
    return num1 + num2;
}


console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
// check array using Array.isArray
console.log(Array.isArray(friendsAge));
console.log(typeof add);


// --------------------------------------
console.log(friendsAge.includes(19));
console.log(friendsAge.includes(20));

if(friendsAge.indexOf(19) !== -1){

}


// concat: 
newFriendsAge = [12, 15, 20, 10];
const allFriends = newFriendsAge.concat(friendsAge);
console.log(allFriends);