const addAppealToPage = function (button, container, textArea, template) {
  function handleButtonClick(event) {
    event.preventDefault();

    addValueToElement(textArea.value, container);
    clearText(textArea);
  }

  function addValueToElement(value, element) {
    if (value) {
      // create Date and format it
      const date = new Date().toLocaleString();
      //insert HTML template with data
      template = template.replace("%%%value%%%", value);
      template = template.replaceAll("%%%date%%%", date);
      element.insertAdjacentHTML("beforeend", template);
    }
  }
  function clearText(el) {
    el.value = "";
  }
  // add eventListener to button
  button.addEventListener("click", handleButtonClick);
};

const addCommentButton = document.getElementById("appeal-button");
const comentsContainer = document.getElementById("appeals");
const comentsTextArea = document.getElementById("fan-appeal-text");
const commentsTemplate = `
<article class="fans-appeal">
  <p>%%%value%%%</p>
  <footer class="flex-row">
    <p><time datetime="%%%date%%%">%%%date%%%</time></p>
    <p><a class="appeal-author"><b>FootballFan2000</b></a></p>
  </footer>
</article>`;

addAppealToPage(
  addCommentButton,
  comentsContainer,
  comentsTextArea,
  commentsTemplate
);
