const app = require('./app');
var http = require('http');
var server = http.createServer(app);
var port = 8084;
server.listen(port, function() {
    console.log((new Date()) + `Server is listening on port ${port}`);
});
