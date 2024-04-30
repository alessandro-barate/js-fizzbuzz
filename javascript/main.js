"use strict";

const ul = document.getElementById("numbers-list");

for (let index = 1; index <= 100; index++) {
  const li = document.createElement("li");
  li.append("Ciao");
  ul.append(li);

  if (li % 3) {
    console.log("divisibile per 3");
  } else if (li % 5) {
    console.log("divisibile per 5");
  } else if (li % 3 && li % 5) {
    console.log("divisibile per 3 e per 5");
  }
}
