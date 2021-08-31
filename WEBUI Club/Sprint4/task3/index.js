let button = document.getElementById("button");
let ul = document.querySelector("ul");

let tellMeWhy = function (string, e) {
  let li = document.createElement("li");
  li.textContent = string;

  e.type == "mouseenter"
    ? li.classList.add("green")
    : e.type == "mouseleave"
    ? li.classList.add("red")
    : li.classList.add("blue");

  ul.appendChild(li);

  if (ul.children.length >= 20) {
    ul.removeChild(ul.firstChild);
  }
};

button.addEventListener("click", (e) => tellMeWhy("I was pressed", e));
button.addEventListener("mouseenter", (e) => tellMeWhy("Mouse on me", e));
button.addEventListener("mouseleave", (e) =>
  tellMeWhy("Mouse is not on me", e)
);