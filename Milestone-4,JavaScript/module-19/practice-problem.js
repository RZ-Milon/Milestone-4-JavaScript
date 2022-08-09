// Problem 1.
function foo() {
    console.log('foo');
}
foo();

function bar(){
    console.log('bar');
}
bar();

// 2.
function make_avg(num1, num2, num3){
    var sum = num1 + num2 + num3;
    var avg = sum / 3;
    console.log(avg);
}
make_avg(2, 4, 6)

// 3.
// function make_avg()


// 4.
function odd_even(){
    for(var i = 0; i <= 4; i += 2){
        console.log(i);
    }
}
odd_even();

// 5.
var color = 'green';
switch (color) {
    case 'red':
        console.log('its denger not cross the road');
        break;
    case 'yellow':
        console.log('you stop');
        break
    case 'green':
        console.log('you cross the road');
        break

    default:
        console.log('ami trafic signal mani na');
        break;
}

// Extra
// 1.

// 2.


// 3.
function fullName(firstName, lastName){
    var name = firstName + " " + lastName;
    console.log(name);
}

fullName('rz', 'milon');

// 4.
function square(number){
    var multiplicaton = number * 2;
    return multiplicaton;
}
var result = square(5);
var finalResult = square(result*3);
console.log(finalResult);
