//Snake game by lochej
//Coded from scratch

const Direction = {
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3,
}
const ScoreValues = {
    SpecialFruitScore: 5,
    NormalFruitScore: 1,
}

var gameTickRate = 20; //20 tps
var gameTimer = null;
var gameCanvas = document.getElementById("game-canvas");
console.log(gameCanvas);

var gridW = 20;
var gridH = 20;
var gridBlockH = 10;
var gridBlockW = 10;

var fruits = [];
snake = new Snake();

function Snake() {
    this.body = [
        { x: 10, y: 10 },
        { x: 9, y: 10 },
        { x: 8, y: 10 }
    ];
    this.gameStartDate = new Date();
    this.gameEndDate = null;
    this.tickCounter = 0;
    this.tickBeforeUpdate = 5;
    this.direction = Direction.Right;
    this.directionRequest = Direction.Right;
    this.headColor = "#FF0000";
    this.bodyColor = "#00FF00";
    this.haslost = false;
    this.pendingDirectionRequest = false;
    this.score = 0;
    this.hasLost = function() {
        return this.haslost;
    };
    this.getHead = function() {
        return this.body[0];
    };

    this.boostEnable = function() {
        this.tickBeforeUpdate = 2;
    };
    this.boostDisable = function() {
        this.tickBeforeUpdate = 5;
    };
    this.isEatingFruit = function(fruits) {
        toRemoveFruit = -1;
        head = this.getHead();
        for (i = 0; i < fruits.length; i++) {
            var fruit = fruits[i];
            if (head.x == fruit.x && head.y == fruit.y) {
                toRemoveFruit = i;
                break;
            }
        }
        if (toRemoveFruit == -1) return null;

        return { id: toRemoveFruit, fruit: fruits[toRemoveFruit] };
    };

    this.isPointInSnakeBody = function(point) {

        for (i = 0; i < this.body.length; i++) {
            segment = this.body[i];
            if (segment.x == point.x && segment.y == point.y)
                return true;
        }
        return false;
    };

    this.changeDirection = function(direction) {
        switch (direction) {
            case Direction.Up:
                //Not allowed to go up is we are going down (would hit itself)
                if (this.direction == Direction.Down)
                    return;

                break;
            case Direction.Down:
                if (this.direction == Direction.Up)
                    return;
                break;
            case Direction.Left:
                if (this.direction == Direction.Right)
                    return;
                break;
            case Direction.Right:
                if (this.direction == Direction.Left)
                    return;
                break;
        }
        this.directionRequest = direction;
        this.pendingDirectionRequest = true;
    };
    this.gameTick = function() {

        this.tickCounter++;
        if ((this.tickCounter % this.tickBeforeUpdate) != 0)
            return;


        //Update the direction
        if (this.pendingDirectionRequest) {
            this.direction = this.directionRequest;
            this.pendingDirectionRequest = false;
        }


        if (this.hasLost())
            return;
        //Move the snake head
        //Retrieve head position

        var newHeadPosition = { x: 0, y: 0 };
        newHeadPosition.x = this.getHead().x;
        newHeadPosition.y = this.getHead().y;

        //Push the head 1 block ahead with the correct direction
        switch (this.direction) {
            case Direction.Up:
                newHeadPosition.y -= 1;
                break;
            case Direction.Down:
                newHeadPosition.y += 1;
                break;
            case Direction.Left:
                newHeadPosition.x -= 1;
                break;
            case Direction.Right:
                newHeadPosition.x += 1;
                break;
        }
        //Add the new head


        //Check that we are not eating ourself LOSE
        if (this.isPointInSnakeBody(newHeadPosition)) {
            this.haslost = true;
            this.gameEndDate = new Date();
        }

        //If we are hiting the walls we lose
        if (!valueInRange(newHeadPosition.x, 0, gridW - 1) || !valueInRange(newHeadPosition.y, 0, gridH - 1)) {
            this.haslost = true;
            this.gameEndDate = new Date();
            return;
        }


        this.body.unshift(newHeadPosition);

        //If the snake has just ate a fruit, then leave its tail
        fruit = this.isEatingFruit(fruits);
        if (fruit != null) {
            //Grow the snake
            if (fruit.fruit.isSpecial) {
                this.score += ScoreValues.SpecialFruitScore;
            } else {
                this.score += ScoreValues.NormalFruitScore;
            }

            fruits[fruit.id] = generateNewFruit();

        } else {
            //Remove the tail of the snake
            tail = this.body.pop();
        }
    }
};

function Fruit() {
    this.x = getRandInt(0, gridW);
    this.y = getRandInt(0, gridH);
    this.isSpecial = getRandInt(0, 10) > 8 ? true : false; //Only 10% of the fruits are special
}


function gameInitHandler() {

    updateGameTimer();
    document.addEventListener('keydown', onKeyDownEventHandler, false);
    document.addEventListener('keyup', onKeyUpEventHandler, false);

    fruits = [];
    fruits.push(generateNewFruit());
    fruits.push(generateNewFruit());

    snake = new Snake();
    snake.gameStartDate = new Date();
    snake.gameEndDate = new Date();
}

