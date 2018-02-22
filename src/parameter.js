/* eslint-disable */

{
  // ES5\ES3 默认参数的写法
  function f(x, y, z) {
    if (y === undefined) {
      y = 7;
    }
    if (z === undefined) {
      z = 42
    }
    return x + y + z
  }
  console.log(f(1, 3));
} {
  // ES6 默认参数
  function f(x, y = 7, z = 42) {
    return x + y + z
  }
  console.log(f(1, 3));
} {
  function checkParameter() {
    throw new Error('can\'t be empty')
  }
  function f(x = checkParameter(), y = 7, z = 42) {
    return x + y + z
  }
  console.log(f(1));
  try {
    f()
  } catch (e) {
    console.log(e);
  } finally {}
} {
  // ES3,ES5 可变参数
  function f() {
    var a = Array.prototype.slice.call(arguments);
    var sum = 0;
    a.forEach(function(item) {
      sum += item * 1;
    })
    return sum
  }
  console.log(f(1, 2, 3, 6));
} {
  // ES6 可变参数
  function f(...a) {
    var sum = 0;
    a.forEach(item => {
      sum += item * 1
    });
    return sum
  }
  console.log(f(1, 2, 3, 6));
} {
  // ES5 合并数组
  var params = ['hello', true, 7];
  var other = [1, 2].concat(params);
  console.log(other);
} {
  // ES6 利用扩展运算符合并数组
  var params = ['hello', true, 7];
  var other = [
    1, 2, ...params
  ];
  console.log(other);
}
