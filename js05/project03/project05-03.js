"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-03

      Project to create a table of headings from an article
      Author: Fengting Wu
      Date:   Feb 20 2023

      Filename: project05-03.js
*/

// Global variables
const sourceDoc = document.querySelector("#source_doc");
const toc = document.querySelector("#toc");
const heading = "H2";
let headingCount = 1;

for (let n = sourceDoc.firstChild; n !== null; n = n.nextElementSibling) {
  if (n.nodeName == heading) {
    let anchor = document.createElement("a");
    anchor.id = "doclink" + headingCount; // FW: should be anchor.id instead of anchor.name
    // anchor.name would work too, but it's deprecated
    n.insertBefore(anchor, n.firstChild);
    let listItem = document.createElement("li");
    let link = document.createElement("a");
    listItem.appendChild(link);
    link.textContent = n.textContent;
    link.href = "#doclink" + headingCount; // FW: should be link.href instead of linkItem.href
    toc.appendChild(listItem);
    headingCount++;
  }
}
