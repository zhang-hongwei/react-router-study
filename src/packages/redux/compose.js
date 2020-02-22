/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for the
 * resulting composite function.
 *
 * @param funcs The functions to compose.
 * @returns A function obtained by composing the argument functions from right
 *   to left. For example, `compose(f, g, h)` is identical to doing
 *   `(...args) => f(g(h(...args)))`.
 */

export default function compose(...funcs) {
    if (funcs.length === 0) {
        // infer the argument type so it is usable in inference down the line
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    let ary = funcs.reduce((a, b) => (...args) => a(b(...args)));

    let b = funcs.reduce((a, b) => {
        console.log("a===>", a);
        return (...args) => a(b(...args));
    });

    console.log("=====b===========>", ary);

    return ary;
}

let a = 4;

function fn1(a) {
    return a + 1;
}

function fn2(a) {
    return a + 2;
}

function fn3(a) {
    return a + 3;
}

function fn4(a) {
    return a + 3;
}

function fn5(a) {
    return a + 3;
}

let result = fn1(fn2(fn3(a)));
console.log("==============>result==>", result);

let result1 = compose(fn1, fn2, fn3, fn4, fn5)(a);

console.log("====result1====>", result1);
