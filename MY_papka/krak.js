var LivingCreature = require("./living")
module.exports = class Krak extends LivingCreature  {
    constructor(x, y) {
        super(x, y)
        this.x = x;
        this.y = y;

        this.directions = [
            [this.x-1, this.y - 1],
            [this.x-2, this.y - 2],
            [this.x-3, this.y -3],
            [this.x-4, this.y - 4],
            [this.x-5, this.y - 5],
            [this.x-6, this.y -6],
            [this.x-7, this.y -7],
            [this.x-8, this.y - 8],
            [this.x-9, this.y - 9],
            [this.x-10, this.y - 10],
            [this.x-11, this.y -11],
            [this.x-12, this.y - 12],
            [this.x-13, this.y - 13],
            [this.x-14, this.y - 14],
            [this.x+1, this.y+1],
            [this.x+2, this.y + 2],
            [this.x+3, this.y + 3],
            [this.x+4, this.y + 4],
            [this.x+5, this.y+5],
            [this.x+6, this.y + 6],
            [this.x+7, this.y + 7],
            [this.x+8, this.y + 8],
            [this.x+9, this.y+9],
            [this.x+10, this.y + 10],
            [this.x+11, this.y + 11],
            [this.x+12, this.y + 12],
            [this.x+13, this.y+ 13],
            [this.x+14, this.y + 14]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates()
      return super.chooseCell(character);
    }
  
    mul() {
        var emptyCells = this.chooseCell(0);
        var newCell = this.random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 6;

            var newGrassi = new Krak(newX, newY);
            krakArr.push(newGrassi);

        }
    }

    eat() {
       

        if (this.x >= 0 && this.x < matrix[0].length && this.y >= 0 && this.y < matrix.length) {

            this.x++
            if (matrix[this.y][this.x] == 1) {
                for (var i in grassArr) {
                    if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            } else if (matrix[this.y][this.x] == 2) {
                for (var i in grassEaterArr) {
                    if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                        grassEaterArr.splice(i, 1);
                        break;
                    }
                }
            }else if (matrix[this.y][this.x] == 3) {
                for (var i in predaotArr) {
                    if (this.x == predatorArr[i].x && this.y == predatorArr[i].y) {
                        predatorArr.splice(i, 1);
                        break;
                    }
                }
            }


            matrix[this.y][this.x] = 5

        }
    

    

    }
    die(x, canvasWidth, eatWidth, ctx) {
      if(x+ eatWidth >= canvasWidth){
          ctx.clearRect(0, 0 , canvasWidth, canvas.height)
      }
    }

}
