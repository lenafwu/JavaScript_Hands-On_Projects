"use strict";
/*    JavaScript 7th Edition
      Chapter 10
      Project 10-02

      Project to create a drag and drop tangram puzzle
      Author: 
      Date:   

      Filename: project10-02.js
*/

// Reference to the tangram puzzle board
let puzzleBoard = document.getElementById("puzzle");
// Counter for the zIndex style of each puzzle piece
let zCounter = 1;
let eventX, eventY, tanX, tanY;

// Node list representing the tangram pieces
let tans = document.querySelectorAll("div#puzzle > img");

// Function to rotate a tan by a specified number of degrees
function rotateTan(elem, deg) {
  const obj = window.getComputedStyle(elem, null);
  const matrix = obj.getPropertyValue("transform");
  let angle = 0;
  if (matrix !== "none") {
    const values = matrix.split("(")[1].split(")")[0].split(",");
    const a = values[0];
    const b = values[1];
    angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
  }

  if (angle < 0) {
    angle += 360;
  }

  let newAngle = angle + deg;

  elem.style.transform = "rotate(" + newAngle + "deg)";
}

for (let i = 0; i < tans.length; i++) {
  tans[i].addEventListener("pointerdown", grabTan);
}

function grabTan() {
  if (event.shiftKey) {
    rotateTan(event.target, 15);
  } else {
    eventX = event.clientX;
    eventY = event.clientY;
    event.target.style.touchAction = "none";
    zCounter++;
    event.target.style.zIndex = zCounter;
    event.target.addEventListener("pointermove", moveTan);
    event.target.addEventListener("pointerup", dropTan);
  }
}

function moveTan() {
  let x = event.clientX - eventX;
  let y = event.clientY - eventY;
  event.target.style.left = event.target.offsetLeft + x + "px";
  event.target.style.top = event.target.offsetTop + y + "px";
}

function dropTan() {
  event.target.removeEventListener("pointermove", moveTan);
  event.target.removeEventListener("pointerup", dropTan);
}
