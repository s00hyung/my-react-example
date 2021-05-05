// Template String
var cart = { name: '도서', price: 1500 };

var getTotal = function (cart) {
  return cart.price + '원';
};

var myCart =
  '장바구니에 ' +
  cart.name +
  '가 있습니다. 총 금액은 ' +
  getTotal(cart) +
  '입니다';

var myCart2 = `장바구니에 ${cart.name}가 있습니다. 총 금액은 ${getTotal(
  cart,
)}입니다.`;

console.log(myCart2);

// Spread Operator
var array = ['one', 'two'];
var array2 = ['three', 'four'];

var combined = [array[0], array[1], array2[0], array2[1]];
var combined = array.concat(array2);

var combined_improved = [...array, ...array2];
function func(...args) {
  var [first, ...others] = args;
}

var object_one = { one: 1, two: 2, other: 0 };
var object_two = { three: 3, four: 4, other: -1 };
var combined = {
  one: object_one.one,
  two: object_one.two,
  other: object_one.other,
};

var combined_improved = {
  ...object_one,
  ...object_two,
};

var { other, ...others } = combined_improved;
console.log(other);
console.log(others);
