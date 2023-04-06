const responses = ["c", "a", "b", "a", "c"];

const form = document.querySelector(".quiz-form");
form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();

  const results = [];

  const radioButtons = document.querySelectorAll("input[type='radio']:checked");
  //console.log(radioButtons);

  radioButtons.forEach((radioButtons, index) => {
    if (radioButtons.value === responses[index]) {
      results.push(true);
    } else {
      results.push(false);
    }
  });
  showResults(results);
}

const titleResult = document.querySelector(".results h3");
const markResult = document.querySelector(".mark");
const helpResult = document.querySelector(".help");

function showResults(results) {
  const errorsNumber = results.filter((element) => element === false).length;
  //console.log(errorsNumber);

  switch (errorsNumber) {
    case 0:
      titleResult.textContent = "bravo c'est un sans faute";
      markResult.innerHTML = "Score : <span> 5/5 </span>";
      markResult.style.display = "block";
      helpResult.textContent = "T'es vraiment un crack";
      helpResult.style.display = "block";
      break;
    case 1:
      titleResult.textContent = "c'est un sans faute";
      markResult.innerHTML = "Score : <span> 4/5 </span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retente une autre réponse dans la case rouge, puis revalide";
      helpResult.style.display = "block";
      break;
    case 2:
      titleResult.textContent = "encore un effort";
      markResult.innerHTML = "Score : <span> 3/5 </span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retente des autres réponses dans les cases rouges, puis revalide";
      helpResult.style.display = "block";
      break;
    case 3:
      titleResult.textContent = "c'est pas génial tout ça";
      markResult.innerHTML = "Score : <span> 2/5 </span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retente des autres réponses dans les cases rouges, puis revalide";
      helpResult.style.display = "block";
      break;
    case 4:
      titleResult.textContent = "c'est null !!!";
      markResult.innerHTML = "Score : <span> 1/5 </span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retente des autres réponses dans les cases rouges, puis revalide";
      helpResult.style.display = "block";
      break;
    case 5:
      titleResult.textContent = "retourne en CP";
      markResult.innerHTML = "Score : <span> 0/5 </span>";
      markResult.style.display = "block";
      helpResult.textContent =
        "Retente des autres réponses dans les cases rouges, puis revalide";
      helpResult.style.display = "block";
      break;

    default:
      titleResult.textContent = "erreur inattendue !";
  }
}
