// 1st way

// define unordered list and blank string
const ul = document.getElementById("list");
let string = "";

const changeLiOrder = function () {
  // changing order by swaping elements
  ul.insertBefore(ul.children[4], ul.children[1]);
  ul.insertBefore(ul.children[4], ul.children[3]);

  // add every element to a string
  for (const i of ul.children) {
    string += i.textContent;
  }
};

// 2nd way
// define unordered list and li elements

const changeLiOrder2 = function () {
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
};

//3d way
// define function newLiOrder
const newLiOrder = function (list, arr) {
  // create another ul element
  const secondUl = document.createElement("ul");
  for (let i = 0; i < arr.length; i++) {
    //copy childrens of original list
    let newLi = list.children[arr[i] - 1].cloneNode(true);
    //append childrens to new list
    secondUl.appendChild(newLi);
  }
  // add second list to a page
  list.after(secondUl);
  // add id class to a second list
  secondUl.id = list.id;
  // remove original list from the page
  list.remove();
};

// execute function with parameters from the task
newLiOrder(ul, [1, 5, 2, 4, 3]);
