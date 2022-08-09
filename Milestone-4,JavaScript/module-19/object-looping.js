// array Vs object
var shopingItems = ['books', 'pen', 'khata', 'table', 'shoes'];
var friendsAge = [12, 45, 50, 28, 21];
var friendsAge = {
    rahim: 12,
    karim: 45, 
    khan: 50,
    hasan: 28,
    jabbar: 21
}


var shoppingCart = {
    books: 3,
    pen: 10,
    khata: 5,
    mouse: 3,
    shoes: 2,
    bottle: 3
}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);

// var keys = [ 'books', 'pen', 'khata', 'mouse', 'shoes', 'bottle' ];
for(var i = 0; i < keys.length; i++){
    var propertyName = keys[i];
    var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);
}

// for in loop
for(var propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}