  const ctx = canvas.getContext('2d');
  var x = 257;
  var score = 0;
  var motion;
  var direction = "right";
  var lineLocation = 450;
  var w = 65;
  var lineX = 0;
  ctx.lineWidth = 5;
  ctx.strokeRect(250,50,1000,65);
  ctx.lineWidth = 3;
  ctx.strokeRect(x,57,50,50);
  randomLine(315,625);
  document.getElementById('startButton').addEventListener("click",move);
  document.getElementById('changeButton').addEventListener("click",change);
  document.getElementById('changeButton').style.visibility='hidden';
  function move(){
    document.getElementById('startButton').style.visibility='hidden';
    document.getElementById('changeButton').style.visibility='visible';
    if(direction=="right"){
    motion = setInterval(function () {
      ctx.clearRect(x-4,53,56,56);
      x+=10;
      ctx.strokeRect(x,57,50,50);
      if (x>=1185){
        gameOver();
      }
    }, 20);
  }
  else{
  motion = setInterval(function () {
    ctx.clearRect(x-4,53,56,56);
    x-=10;
    ctx.strokeRect(x,57,50,50);
    if (x<=260){
      gameOver();
    }
  },20);
    }

}
  function stop(){
    clearInterval(motion);
    moving = false;
  }

  function randomLine(min,max){
    let xC =  Math.random() * (max - min) + min;
    lineX = xC;
    drawLine(xC,50,xC,115);
  }

  function change(){
    stop();
    moving = true;
    if (direction=="right"){
      direction = "left";
      if(x>=lineX){
        score++;
        stop();
        ctx.lineWidth = 5;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeRect(250,50,1000,65);
        randomLine(335,605);
    }
  }
    else{
      direction = "right";
      if(x<=lineX){
      score++;
      stop();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 5;
      ctx.strokeRect(250,50,1000,65);
      randomLine(605,1115);
      }
    }
    move();
    document.getElementById('score').innerHTML = "Score: "+score;
  }
  function drawLine(x,y,x2,y2){
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.lineWidth = 3;
  }
  function gameOver(){
    clearInterval(motion);
    document.getElementById('gameOverText').innerHTML = "Game Over";
    document.getElementById('changeButton').style.visibility='hidden'
  }
