const memoize = require('./index.js');


const fib = function (n) {
    if (n === 1)
        return 1;
    if (n === 2)
        return 1;
    return fib(n - 1) + fib(n - 2);
};


console.log('fib');
console.log(fib(42));
console.log(fib(42));


const fib2 = memoize(fib);

console.log('fib2');
console.log(fib2(42));
console.log(fib2(42));

console.log('fib3');
const fib3 = memoize(fib, 5000);
console.log(fib3(42));
console.log(fib3(42));

console.log('wait some seconds...');
setTimeout(function () {
    console.log('exec');
    console.log(fib3(42));
    console.log(fib3(42));
}, 6000);
console.log(fib3(42));
