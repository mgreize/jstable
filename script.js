"use strict";

var th2 = document.getElementsByTagName("th")[1];
var input1 = document.getElementsByTagName("input")[0];
var input2 = document.getElementsByTagName("input")[1];
var input3 = document.getElementsByTagName("input")[2];
var prideti = document.getElementsByTagName("button")[0];
var istrintiPirm = document.getElementsByTagName("button")[1];
var istrintiPask = document.getElementsByTagName("button")[2];
var table = document.getElementsByTagName("table")[0];
th2.style.background = "darkorange";

prideti.addEventListener("click", function () {
  if (input1.value == "" || input2.value == "" || input3.value == "") {
    alert("Įveskite duomenis");
  } else if (input3.value < 1) {
    alert("Amžius turi buti teigiamas skaičius");
  } else {
    var tr = document.createElement("tr");
    tr.innerHTML = `<td>${input1.value}</td> <td>${input2.value}</td> <td>${input3.value}</td>`;
    table.append(tr);
    input1.value = "";
    input2.value = "";
    input3.value = "";
  }
});

istrintiPirm.addEventListener("click", function () {
  var tr = document.getElementsByTagName("tr");
  if (tr.length > 1) {
    tr[1].remove();
  } else {
    alert("Nebėra ką trinti");
  }
});

istrintiPask.addEventListener("click", function () {
  var tr = document.getElementsByTagName("tr");
  if (tr.length > 1) {
    tr[tr.length - 1].remove();
  } else {
    alert("Nebėra ką trinti");
  }
});
// remove.addEventListener("click", function () {
//   var p = document.getElementsByTagName("p");

//   //   p[0].remove();
//   p[p.length - 1].remove();
// });
