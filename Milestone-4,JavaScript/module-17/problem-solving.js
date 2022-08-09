// Problem-01
var fruits = ['apple', 'banana', 'orange'];
index = fruits.indexOf('banana');

console.log(index);

fruits [2] = 'mango';
console.log(fruits);

fruits.pop('orange')
console.log(fruits);

fruits.push('Watermelon');
console.log(fruits);

// Problem-02
var myScore = 85;
var tomScore = 66;
var janeScore = 95;
var peterScore = 56;
var jonScore = 40;

if(myScore >= 80){
    console.log('A grade');
}
else if(tomScore >= 80){
    console.log('B grade');
}
else if(janeScore >= 80){
    console.log('C grade');
}
else if(peterScore >= 80){
    console.log('D grade');
}
else if(jonScore <= 39){

}
else{
    console.log('grade F');
}