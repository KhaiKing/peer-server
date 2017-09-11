var fs = require('fs');
var PeerServer = require('peer').PeerServer;

var server = PeerServer({
  port: 8888,
  ssl: {
    key: fs.readFileSync('C:/xampp/apache/conf/ssl.key/server.key'),
    cert: fs.readFileSync('C:/xampp/apache/conf/ssl.crt/server.crt')
  }
});

server.on("connection", function(id) {
  console.log(id);
})

server.on("disconnect", function(id) {
  console.log(id);
})
