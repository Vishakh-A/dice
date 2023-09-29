var randomnum= Math.floor(Math.random()*6)+1;
var randomimg1= "images/dice"+randomnum+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomimg1);


var randomnum2=Math.floor(Math.random()*6)+1;
var randomimgsoure2="images/dice"+randomnum2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomimgsoure2);
console.log("Player 1 wins"+ typeof(randomnum));
console.log("Player 1 wins"+ typeof(randomnum2));
if(randomnum>randomnum2){
    console.log("Player 1 wins"+ randomnum);
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomnum<randomnum2){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Draw ";
}