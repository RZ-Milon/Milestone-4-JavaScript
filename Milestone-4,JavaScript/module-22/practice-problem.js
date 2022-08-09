// JavaScript program to find the area of a triangle

function triangleArea(a, b, c) {
const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

return area.toFixed(2);
}

console.log(triangleArea(5, 6, 7));




// program to check if a number is prime or not

function isPrime (number) {
    if (number !== 2 && number !== 3 && number !== 5 && number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
    return number + ' is not a prime number.'
    }
    else {
    return number + ' is a prime number.'
    }
}

console.log(isPrime(3));






