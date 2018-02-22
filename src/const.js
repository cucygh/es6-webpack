// ES5 中常量的写法

Object.defineProperty(window, "PI2", {
    value: 3.1415926,
    writable: false,
})

console.log(window.PI2)

// ES6 的常量写法

const PI = 3.1415926
console.log(PI)

// PI = 4
