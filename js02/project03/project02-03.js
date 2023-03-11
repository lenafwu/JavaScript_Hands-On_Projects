/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Fengting Wu # 301264494
      Date:   Jan 27 2023

      Filename: project02-03.js
 */
const FEEDBACK = document.getElementById("feedback");
const SQUARE = document.getElementById("square");
const TRIANGLE = document.getElementById("triangle");
const CIRCLE = document.getElementById("circle");
SQUARE.onmouseover = () => {
  FEEDBACK.innerHTML = "You're hovering over the square";
};
SQUARE.onmouseout = () => {
  FEEDBACK.innerHTML = "";
};
TRIANGLE.onmouseover = () => {
  FEEDBACK.innerHTML = "You're hovering over the triangle";
};
TRIANGLE.onmouseout = () => {
  FEEDBACK.innerHTML = "";
};
CIRCLE.onmouseover = () => {
  FEEDBACK.innerHTML = "You're hovering over the circle";
};
CIRCLE.onmouseout = () => {
  FEEDBACK.innerHTML = "";
};
