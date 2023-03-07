function fn(){
let mass = document.getElementById("mass").value
let gravityString = document.getElementById("planet").value;
let gravity = parseFloat(gravityString);
if (isNaN(mass) || isNaN(gravity)) {
    alert("Please enter mass and specify planet");
    return;
  }
  
let weight = mass*gravity;
document.querySelector('.output').textContent = weight.toFixed(2) +" N"

switch( gravityString){
case "3.7":
document.getElementById("image").setAttribute("src", "images/mercury.png" );
document.getElementById("image").style.height = "280px"
document.getElementById("image").style.width = "290px"

break;
case "8.870":
document.getElementById("image").setAttribute("src", "images/venus.png" );
document.getElementById("image").style.height = "280px"
document.getElementById("image").style.width = "290px"

break;
case "9.8":
document.getElementById("image").setAttribute("src", "images/earth.png" );
document.getElementById("image").style.height = "280px"
document.getElementById("image").style.width = "290px"

break;
case "3.721":
document.getElementById("image").setAttribute("src", "images/mars.png" );
document.getElementById("image").style.height = "280px"
document.getElementById("image").style.width = "290px"

break;
case "24.79":
document.getElementById("image").setAttribute("src", "images/jupiter.png" );
document.getElementById("image").style.height = "280px"
document.getElementById("image").style.width = "290px"

break;
case "10.44":
document.getElementById("image").setAttribute("src", "images/saturn1.png" );
document.getElementById("image").style.height = "350px"
document.getElementById("image").style.width = "630px"


break;
case "8.87":
document.getElementById("image").setAttribute("src", "images/uranus.png" );
document.getElementById("image").style.height = "300px"
document.getElementById("image").style.width = "400px"

break;
case "11.15":
document.getElementById("image").setAttribute("src", "images/neptune.png" );
document.getElementById("image").style.height = "280px"
document.getElementById("image").style.width = "400px"

break;
case "1.62":
document.getElementById("image").setAttribute("src", "images/moon.png" );
document.getElementById("image").style.height = "300px"
document.getElementById("image").style.width = "400px"

break;
}
  
}