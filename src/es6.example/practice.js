/*
1. Template String
2. Spread Operator
3. let and const variable
4. Class
5. Arrow function
6. Enhanced Object Property, Destructuring Assignment
7. Library dependency management
8. Array function
9. Async function
10. Debounce and throttle
*/

// 1. Template String
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

// 2. Spread Operator
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

// 3. let and const variable
const arr2 = [];
arr2.push(1); // 내장함수로 값 수정 가능. (재할당 불가능, 변경가능) 그러나 무결성 제약조건에 위배.
arr3 = arr2.concat(...arr2); //무결성 내장 함수를 통해 직접 수정이 아닌 새 결과를 반환.

// 4. Class
class Shape {
  static create(x, y) {
    return new Shape(x, y);
  }
  name = 'Shape';
  constructor(x, y) {
    this.move(x, y);
  }
  move(x, y) {
    this.x = x;
    this.y = y;
  }
  area() {
    return 0;
  }
}

var s = new Shape(2, 2);
s.area();

// 5. Arrow function
const f = function (x, y) {
  return x + y;
};

const f2 = (x, y) => {
  x + y;
};

// 6. Enhanced Object Property, Destructuring Assignment
var [item1, ...other_items] = [0, 1, 2];
var { key1, ...others } = { key1: 'one', key2: 'two' };

var obj = { key1: 'one', key2: 'two' };
var { key1: newKey1, key2, key3 = 'default key3 value' } = obj;

// 7. Dependency Management
//import MyModule from './RCC';

//8. Array function
function parse(qs) {
  const queryString = qs.substr(1); //'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); //[banana=10, apple=20, orange=30]
  let result = {};
  chunks.forEach((chunk) => {
    const parts = chunk.split('='); //['banana', 10]
    const key = parts[0];
    const value = Number.isNaN(Number(parts[1])) ? parts[1] : Number(parts[1]);
    result[key] = value; // { 'banana': 10, ...}
  });
  return result;
}

function parse(qs) {
  const queryString = qs.substr(1); //'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); //[banana=10, apple=20, orange=30]
  result = chunks.map((chunk) => {
    const [key, value] = chunk.split('='); // key = banana, value = 10
    return { key: key, value: value }; // { key: 'banana', value = 10 }
  });
  return result;
}

function sum(numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
sum([1, 2, 3, 4, 5, 5, 6, 7, 8, 9]);

//reduce() 함수는 실무에서 보통 배열을 특정 자료형으로 변환하는데 사용한다.
function parse(qs) {
  const queryString = qs.substr(1); //'banana=10&apple=20&orange=30'
  const chunks = queryString.split('&'); //[banana=10, apple=20, orange=30]
  return chunks
    .map((chunk) => {
      const [key, value] = chunk.split('='); // key = banana, value = 10
      return { key: key, value: value }; // { key: 'banana', value = 10 }
    })
    .reduce((result, item) => {
      // result = {}, item = {key : 'banana', value : '10'}
      result[item.key] = item.value; // result = {banana, '10'}
      return result;
    }, {});

  return result;
}

// 9. Async function
const work1 = () => {
  new Promise((resolve) => {
    setTimeout(() => resolve('작업1 완료'), 100);
  });
};
const work2 = () => {
  new Promise((resolve) => {
    setTimeout(() => resolve('작업2 완료'), 200);
  });
};
const work3 = () => {
  new Promise((resolve) => {
    setTimeout(() => resolve('작업3 완료'), 300);
  });
};
function urgentWork() {
  console.log('긴급작업');
}

const nextWorkOnDone = (msg1) => {
  console.log('done after 100ms:' + msg1);
  return work2();
};

// work1()
//   .then(nextWorkOnDone)
//   .then((msg2) => {
//     console.log('done after 200ms: ' + msg2);
//     return work3();
//   })
//   .then((msg3) => {
//     console.log('done after 600ms:' + msg3);
//   });

// urgentWork();

// 10-1. Debounce
function debounce(func, delay) {
  let inDebounce;
  return function (...args) {
    if (inDebounce) {
      clearTimeout(inDebounce);
    }
    inDebounce = setTimeout(() => func(...args), delay);
  };
}

const run = debounce((val) => console.log(val), 100);
run('a');
run('b');
run(2);

// 10-2. Throttle
function throttle(func, delay) {
  let lastFunc;
  let lastRun;
  return function (...args) {
    const context = this;
    if (!lastRun) {
      func.call(context, ...args);
      lastRun = Date.now();
    } else {
    }
    if (lastFunc) clearTimeout(lastFunc);
    lastFunc = setTimeout(function () {
      if (Date.now() - lastRun >= delay) {
        func.call(context, ...args);
        lastRun = Date.now();
      }
    }, delay - (Date.now() - lastRun));
  };
}

var checkPosition = () => {
  const offset = 500;
  const currentScrollPosition = window.pageYOffset;
  const pageBottomPosition =
    document.body.offsetHeight - window.innerHeight - offset;
  if (currentScrollPosition >= pageBottomPosition) {
    console.log('다음 페이지 로딩');
  }
};
var infiniteScroll = throttle(checkPosition, 300);
window.addEventListener('scroll', infiniteScroll);
