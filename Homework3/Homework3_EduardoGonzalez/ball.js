var canvas;
var c;
var ballX = 225;
var ballY = 435;
var xSpeed = 0;
var ySpeed = 10;
var radio = 15;

window.onload = function() {
    canvas = document.getElementById("canvas");
    c = canvas.getContext("2d");
    setInterval(ball, 20); //runs bsll() every 20 miliseconds
}

function ball() {
    c.fillStyle = "white";
    c.fillRect(0, 0, canvas.width, canvas.height);

    //Ball
    c.beginPath();
    c.fillStyle = "red";
    c.arc(ballX, ballY, radio, 0, Math.PI * 2);
    c.fill();
    c.closePath();

    //Ball hits top
    if (ballY - radio <= 0) {

      if(document.getElementById("SpeedD").checked == true) {
        ySpeed = -ySpeed * 0.8; // with decay
      } else {
        ySpeed = 10; // Reset speed when it hits the top
      }
    }

    //Ball hits bottom
    if (ballY + radio >= canvas.height) {

      if(document.getElementById("SpeedD").checked == true) {
        ySpeed = -ySpeed * 0.8; // with decay
      } else {
        ySpeed = -10; // Reset speed when it hits the bottom
      }
      ballY = canvas.height - radio;
    }

    // Add gravity only if Speed Decay is checked
    if(document.getElementById("SpeedD").checked == true) {
      ySpeed += 0.5; //
    }

    //Move the ball to the right
    if(document.getElementById("Move").checked == true) {
      xSpeed = 1.5;
    } else {
      xSpeed = 0;
    }

    // Update the ball
    ballX += xSpeed;
    ballY += ySpeed;
}
