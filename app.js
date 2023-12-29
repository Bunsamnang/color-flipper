const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector(".click-me-button");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hexColor = "#"; // initialize hexColor with # because hex color starts with #

  // loop 6 times to get the value 6 times combined together
  // as hex starts with # and has 6 values
  for (let i = 0; i < 6; i++) {
    const randomNumber = getRandomNumber();
    hexColor += hex[randomNumber];
  }
  color.innerHTML = hexColor;
  document.querySelector("main").style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
