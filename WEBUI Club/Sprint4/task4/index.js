// define button
const button = document.querySelector(".appeal-button");
// define container with appeals
const container = document.getElementsByClassName("appeals");

// define function that
const addApeal = function (text) {
  let article = document.createElement("article");
  article.setAttribute("class", "fans-appeal");
  let pText = document.createElement("p");
  pText.textContent = text;
  article.appendChild(pText);
  const footer = document.createElement("footer");
  footer.setAttribute("class", "flex-row");
  article.appendChild(footer);
  let pTime = document.createElement("p");
  let pAuthor = document.createElement("p");
  footer.appendChild(pTime);
  footer.appendChild(pAuthor);
  let timeText = document.createElement("time");
  pTime.appendChild(timeText);
  let authorName = document.createElement("a");
  pAuthor.appendChild(authorName);
  authorName.setAttribute("class", "appeal-author");
  authorName.textContent = "FootballFan2000";
  let time = new Date();
  timeText.textContent = time.toLocaleString();
  container[0].appendChild(article);
};

function addAppealFunc() {
  const textArea = document.getElementById("fan-appeal-text");
  let textAreaAppeal = textArea.value;
  addApeal(textAreaAppeal);
  textArea.value = "";
}

button.addEventListener("click", addAppealFunc);
