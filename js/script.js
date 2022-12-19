"use strict";
let inp1 = document.getElementById("input1");
let inp2 = document.getElementById("input2");
function getResult1() {
  if (document.querySelector("#div1").querySelector("p")) {
    document.querySelector("#div1").querySelector("p").remove();
  }
  let result = 1000 * Number(inp1.value);
  let p = document.createElement("p");
  p.innerText = result;
  document.querySelector("#div1").append(p);
  console.log(inp1);
}

function getResult2() {
  if (document.querySelector("#div2").querySelector("p")) {
    document.querySelector("#div2").querySelector("p").remove();
  }
  let res = 2000 * Number(inp2.value);
  let p = document.createElement("p");
  p.innerHTML = res;
  document.querySelector("#div2").append(p);
}
document.getElementById("input1").addEventListener("change", getResult1);

document.getElementById("input2").addEventListener("change", getResult2);
