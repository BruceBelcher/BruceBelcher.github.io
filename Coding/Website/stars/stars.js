//Script for stars effect

//const { setTimeout } = require("timers");

var starfield = document.getElementById("starField");
var ctx = starfield.getContext("2d");
const ctrX = starfield.width/2;
const ctrY = starfield.height/2;
const numStars = 10;

init = (numSteps) => {
 
    //Initialise the line
    const ranX = Math.floor(Math.random() * starfield.width)  //random x co-ord between 0 and width
    const ranY = Math.floor(Math.random() * starfield.height)  //random x co-ord between 0 and height

    let sx, sy;
    //Find difference in x and y co-ordinates = vector
    let diffX=ranX-ctrX;
    let diffY=ranY-ctrY;
    //next divide vector into segments - note differneces may be negative
    let lineStepX=diffX/numSteps;
    let lineStepY=diffY/numSteps;
    //next step co-ord is start + lineStep
    console.log ('init ctrX ctrY ranX ranY ', ctrX, ctrY, ranX, ranY);

    //1st segment
    requestAnimationFrame(() => {animateDrawLine(ctrX,ctrY, lineStepX, lineStepY, numSteps);})
}

drawSegment = (startX,startY,endX,endY,col) => {

    var gradient = ctx.createLinearGradient(startX,startY,endX,endY);
    
    /* Fill with gradient - loks ok with 1 numStep
    gradient.addColorStop("0.25", "black");
    gradient.addColorStop("0.5", "gray");
    gradient.addColorStop("0.75", "yellow");
    gradient.addColorStop("1.0", "white");
    ctx.strokeStyle = gradient;*/
    ctx.strokeStyle = col;
    if (col == 'white') {ctx.lineWidth = 1} else {ctx.lineWidth = 5}; //overwrite with wider line to overcome leaving grey line
    ctx.lineCap = 'round'

    ctx.beginPath();
    ctx.moveTo(startX,startY)                        
    ctx.lineTo(endX,endY)
    ctx.stroke();

    console.log('drawSegment ',startX,startY,endX,endY,ctx.lineWidth )
}

animateDrawLine = (sx, sy, lineStepX, lineStepY, numSteps) => {
    //draw line from center to random co-ord
    //divide line into segments and draw each segment to 'animate' line
    //NOTE cant use for loops to animate!
    let ex=sx+lineStepX; 
    let ey=sy+lineStepY;

    //draws 1st segment from init() call then subsequent segments from recursive call below.
    //'erase' segment after waiting 500ms
    drawSegment(sx,sy,ex,ey,'white');  
    setTimeout(() => {drawSegment(sx,sy,ex,ey,'black');},200); 

    console.log('exit conditions numSteps ', numSteps)
    if (numSteps > 1) {numSteps--} else {return};

    sx=ex; sy=ey; ex=sx+lineStepX; ey=sy+lineStepY;
    requestAnimationFrame(() => {animateDrawLine(sx,sy, lineStepX, lineStepY, numSteps);});
    //nothing executes below here  
}

startStars = () => {
    let numSteps = Math.floor((Math.random() * 200))+50;  //random number of segments bigger the slower
    init(numSteps);
    //init(10);
 
}

stopStars = () => {
    clearInterval(timerID);
}

ctx.clearRect(0,0,starfield.width, starfield.height);
//use setIntervalTimer to fire stars at random intervals
let timerID = setInterval(startStars, Math.floor(Math.random() * 300)+1); //number of stars 1 - n If its too big it throttles

//startStars();



