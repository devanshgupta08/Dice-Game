var no1 = Math.floor(Math.random()*6) +1;
var no2 = Math.floor(Math.random()*6) +1;
document.querySelector(".img1").setAttribute("src","images/dice"+no1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+no2+".png");
if(no1>no2)
{
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
}
else if (no2 > no1)
{
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw!";
}