// ES5 中作用域
const callbacks = []
for (var i = 0; i <= 2; i++) {
    callbacks[i] = function() {
        return i * 2
    }
}

console.table([
    callbacks[0](),
    callbacks[1](),
    callbacks[2](),
])

const callbacks2 = []
for (let j = 0; j <= 2; j++) {
    callbacks2[j] = function() {
        return j * 2
    }
}

console.table([
    callbacks2[0](),
    callbacks2[1](),
    callbacks2[2](),
])
;((function() {
    const foo = function() {
        return 1
    }
    console.log("foo()===1", foo() === 1)
    ;((function() {
        const foo = function() {
            return 2
        }
        console.log("foo()===2", foo() === 2)
    })())
})())

{
    function foo() {
        return 1
    }

    console.log("foo()===1", foo() === 1)
    {
        function foo() {
            return 2
        }

        console.log("foo()===2", foo() === 2)
    }
    console.log("foo()===1", foo() === 1)
}
