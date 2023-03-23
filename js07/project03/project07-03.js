"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-03

      Project to create a New Year's Eve countdown clock
      Author: Fengting Wu
      Date:   Mar 23 2023

      Filename: project07-03.js
*/

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

setInterval(countdown, 1000);

function countdown() {
  // store current time
  const now = new Date();
  currentTime.innerHTML = now.toLocaleString();

  // set new year
  const newYear = new Date("January 1, 2024"); // FIXME: don't know why hardcode a year here
  const nextYear = new Date(now.getFullYear() + 1, 0, 1);

  newYear.setFullYear(nextYear.getFullYear());

  // calculate time left
  const daysLeft = (newYear - now) / (1000 * 60 * 60 * 24);
  const hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
  const minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
  const secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

  // display time left
  daysLeftBox.textContent = Math.floor(daysLeft);
  hrsLeftBox.textContent = Math.floor(hrsLeft);
  minsLeftBox.textContent = Math.floor(minsLeft);
  secsLeftBox.textContent = Math.floor(secsLeft);
}
