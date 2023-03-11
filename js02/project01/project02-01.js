/*    JavaScript 7th Edition
      Chapter 2
      Project 02-01

      Celsius <-> Farenheit Coverter
      Author: Fengting Wu # 301264494
      Date:   Jan 27 2023

      Filename: project02-01.js
 */

function FarenheitToCelsius(degree) {
  return (degree - 32) / 1.8;
}

function CelsiusToFahrenheit(degree) {
  return degree * 1.8 + 32;
}

const C_VALUE = document.getElementById("cValue");
const F_VALUE = document.getElementById("fValue");

C_VALUE.onchange = () => {
  let cDegree = C_VALUE.value;
  F_VALUE.value = CelsiusToFahrenheit(cDegree);
};

F_VALUE.onchange = () => {
  let fDegree = F_VALUE.value;
  C_VALUE.value = FarenheitToCelsius(fDegree);
};
