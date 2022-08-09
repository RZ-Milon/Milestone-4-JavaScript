var shopingCart = {
    books: 3,
    pen: 10,
    khata: 5,
    table: 1,
    mouse: 3
}

// when you know the specific property name, use dot notation to get the property value 
var penCount = shopingCart.pen;

// alternative system
// when you know the specific property name, use dot notation to get the property value 
var penCount2 = shopingCart['pen'];


var propertyName = 'mouse';
var propertyValue = shopingCart[propertyName];
console.log(propertyName, propertyValue);

var properties = Object.keys(shopingCart);
var propertyValue = Object.values(shopingCart);
// console.log(properties);
// console.log(propertyValue);

// console.log(shopingCart);

// set property values
shopingCart.mouse = 14;

shopingCart['mouse'] = 20;
shopingCart[propertyName] =80;
console.log(shopingCart);
