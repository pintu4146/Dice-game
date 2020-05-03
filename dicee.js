


 var rand=Math.floor(Math.random()*6 )+1;
 var rand1=Math.floor (Math.random()*6 )+1;
 if(rand<rand1)
 {
   document.getElementById("ids").innerHTML="player 2 WON";
 }
 else if (rand > rand1) {
     document.getElementById("ids").innerHTML="player 1 WON";
 }
 else
 {
   document.getElementById("ids").innerHTML="Draw";

 }
  if(rand===1)
  {
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  }
  else if(rand===2)
  {
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  }
  else if(rand===3)
  {
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  }
  else if(rand===4)
  {
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  }
  else if(rand===5)
  {
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  }
  else if(rand===6)
  {
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
  }
  else{}
// for image2
if(rand1===1)
{
  document.querySelector(".img2").setAttribute("src","images/dice1.png");
}
else if(rand1===2)
{
  document.querySelector(".img2").setAttribute("src","images/dice2.png");
}
else if(rand1===3)
{
  document.querySelector(".img3").setAttribute("src","images/dice3.png");
}
else if(rand1===4)
{
  document.querySelector(".img4").setAttribute("src","images/dice4.png");
}
else if(rand1===5)
{
  document.querySelector(".img5").setAttribute("src","images/dice5.png");
}
else if(rand1===6)
{
  document.querySelector(".img6").setAttribute("src","images/dice6.png");
}
