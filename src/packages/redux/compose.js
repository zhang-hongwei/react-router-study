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
    console.log(
        "middlewares  ===>",
        funcs.reduce((a, b) => {
            // debugger;
            console.log("middlewares  ===>", a);
            return (...args) => a(b(...args));
        })
    );

    return funcs.reduce((a, b) => {
        // debugger;
        return (...args) => a(b(...args));
    });
}
