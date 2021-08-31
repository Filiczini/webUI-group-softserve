// 1st way

// // define unordered list and blank string
// const ul = document.getElementById("list");
// let string = "";

// // changing order by swaping elements
// ul.insertBefore(ul.children[4], ul.children[1]);
// ul.insertBefore(ul.children[4], ul.children[3]);

// // add every element to a string
// for (const i of ul.children) {
//   string += i.textContent;
// }

// 2nd way
// define unordered list and li elements
const ul = document.getElementById("list");
const li = document.querySelectorAll("li");

// replace elements ta change the order
ul.replaceChild(li[4], li[0]);
// add elements instead of replaced
ul.prepend(li[0]);
// replace elements ta change the order
ul.replaceChild(li[3], li[2]);
// add elements instead of replaced
ul.append(li[2]);

// add styles to ul
ul.style.listStyle = "none";
// function to add display:inline to every li element
for (const el of li) {
  el.style.display = "inline";
}
