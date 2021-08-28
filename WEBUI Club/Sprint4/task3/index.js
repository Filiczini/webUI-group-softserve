let button = document.getElementById("button");
let ul = document.querySelector("ul");

let tellMeWhy = function (string) {
  let li = document.createElement("li");
  li.textContent = string;
  ul.appendChild(li);
};

button.addEventListener("click", () => tellMeWhy("I was pressed"));
button.addEventListener("mouseenter", () => tellMeWhy("Mouse on me"));
button.addEventListener("mouseleave", () => tellMeWhy("Mouse is not on me"));
