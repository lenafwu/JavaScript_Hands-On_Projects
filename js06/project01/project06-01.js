"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-01

      Project to validate a form used for setting up a new account
      Author: Fenting Wu
      Date:   Mar 11 2023

      Filename: project06-01.js
*/

const submitButton = document.getElementById("submitButton");
const pwd = document.getElementById("pwd");
const pwd2 = document.getElementById("pwd2");

submitButton.addEventListener("click", () => {
  // if pwd fails the pattern match, display validation message
  if (!pwd.value.match(pwd.pattern)) {
    pwd.setCustomValidity(
      "Your password must be at least 8 characters with at least one letter and one number."
    );
    // if pwds don't match, display validation message
  } else if (pwd.value != pwd2.value) {
    pwd.setCustomValidity("Your passwords must match.");
    // if both pass, clear validation message
  } else {
    pwd.setCustomValidity("");
  }
});
