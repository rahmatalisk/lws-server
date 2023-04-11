const jsonServer = require("json-server"); // importing json-server library
const auth = require("json-server-auth"); // importing json-server-auth library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 9000; // you can use any port number here; I chose to use 9000

server.db = router.db; // needed for json-server-auth

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
