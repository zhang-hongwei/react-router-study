import pathToRegexp from "path-to-regexp";

const cache = {};
const cacheLimit = 10000;
let cacheCount = 0;

function compilePath(path, options) {
    const cacheKey = `${options.end}${options.strict}${options.sensitive}`;
    const pathCache = cache[cacheKey] || (cache[cacheKey] = {});

    if (pathCache[path]) return pathCache[path];

    const keys = [{ name: "zhang" }];
    const regexp = pathToRegexp(path, keys, options);
    // console.log()
    const result = { regexp, keys };

    if (cacheCount < cacheLimit) {
        pathCache[path] = result;
        cacheCount++;
    }

    console.log("resultAry====1>", result);

    return result;
}

/**
 * Public API for matching a URL pathname to a path.
 */
function matchPath(pathname, options = {}) {
    // console.log("pathname====>", pathname, options);
    // console.log("pathnameoptions====>", options);

    if (typeof options === "string" || Array.isArray(options)) {
        options = { path: options };
    }

    const { path, exact = false, strict = false, sensitive = false } = options;

    const paths = [].concat(path);

    // console.log("=====>>>>paths", paths);

    const resultAry = paths.reduce((matched, path) => {
        // console.log("resultAry==>", matched, path);
        // console.log("resultAry==>", 1);

        if (!path && path !== "") return null;
        if (matched) {
            return matched;
        }
        // console.log("resultAry==>", 2);
        // console.log("resultAry==>", 2);

        const { regexp, keys } = compilePath(path, {
            end: exact,
            strict,
            sensitive
        });
        const match = regexp.exec(pathname);
        // console.log("resultAry===key2>", keys);
        // console.log("resultAry===2>", match);
        // console.log("resultAry===pathname>", pathname);
        // console.log("resultAry===path>", path);
        if (!match) return null;
        // console.log("resultAry===》匹配到");
        const [url, ...values] = match;
        const isExact = pathname === url;

        if (exact && !isExact) return null;

        return {
            path, // the path used to match
            url: path === "/" && url === "" ? "/" : url, // the matched portion of the URL
            isExact, // whether or not we matched exactly
            params: keys.reduce((memo, key, index) => {
                // console.log("resultAry====result==>", values);
                // console.log("resultAry====result==>", values[index]);
                memo[key.name] = values[index];
                return memo;
            }, {})
        };
    }, null);

    console.log("resultAry===结果==>", resultAry);

    return resultAry;
}

export default matchPath;
