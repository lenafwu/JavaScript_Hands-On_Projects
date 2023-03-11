"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-02

      Project to move images between a photo bucket and photo list.
      Author: Fengting Wu
      Date:   Feb 20 2023

      Filename: project05-02.js
*/

// Global variables
const images = document.querySelectorAll("img");
const photoBucket = document.querySelector("#photo_bucket");
const photoList = document.querySelector("#photo_list");

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function () {
    if (this.parentNode.id === "photo_bucket") {
      let newItem = document.createElement("li");
      photoList.appendChild(newItem);
      newItem.appendChild(this);
    } else {
      let oldItem = this.parentNode;
      photoBucket.appendChild(this);
      oldItem.remove(); // FW: should not use removeChild here.
    }
  });
}
