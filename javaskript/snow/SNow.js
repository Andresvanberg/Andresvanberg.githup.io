console.log("test");

var x=300;
var y=300;
var xSpeed=1
var ySpeed=1;
var g=1;
var canvas =document.getElementById("canvas");
var h=1;

var ctx = canvas.getContext("2d");
var h=window.innerHeight;   // skärmens höjd
var w=window.innerWidth;    // skärmens bredd
canvas.width=w;             // sätter bredden på canvasen (rit ytan)
canvas.height=h;            // sätter höjd på canvasen (rit ytan)

var antalbollar=5000;
var bollar =[];  // skapar arr   (radie , hastighet , färg, x , y)


/*initsierar bollar (ger start värden till bollar).  */
for (var i = 0; i < antalbollar; i++) {

  bollar.push({
    x:Math.floor(Math.random()*w) ,
    y:Math.floor(Math.random()*h )  ,
    r:Math.random()*5,
    c1:255 ,
    c2:255 ,
    c3:255 ,
    xv:Math.random()*5 ,
    yv:Math.random()*10+4 });

}



function update(){


  bollar.forEach((boll, bollar) => {
    boll.y=boll.y+boll.yv;
  if(boll.y>(h-boll.r)){
    boll.y=0;
  }if (boll.x>(w)) {
  //    boll.xv*=-1;
      boll.x=0;
  }else if (boll.x<0) {
  //  boll.xv*=-1;
  boll.x=w;
  }
  });







}
function paint(){
  h++;
      ctx.clearRect(0,0,w,h);

      for (var i = 0; i < antalbollar; i++) {

        var boll= bollar[i];  // plockar ut en array ur arrayen

      ctx.fillStyle="rgb("+boll.c1+","+boll.c2+","+boll.c3+", 0.8)";
      ctx.beginPath();
      boll.xv=3*Math.cos(h*(Math.PI/180));
      ctx.arc(boll.x, boll.y  ,boll.r,0,2*Math.PI); // x,y,r,startvinkel i radianer,slutvinkel i radianer
      boll.x=boll.x+boll.xv;
      ctx.lineWidth = 10;
      ctx.strokeStyle = "rgb("+boll.c1+","+boll.c2+","+boll.c3+", 0.8)";
      ctx.stroke() ;
      ctx.fill();
    }
  update();
}


paint();


setInterval(paint,30);
