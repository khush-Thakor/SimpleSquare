<script type="text/javascript">
  var ctx = canvas.getContext('2d');
  var x = 455;
  var motion;
  var direction = "right";
  ctx.strokeRect(450,50,1000,800);
  ctx.strokeRect(x,55,50,50);
  document.getElementById('startButton').addEventListener("click",move);
  document.getElementById('stopButton').addEventListener("click",stop);
  document.getElementById('changeButton').addEventListener("click",change);
  function move(){
    if(direction=="right"){
    motion = setInterval(function () {
      ctx.clearRect(x-2,53,56,56);
      x+=10;
      ctx.strokeRect(x,55,50,50);
    }, 10);
  }
  else{
  motion = setInterval(function () {
    ctx.clearRect(x,53,56,56);
    x-=10;
    ctx.strokeRect(x,55,50,50);
  }, 10);
}
}
  function stop(){
    clearInterval(motion);
  }
  function change(){
    stop();
    if (direction=="right"){
      direction = "left";
    }
    else{
      direction = "right";
    }
    move();
  }
</script>
