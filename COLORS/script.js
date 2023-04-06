const colors = ["green", "yellow", "red", "white"];
const button = document.getElementById("btn");
const nameColor = document.querySelector(".color");

btn.addEventListener("click", function () {
  let randomNumber = getRandomNumber();
  //console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  nameColor.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
