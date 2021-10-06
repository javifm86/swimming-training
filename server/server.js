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
  // console.log(req.headers);
  next();
});
server.use(jsonServer.bodyParser);
server.post("/api/login", (req, res) => {
  console.log(req.body);
  if (req.body.user === "admin" || req.body.user === "javi") {
    res.status(200).json({
      user: req.body.user,
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTM0NTQzNTQzNTQzNTM0NTMiLCJleHAiOjE1MDQ2OTkyNTZ9.zG-2FvGegujxoLWwIQfNB5IT46D-xC4e8dEDYwi6aRM",
      permission: req.body.user === "admin" ? 10 : 5,
    });
  } else {
    res.status(401).json({
      error: "unauthorized",
    });
  }
});

server.use("/api", router);

server.listen(5000, () => {
  console.log("JSON Server is running");
});
