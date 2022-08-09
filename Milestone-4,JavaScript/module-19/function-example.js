/* 
function functionName(parameters) {
    function body
    return
}
var returnedValue = functionName(parameters value) 
*/

function getAverage(assignment1, assignment2, assignment3) {
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}
const assignment1Marks = 60;
const assignment2Marks = 60;
const assignment3Marks = 60;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log('my average', myAverage);


function add(num1, num2) {
    const sum = num1 + num2;
    return sum;
}

const result1 = add(12, 20);
const result2 = add(50, 100);
const finalResult = add(result1, result2);
console.log('this is my result', finalResult);
