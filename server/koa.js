// const koa = require("koa");
const koa = require("../src/packages/koa/lib/application");

const app = new koa();

app.use(async (ctx, next) => {
    next();
});

app.use(async (ctx, next) => {
    next();
});

app.use(async (ctx, next) => {
    next();
});

app.use(async ctx => {
    console.log("============>", 12312);
    ctx.body = "Hello World";
});

app.listen(3000);
