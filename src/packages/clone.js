var push = ArrayProto.push,
    slice = ArrayProto.slice,
    toString = ObjProto.toString,
    hasOwnProperty = ObjProto.hasOwnProperty;

var collectNonEnumProps = function(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto =
        (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = "constructor";
    if (has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
        prop = nonEnumerableProps[nonEnumIdx];
        if (
            prop in obj &&
            obj[prop] !== proto[prop] &&
            !_.contains(keys, prop)
        ) {
            keys.push(prop);
        }
    }
};

_.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
};
_.extend = createAssigner(_.allKeys);

_.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
};

_.isObject = function(obj) {
    var type = typeof obj;
    return type === "function" || (type === "object" && !!obj);
};

_.isArray =
    nativeIsArray ||
    function(obj) {
        return toString.call(obj) === "[object Array]";
    };

_.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
        var i = start;
        var result = args[start].apply(this, arguments);
        while (i--) result = args[i].call(this, result);
        return result;
    };
};

_.isFunction = function(obj) {
    return typeof obj == "function" || false;
};

_.has = function(obj, path) {
    if (!_.isArray(path)) {
        return has(obj, path);
    }
    var length = path.length;
    for (var i = 0; i < length; i++) {
        var key = path[i];
        if (obj == null || !hasOwnProperty.call(obj, key)) {
            return false;
        }
        obj = obj[key];
    }
    return !!length;
};
