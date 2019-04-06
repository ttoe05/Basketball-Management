var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, resp) {
    if (req.url === "/") {
        fs.readFile("../html/", function (error, pgResp) {
            if (error) {
                resp.writeHead(404);
                resp.write('Contents you are looking are Not Found');
            } else {
                resp.writeHead(200, { 'Content-Type': 'text/html' });
                resp.write(pgResp);
            }

            resp.end();
        });
    }
});
//5.
server.listen(8000);
