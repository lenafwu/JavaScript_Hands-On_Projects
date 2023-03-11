/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Fengting Wu # 301264494
      Date:   Jan 27 2023

      Filename: project02-04.js
 */
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}

document.getElementById("chicken").onclick = calcTotal;
document.getElementById("halibut").onclick = calcTotal;
document.getElementById("burger").onclick = calcTotal;
document.getElementById("salmon").onclick = calcTotal;
document.getElementById("salad").onclick = calcTotal;

function calcTotal() {
  let cost = 0;
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  if (buyChicken) {
    cost += CHICKEN_PRICE;
  }
  if (buyHalibut) {
    cost += HALIBUT_PRICE;
  }
  if (buyBurger) {
    cost += BURGER_PRICE;
  }
  if (buySalmon) {
    cost += SALAD_PRICE;
  }
  if (buySalad) {
    cost += SALAD_PRICE;
  }
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  let tax = cost * SALES_TAX;
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  let totalCost = cost + tax;
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);
}
