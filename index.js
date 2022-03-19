require("dotenv").config();
const koa = require("koa");

const port = process.env.PORT || 3001;
const server = new koa();
const static = require("koa-static");
const Router = require("koa-router");
const views = require("koa-views");

const route = new Router();

// Routes
//route.get("/", (ctx, next) => (ctx.body = "Hola Mundo"));
route.get("/", (ctx, next) => {
  return ctx.render("./index.html", {
    name: "Julio Litzenberg",
  });
});

route.get("/:name/:age", (ctx, next) => {
  return ctx.render("./index.html", {
    name: ctx.params.name,
    age: ctx.params.age,
  });
});

server.use(views("./views", { map: { html: "nunjucks" } }));
server.use(route.routes());
server.use(static("./public"));

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
