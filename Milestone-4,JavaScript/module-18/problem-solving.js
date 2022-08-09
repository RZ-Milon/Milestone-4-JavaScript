// 1.
var momGiven = 1000;
var applePrice = 400;
var orangePrice = 300;
var totalPrice = applePrice + orangePrice;
console.log(totalPrice);
var getBack = momGiven - totalPrice;
console.log(getBack);

// 2.
var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.5;
var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;
console.log(totalMarks);
var average = totalMarks / 5;
var averageTwoDeccimal = average.toFixed(2);
console.log(averageTwoDeccimal);


// 4.
var number = 119;
var reminder = number % 5;
console.log(reminder);

// 5.
var fruits = ['Apple', 'Banana', 'Orange'];
var bananaIndex = fruits.indexOf('Banana');
fruits[1] = 'Mango'
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push('Watermelon');
console.log(fruits);

// 6.


// 7.
var num1 = 13;
var num2 = 79;
var num3 = 45;
if(num1 > num2){
    if(num1 > num3){
        console.log(num1);
    }
    else{
        console.log(num3);
    }
}
else{
    if(num2 > num3){
        console.log(num2);
    }
    else{
        console.log(num3);
    }
}

// 8.
var side1 = 9;
var side2 = 8;
var side3 = 9;
if(side1 == side2 || side1 == side3 || side2 == side3){
    console.log('isosceles');
}
else{
    console.log('not isosceles');
}

var marks = [ 13, 15, 14, 20, 18];
for(var i=0; i<marks.length; i++){
    if(marks[i] >=15){
        continue;
    }
    console.log(marks[i]);
};