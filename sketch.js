var ball;
var database;
var BallPositionRef
var pos

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    database = firebase.database();
    BallPositionRef = database.ref('ball/position');
    BallPositionRef.on('value',(data)=>{
        pos = data.val();
        ball.x = pos.x;
        ball.y = pos.y;
    });
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){

    database.ref('ball/position').update({
        x: pos.x + x,
        y: pos.y + y
    });
}
