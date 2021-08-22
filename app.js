const http = require('http');
const finalhandler = require('finalhandler');
const Router = require('router');
const config = require('./config')
const routes = require('./routes/default');

const router = new Router();

router.use('/', routes);

const server = http.createServer((request, response) => {
    router(request, response, finalhandler(request, response))
});

server.listen(config.port);