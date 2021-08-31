// define button
const button = document.querySelector(".appeal-button");
// define container with appeals
const container = document.getElementsByClassName("appeals");

// define function that create an Appeal structure, and add it to appeals container
const addApeal = function (text) {
  // create Date and format it
  const date = new Date().toLocaleString();
  //insert HTML template with data
  container[0].insertAdjacentHTML(
    "beforeend",
    `<article class="fans-appeal">
      <p>${text}</p>
      <footer class="flex-row">
          <p><time datetime="2018-10-10 20:33">${date}</time></p>
          <p><a class="appeal-author"><b>FootballFan2000</b></a></p>
      </footer>
</article>`
  );
};
// function to prevent the default behavior of form button
function preventDef(event) {
  event.preventDefault();
  // call appealText function
  appealText();
}
// function to read the textArea value and pass it to addAppeal function
function appealText() {
  // get textArea
  const textArea = document.getElementById("fan-appeal-text");
  // read textArea text
  let textAreaAppeal = textArea.value;
  // pass text to addAppeal function
  addApeal(textAreaAppeal);
  // reload textArea text to empty string
  textArea.value = "";
}
// add eventListener to button
button.addEventListener("click", preventDef);
