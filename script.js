var matrix = [
   [0, 0, 1, 0, 0],
   [1, 0, 0, 0, 0],
   [0, 1, 0, 0, 0],
   [0, 0, 1, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0],
   [1, 1, 0, 0, 0]
];

var side = 120;


function setup() {
   frameRate(5);
   createCanvas(matrix[0].length * side, matrix.length * side);
   background('#acacac');
}

function draw() {

   for (var y = 0; y < matrix.length; y++) {
       for (var x = 0; x < matrix[y].length; x++) {

           if (matrix[y][x] == 1) {
               fill("green");
           }
           else if (matrix[y][x] == 0) {
               fill("#acacac");
           }
	    
           rect(x * side, y * side, side, side);
   			fill("blue");
   			textSize(25);
   			 text(x+" "+y, x*side+side/2,y*side+side/2);
       }
   }
}









