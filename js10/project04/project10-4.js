"use strict";
/*  JavaScript 7th Edition
    Chapter 10
    Project 10-04

    Chess Board Drag and Drop
    
    Author: Fengting Wu
    Date:   April 12, 2023

    Filename: project10-04.js
*/

// Page Objects
let pieces = document.getElementsByTagName("span");
let boardSquares = document.querySelectorAll("table#chessboard td");
let whiteBox = document.getElementById("whiteBox");
let blackBox = document.getElementById("blackBox");

for (let i = 0; i < pieces.length; i++) {
  pieces[i].draggable = true;
  // Create an event handler for the dragstart event that sets the text of event target’s id in the dataTransfer object.
  pieces[i].addEventListener("dragstart", function (e) {
    e.dataTransfer.setData("text", e.target.id);
  });
}

// for loop for boardSquares
for (let i = 0; i < boardSquares.length; i++) {
  // For each item create an event handler for the dragover event. In the anonymous function associated with the event, add a command that prevents the default actions associated with the dragover event.
  boardSquares[i].addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  // For each item create an event handler for the drop event that runs an anonymous function.
  boardSquares[i].addEventListener("drop", function (e) {
    e.preventDefault();
    // Declare the pieceID variable that gets the id value from the dataTransfer object
    let pieceID = e.dataTransfer.getData("text");
    // Declare the movingPiece variable that references the document element with that id.
    let movingPiece = document.getElementById(pieceID);
    // If the tag name of the event target equals “TD” (indicating that you are dropping the piece onto an emptysquare), append movingPiece as a child of the event target.
    if (e.target.tagName == "TD") {
      e.target.appendChild(movingPiece);
    } else if (e.target.tagName == "SPAN") {
      // a. Store the event target in a variable named occupyingPiece
      let occupyingPiece = e.target;
      // Store the parent element of occupyingPiece in a variable named square
      let square = occupyingPiece.parentNode;
      // Use the appendChild() method to append movingPiece as a child of square.
      square.appendChild(movingPiece);
      // Move the occupying piece back to the chess box. If the class name of occupyingPiece equals “white” thenuse the appendChild() method to append occupyingPiece to the whiteBox object; otherwise append occupyingPiece to the blackBox object.
      if (occupyingPiece.className == "white") {
        whiteBox.appendChild(occupyingPiece);
      } else {
        blackBox.appendChild(occupyingPiece);
      }
    }
  });
}
