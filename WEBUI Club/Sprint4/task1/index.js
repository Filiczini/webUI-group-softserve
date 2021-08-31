// 1st way

// const ul = document.getElementById("list");
// let string = "";

// ul.insertBefore(ul.children[4], ul.children[1]);
// ul.insertBefore(ul.children[4], ul.children[3]);

// for (const i of ul.children) {
//   i.textContent += ", ";
//   string += i.textContent;
// }

// console.log(string.slice(0, string.length - 2));

//2nd way
const ul = document.getElementById("list");
const li = document.querySelectorAll("li");
ul.replaceChild(li[4], li[0]);
ul.prepend(li[0]);
ul.replaceChild(li[3], li[2]);
ul.append(li[2]);

ul.style.listStyle = "none";
ul.style.display = "inline";

for (const i of li) {
  i.textContent += ", ";
  i.style.display = "inline";
}
