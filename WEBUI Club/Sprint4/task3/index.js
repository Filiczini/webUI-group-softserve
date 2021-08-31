// defining button and unordered list variables
let button = document.getElementById("button");
let ul = document.querySelector("ul");

// check the length of ul, if greater then 20, remove first child.
let length = function () {
  if (ul.children.length >= 20) {
    ul.removeChild(ul.firstChild);
  }
};

// function accept string and event from eventListener
let tellMeWhy = function (string, e) {
  // creating li element
  let li = document.createElement("li");
  // add text from arguments to a li element
  li.textContent = string;
  // check event and add a class
  e.type == "mouseenter"
    ? li.classList.add("green")
    : e.type == "mouseleave"
    ? li.classList.add("red")
    : li.classList.add("blue");
  // adding li to the end of list
  ul.appendChild(li);
  // invoke length function
  length();
};

// define button event listeners and invoke tellMeWhy func
button.addEventListener("click", (e) => tellMeWhy("I was pressed", e));
button.addEventListener("mouseenter", (e) => tellMeWhy("Mouse on me", e));
button.addEventListener("mouseleave", (e) =>
  tellMeWhy("Mouse is not on me", e)
);