function updateGameTimer() {
    gameTickDelayMs = 1000 / gameTickRate;
    clearInterval(gameTimer);
    gameTimer = setInterval(gameTickHandler, gameTickDelayMs);
}

function onKeyUpEventHandler(event) {
    //console.log("KeyUp");
    //console.log(event);

    switch (event.key) {
        case " ":
            event.preventDefault();
            if (!event.repeat) {
                snake.boostDisable();
            }
            break;
    }
}

function onKeyDownEventHandler(event) {
    //console.log("KeyDown");
    //console.log(event);

    switch (event.key) {
        case "s":
        case "ArrowDown":
            event.preventDefault();
            snake.changeDirection(Direction.Down);
            break;

        case "z":
        case "ArrowUp":
            event.preventDefault();
            snake.changeDirection(Direction.Up);
            break;

        case "q":
        case "ArrowLeft":
            event.preventDefault();
            snake.changeDirection(Direction.Left);
            break;

        case "d":
        case "ArrowRight":
            event.preventDefault();
            snake.changeDirection(Direction.Right);
            break;

        case " ":
            event.preventDefault();
            if (!event.repeat) {

                if (snake.hasLost()) {
                    gameInitHandler();
                } else {
                    snake.boostEnable();
                }

            }
            break;
        case "r":
            event.preventDefault();
            if (!event.repeat) {
                gameInitHandler();
            }
            break;

    }

}

function value_limit(val, min, max) {
    return val < min ? min : (val > max ? max : val);
}

function valueInRange(val, min, max) {
    return min <= val && val <= max;
}



function getRandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generateNewFruit() {
    var fruit = new Fruit();
    while (snake.isPointInSnakeBody(fruit)) {
        fruit = new Fruit();
    }
    return fruit;
}

function gameTickHandler() {

    snake.gameTick();
    display();
}



function drawBlock(ctx, x, y, color) {
    ctx.fillStyle = color;
    border = gridBlockW / 40;
    ctx.fillRect(x * gridBlockW + border, y * gridBlockH + border, gridBlockW - border * 2, gridBlockH - border * 2);
}

function drawHead(ctx, snake) {
    drawBlock(ctx, snake.getHead().x, snake.getHead().y, snake.headColor);
}

function drawSnake(ctx, snake) {

    for (i = 1; i < snake.body.length; i++) {
        drawBlock(ctx, snake.body[i].x, snake.body[i].y, snake.bodyColor);
    }
    drawHead(ctx, snake);
}

function drawScore() {
    element = document.getElementById("score");
    element.innerHTML = snake.score;

    snakeLength = document.getElementById("snake-length");
    snakeLength.innerHTML = snake.body.length;

    snakeTime = document.getElementById("snake-time");

    var endTime = new Date();
    if (snake.hasLost()) {
        endTime = snake.gameEndDate;
    }

    var diffTimeMs = endTime.getTime() - snake.gameStartDate.getTime();
    var tenthseconds = Math.floor(diffTimeMs / 100);
    var minutes = Math.floor(tenthseconds / 600);
    var seconds = (tenthseconds % 600) / 10;


    snakeTime.innerHTML = minutes + " min " + seconds.toFixed(1) + " s";

}

function drawFruits(ctx, fruits) {

    for (i = 0; i < fruits.length; i++) {
        drawBlock(ctx, fruits[i].x, fruits[i].y, fruits[i].isSpecial ? rainbow() : 'white');
    }
}

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function rainbow() {
    if (typeof rainbow.hue === 'undefined') {
        rainbow.hue = 0;
    }
    rainbow.hue = (rainbow.hue + 0.1) % 1.0;
    color = HSVtoRGB(rainbow.hue, 1, 1);

    return "rgb(" + color.r + "," + color.g + "," + color.b + ")";
}

function display() {

    if (typeof display.tickCounter === "undefined") {
        display.tickCounter = 0;
    }

    display.tickCounter++;

    var canvas = document.getElementById('game-canvas');
    //Make sure the canvas is visible
    if (canvas.hidden) {
        canvas.hidden = false;
    }

    var ctx = canvas.getContext('2d');

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    gridBlockH = canvas.height / gridH;
    gridBlockW = canvas.width / gridW;

    //Background

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (snake.hasLost()) {
        //Losing animation


        if (display.tickCounter % 4 < 2) {
            drawSnake(ctx, snake);
        }

        ctx.fillStyle = "white";
        ctx.font = "40px Consolas";
        ctx.fillText("Game over !", 20, 50);
        ctx.fillText("Your score is: " + snake.score, 20, 50 + 10 + 40);
        ctx.fillText("Press Space to restart", 20, 50 + 50 + 50 + 20);

    } else {
        //Normal drawing
        //Background

        drawSnake(ctx, snake);
        drawFruits(ctx, fruits);
    }


    //console.log(snake);
    drawScore();


}


gameInitHandler();