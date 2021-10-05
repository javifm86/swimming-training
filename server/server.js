const path = require("path");
const db = path.resolve(path.resolve(__dirname, ".."), "./server/db.json");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();
const pause = require("connect-pause");

server.use(middlewares);
server.use(pause(300));

server.use((req, res, next) => {
  console.log(req.headers);
  next();
});

server.post("/api/login", (req, res) => {
  res.status(401).json({
    error: "unauthorized",
  });
});

server.use("/api", router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});
