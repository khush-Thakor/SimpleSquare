<script>
  const ctx = canvas.getContext('2d');
  var x = 257;
  var score = 0;
  var motion;
  var direction = "right";
  var lineLocation = 450;
  var w = 65;
  ctx.lineWidth = 5;
  ctx.strokeRect(250,50,1000,w);
  ctx.lineWidth = 3;
  ctx.strokeRect(x,57,50,50);
  var speed = 50;
  document.getElementById('startButton').addEventListener("click",move);
  document.getElementById('changeButton').addEventListener("click",change);
  document.getElementById('changeButton').style.visibility='hidden';
  ctx.clearRect(0,0,canvas.length,canvas.heigth);
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
    }, speed);
  }
  else{
  motion = setInterval(function () {
    ctx.clearRect(x-4,53,56,56);
    x-=10;
    ctx.strokeRect(x,57,50,50);
    if (x<=260){
      gameOver();
    }
  },speed);
    }
}
  function stop(){
    clearInterval(motion);
    moving = false;
  }
  function change(){
    stop();
    moving = true;
    if (direction=="right"){
      direction = "left";
    }
    else{
      direction = "right";
    }
    move();
    score++;
    document.getElementById('score').innerHTML = "Score: "+score;
    speed-=3;
  }
  function drawLine(x,y,x2,y2){
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.lineWidth = 3;
  }
  function clearCanvas(){
    ctx.clearRect(0,0,canvas.length,canvas.heigth);
  }
  function gameOver(){
    clearInterval(motion);
    document.getElementById('gameOverText').innerHTML = "Game Over";
    document.getElementById('changeButton').style.visibility='hidden'
 
  }
