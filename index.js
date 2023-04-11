const jsonServer = require("json-server");
const auth = require("json-server-auth");
const bodyParser = require("body-parser");

const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000;

server.db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);

// Use body-parser to parse incoming request bodies
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});