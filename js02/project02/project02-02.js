/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Fengting Wu # 301264494
      Date:   Jan 27 2023

      Filename: project02-02.js
 */

function verifyForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;

  if (name && email && phone) {
    window.alert("Thank you!");
  } else {
    window.alert("Please fill in all fields");
  }
}
document.getElementById("submit").addEventListener("click", verifyForm);
