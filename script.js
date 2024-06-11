let input = document.querySelector(".input");
let calcButton = document.querySelectorAll("button");
let resultScreen = "";
for (let i = 0; i < calcButton.length; i++) {
  calcButton[i].addEventListener("click", () => {
    if (calcButton[i].id === "=") {
      resultScreen = eval(resultScreen);
      input.value = resultScreen;
      resultScreen = "";
    } else if (calcButton[i].id === "AC") {
      input.value = "";
      resultScreen = "";
    } else if (calcButton[i].id === "DEL") {
      resultScreen = resultScreen.substring(0, resultScreen.length - 1);
      input.value = resultScreen;
    } else {
      resultScreen += calcButton[i].id;
      input.value = resultScreen;
    }
  });
}
