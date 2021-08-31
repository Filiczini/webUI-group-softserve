// define all variables. All html tags to work
const h1 = document.querySelector("h1");
const myDiv = document.querySelector("#myDiv");
const myList = document.getElementById("myList");
const span = document.getElementsByTagName("span");

// Change h1 backgound color
h1.style.backgroundColor = "#82ef7d";

// Change ul>li styles by using children collection
myDiv.children[0].style.fontWeight = "bold";
myDiv.children[1].style.color = "#ff0000";
myDiv.children[2].style.textDecoration = "underline";
myDiv.children[3].style.fontStyle = "italic";

//Define CSS styles by using multy-value method CSStext
myList.style.cssText = "display: flex; list-style: none";

// Hide an element. Also we can use opacity 0.
// Display: none - is not a good practise, cause delete element from a flow
span[0].style.visibility = "hidden";
