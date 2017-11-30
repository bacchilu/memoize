# memoize

We use the decorator function in this way:

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

We can also give an optional _expire_ parameter (in milliseconds).

    const fib3 = memoize(fib, 5000);

    console.log(fib3(42));
    setTimeout(function () {
        console.log(fib3(42)); // cache expired
    }, 6000);
    console.log(fib3(42)); // cache not expired

_JSON.stringify_ is used as a hash function, so the function works properly if every argument is JSON encodable.
