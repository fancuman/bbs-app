const Koa = require("koa");
const app = new Koa();

app.use(async (ctx, next) => {
  try {
    await next();
  } catch (error) {
    // 响应用户
    ctx.status = error.statusCode || error.status || 500;
    ctx.body = error.message;

    // 触发应用层级错误事件
    ctx.app.emit("error", error, ctx);
    console.log("捕获到错误：", error.message);
  }
});

const api = require("./routes/api");
app.use(api.routes());

app.on("error", (err, ctx) => {
  console.error(err);
});

app.listen(3001, () => console.log("start server on port 3001"));
