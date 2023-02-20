var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);

var messages = [];

app.use(express.static("MY_papka"));

app.get('/', function (req, res) {

res.redirect('index.html');

});

server.listen(3000);


matrix = [1,2,3]

io.on('connection', function(socket) {


    socket.emit("display message", matrix);
    
});
