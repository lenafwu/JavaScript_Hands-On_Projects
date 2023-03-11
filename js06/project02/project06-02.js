"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-02

      Project to turn a selection list into a selection of hypertext links
      Author: Fengting Wu
      Date:   Mar 11 2023

      Filename: project06-02.js
*/

window.addEventListener("load", () => {
  const allSelect = document.querySelectorAll("form#govLinks select");

  for (let i = 0; i < allSelect.length; i++) {
    allSelect[i].onchange = (evt) => {
      let linkURL = evt.target.value;
      let newWin = window.open(linkURL);
    };
  }
});
