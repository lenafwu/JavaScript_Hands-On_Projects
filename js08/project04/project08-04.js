"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-04

      Retrieve Staff Data from a JSON File
      Author: Fengting Wu
      Date:   Mar 28 2023

      Filename: project08-04.js
*/

let getFileButton = document.getElementById("getFile");
let containerBox = document.getElementById("container");

getFileButton.onchange = function () {
  // Retrieve information about the selected file
  let JSONfile = this.files[0];

  // Read the contents of the selected file
  let fr = new FileReader();
  fr.readAsText(JSONfile);

  // Once the file has finished loading, parse the JSON file
  fr.onload = function () {
    const staff = JSON.parse(fr.result);
    makeStaffTable(staff);
  };
};

function makeStaffTable(staff) {
  let staffTable = document.createElement("table");
  let headerRow = document.createElement("tr");

  for (let prop in staff.directory[0]) {
    let headerCell = document.createElement("th");
    headerCell.innerHTML = prop;
    headerRow.appendChild(headerCell);
  }
  staffTable.appendChild(headerRow);

  for (let i = 0; i < staff.directory.length; i++) {
    let row = document.createElement("tr");
    for (let prop in staff.directory[i]) {
      let cell = document.createElement("td");
      cell.innerHTML = staff.directory[i][prop];
      row.appendChild(cell);
    }
    staffTable.appendChild(row);
  }
  containerBox.appendChild(staffTable);
}
