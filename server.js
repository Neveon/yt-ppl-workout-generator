// Require json-server
const jsonServer = require('json-server');

// Create an instance of json-server
const server = jsonServer.create();

// Setup a router
const router = jsonServer.router('mock-db-workouts.json');

// Setup default middlewares
server.use(jsonServer.defaults());

// Create custom routes for /api/push, /api/pull, and /api/legs
server.get('/api/push', (req, res) => {
  res.jsonp(router.db.get('push').value());
});

server.get('/api/pull', (req, res) => {
  res.jsonp(router.db.get('pull').value());
});

server.get('/api/legs', (req, res) => {
  res.jsonp(router.db.get('legs').value());
});

// Use the router
server.use(router);

// Start the server
server.listen(3001, () => {
  console.log('JSON Server is running on port 3001...');
});
