"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Fengting Wu
      Date:   Mar 11 2023

      Filename: project06-03.js
*/

const useShip = document.getElementById("useShip");
useShip.addEventListener("click", copyShippingToBilling);

function copyShippingToBilling() {
  // insert an if statement that tests whether useShip is checked
  if (useShip.checked) {
    // Set the value of the firstnameBill field to the value of the firstnameShip field.
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;
    // Repeat the previous step to set the value of the lastnameBill, address1Bill, address2Bill, cityBill, countryBill, codeBill fields to the values of their corresponding fields in the shipping part of the form.
    document.getElementById("lastnameBill").value =
      document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value =
      document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value =
      document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value =
      document.getElementById("cityShip").value;
    document.getElementById("countryBill").value =
      document.getElementById("countryShip").value;
    document.getElementById("codeBill").value =
      document.getElementById("codeShip").value;
    // Set the selectedIndex property of the stateBill field to the value of the selectedIndex property of the stateShip field.
    document.getElementById("stateBill").selectedIndex =
      document.getElementById("stateShip").selectedIndex;
  }
}

const formElements = document.querySelectorAll("input[type='text']");
const fieldCount = formElements.length;
const errorBox = document.getElementById("errorBox");
for (let i = 0; i < fieldCount; i++) {
  formElements[i].addEventListener("invalid", showValidationError);
}
function showValidationError(evt) {
  evt.preventDefault();
  errorBox.textContent = "Complete all highlighted fields";
}
