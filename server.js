var express = require('express');

var app = express();

var server = require('http').createServer(app);

var io = require('socket.io')(server);



app.use(express.static("MY_papka"));

app.get('/', function (req, res) {

res.redirect('index.html');

});

server.listen(3000);

predatorArr = []
 grassArr = [];
 grassEaterArr = [];
 bombArr = [];
lazerArr = [];

matrix = generateMatrix(15, 350, 30, 12, 5, 15);

io.on('connection', function(socket) {

    set()
    
});



function generateMatrix(matLength, gr, grEa, pred, bomb, lazer) {
    let matrix = [];
    for (let i = 0; i < matLength; i++) {
        matrix.push([])
        for (let j = 0; j < matLength; j++) {
            matrix[i].push(0)
        }
    }
    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 1;
        }
    }
    for (let i = 0; i < grEa; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 2;
        }
    }
    for (let i = 0; i < pred; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < bomb; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 4;
        }
    }
     for (let i = 0; i < lazer; i++) {
        let x = Math.floor(Math.random() * matLength);
        let y = Math.floor(Math.random() * matLength);
        if (matrix[y][x] == 0) {
            matrix[x][y] = 5;
        }
    }
    return matrix;
}

function game(){
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    }
    for (let i in predatorArr) {
        predatorArr[i].eat()
    }
    for (let i in bombArr) {
        bombArr[i].eat()
    }
     for (let i in lazerArr) {
        lazerArr[i].eat()
    }



    io.sockets.emit("send matrix", matrix);


}

Grass = require('./MY_papka/grass')
GrassEater = require('./MY_papka/grassEater')
Predator = require('./MY_papka/predaot')
Bomb = require('./MY_papka/Bomb')
Lazer = require('./MY_papka/Lazer')
function set(){
for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            let gr = new Grass(x, y);
            grassArr.push(gr)
        } else if (matrix[y][x] == 2) {
            let grEat = new GrassEater(x, y);
            grassEaterArr.push(grEat)
        } else if (matrix[y][x] == 3) {
            let predator1 = new Predator(x, y);
            predatorArr.push(predator1)
        } else if (matrix[y][x] == 4) {
            let bomb = new Bomb(x, y);
            bombArr.push(bomb)
        } else if (matrix[y][x] == 5) {
            let lazer = new Lazer(x, y);
            lazerArr.push(lazer)
        }
    }
}

}




setInterval(game, 500)