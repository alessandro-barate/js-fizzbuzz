"use strict";

const ul = document.getElementById("numbers-list");

for (let index = 1; index <= 100; index++) {
  const li = document.createElement("li");
  li.append("Elemento");
  ul.append(li);
  // console.log(index);

  if (index % 3 == 0 && index % 5 == 0) {
    console.log("divisibile per 3 e per 5");
  } else if (index % 3 == 0) {
    console.log("divisibile per 3");
  } else if (index % 5 == 0) {
    console.log("divisibile per 5");
  } else {
    console.log(index);
  }
}
