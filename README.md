# memoize

We can use this decorator function in this way:

    const fib = function (n) {
        if (n === 1)
            return 1;
        if (n === 2)
            return 1;
        return fib(n - 1) + fib(n - 2);
    };

    console.log(fib(40));


    const fib2 = memoize(fib);

    console.log(fib2(40));

We can also use an optionally _expire_ args, in milliseconds.

    const fib3 = memoize(fib, 5000);

    console.log(fib3(42));
    setTimeout(function () {
        console.log(fib3(42));
    }, 6000);
