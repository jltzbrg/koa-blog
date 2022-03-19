require("dotenv").config();
const koa = require("koa");
const port = process.env.PORT || 3001;
const server = new koa();
const static = require("koa-static");
const Router = require("koa-router");
const route = new Router();
const views = require("koa-views");
const nunj = require("nunjucks");
nunj.configure("./views", { autoescape: true });

server.use(views("./views", { map: { html: "nunjucks" } }));

// Routes
route.get("/", (ctx, next) => {
  return ctx.render("./index", {
    name: "Julio Litzenberg",
  });
});

server.use(route.routes());
server.use(route.allowedMethods());
server.use(static("./public"));

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
