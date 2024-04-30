"use strict";

const ul = document.getElementById("numbers-list");

for (let index = 1; index <= 100; index++) {
  const li = document.createElement("li");
  ul.append(li);
  li.classList.add("li-size");

  if (index % 3 == 0 && index % 5 == 0) {
    console.log("divisibile per 3 e per 5");
    li.append("FizzBuzz");
    li.classList.add("fizz-buzz");
  } else if (index % 3 == 0) {
    li.append("Fizz");
    li.classList.add("fizz");
    console.log("divisibile per 3");
  } else if (index % 5 == 0) {
    li.append("Buzz");
    li.classList.add("buzz");
    console.log("divisibile per 5");
  } else {
    li.append(index);
    li.classList.add("number");
    console.log(index);
  }
}
