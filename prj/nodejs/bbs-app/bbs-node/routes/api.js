const Router = require("koa-router");
const router = new Router({ prefix: "/api" });
router.get("/", async ctx => {
  console.log("api");
  ctx.body = "api";
});

module.exports = router;
