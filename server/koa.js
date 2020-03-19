const koa = require("koa");

const app = new koa();

app.use(async (ctx, next) => {
    await next();
    ctx.body = "Hello World";
});

app.listen(3000);
