const memoize = function (f, expire=null) {
    const memoize = function () {
        const cache = memoize.cache;
        const key = JSON.stringify(arguments);
        if (cache[key] !== undefined && expire !== null && (new Date().getTime()) > (cache[key]['ts'] + expire))
          delete cache[key];
        if (cache[key] === undefined)
            cache[key] = {value: f.apply(this, arguments), ts: new Date().getTime()};
        return cache[key]['value'];
    };
    memoize.cache = {};
    return memoize;
};
