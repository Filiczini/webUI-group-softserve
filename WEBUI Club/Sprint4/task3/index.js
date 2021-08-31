// defining button and unordered list variables
const button = document.getElementById("button");
const trackingElement = function (elementId) {
  const ul = document.querySelector("ul");
  // check the length of ul, if greater then 20, remove first child.
  const cleanUpOldLogs = function () {
    if (ul.children.length >= 20) {
      ul.removeChild(ul.firstChild);
    }
  };

  // function accept string and event from eventListener
  const tellMeWhy = function (string, e) {
    const MOUSEENTERCLASS = "green";
    const MOUSELEAVECLASS = "red";
    const MOUSECLICKCLASS = "blue";
    // creating li element
    const li = document.createElement("li");
    // add text from arguments to a li element
    li.textContent = string;
    // check event and add a class
    e.type === "mouseenter"
      ? li.classList.add(MOUSEENTERCLASS)
      : e.type === "mouseleave"
      ? li.classList.add(MOUSELEAVECLASS)
      : li.classList.add(MOUSECLICKCLASS);
    // adding li to the end of list
    ul.appendChild(li);
    // execute cleanup func to delete 1st element of list
    cleanUpOldLogs();
  };

  // define button event listeners and invoke tellMeWhy func
  elementId.addEventListener("click", (e) => tellMeWhy("I was pressed", e));
  elementId.addEventListener("mouseenter", (e) => tellMeWhy("Mouse on me", e));
  elementId.addEventListener("mouseleave", (e) =>
    tellMeWhy("Mouse is not on me", e)
  );
};

trackingElement(button);
