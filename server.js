const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('SearchCards.json');
const middlewares= jsonServer.defaults();
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(route);

server.listen(port);