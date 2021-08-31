function addStyles() {
  // define all variables. All html tags to work
  // Change h1 backgound color
  const h1 = document.querySelector("h1");
  const myDiv = document.getElementById("myDiv");
  const myList = document.getElementById("myList");
  const span = document.getElementsByTagName("span");
  const p = myDiv.querySelectorAll("p");
  h1.style.backgroundColor = "#82ef7d";

  // Change ul>li styles by using children collection
  p[0].style.fontWeight = "bold";
  p[1].style.color = "#ff0000";
  p[2].style.textDecoration = "underline";
  p[3].style.fontStyle = "italic";

  //add styles to every li element
  for (const el of myList.children) {
    el.style.cssText = "display: inline; float: left";
  }

  // Hide an element. Also we can use opacity 0.
  // Display: none - is not a good practise, cause delete element from a flow
  span[0].style.visibility = "hidden";
}

addStyles();
