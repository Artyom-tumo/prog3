var socket = io()

var side = 50;


 
// let matrix = generateMatrix(15, 350, 30, 12, 5, 15)
const button = document.getElementById("win")
const button2 = document.getElementById("sum")

button.addEventListener('click', ()=>{
    document.body.style.backgroundColor ='#000000'
});
button2.addEventListener('click', ()=>{
    document.body.style.backgroundColor ='#ff4d4d'
});


function setup() {
    createCanvas(3000, 3000);
    background('#acacac');
}

function drawing(matrix) {
    console.log(matrix)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red")
            }
            else if (matrix[y][x] == 4) {
                fill("black")
            } else if (matrix[y][x] == 5) {
                fill("purple")
            }else if (matrix[y][x]==6){
                fill("red")
            }
            rect(x * side, y * side, side, side);


        }
    }

    
}









socket.on('send matrix', drawing);


