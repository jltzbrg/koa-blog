require("dotenv").config();
const koa = require("koa");

const port = process.env.PORT || 3001;
const server = new koa();
const static = require("koa-static");

server.use(static("./public"));

server.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
