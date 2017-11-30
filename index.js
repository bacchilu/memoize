const memoize = function (f) {
    const memoize = function () {
        const cache = memoize.cache;
        const key = JSON.stringify(arguments);
        if (cache[key] === undefined)
            cache[key] = f.apply(this, arguments);
        return cache[key];
    };
    memoize.cache = {};
    return memoize;
};
