const secretNumber = Math.trunc(Math.random() * 100) + 1;

 
let score = 20;

console.log(secretNumber);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when ther is no input

  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    // when players wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector("body").style.color = "#fff";
    document.querySelector(".guess").style.backgroundColor = "#666";
    document.querySelector(".check").style.backgroundColor = "#666";
    document.querySelector(".again").style.backgroundColor = "#666";
    document.querySelector(".number").style.background = "#666";

    document.querySelector(".number").style.width = "13rem";
    document.querySelector(".number").style.height = "13rem";
    document.querySelector(".container").style.backgroundColor = "#60b347";

    document.querySelector(".number").textContent = secretNumber;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too high!";
      score = score - 1;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥  You lost the game!";
      document.querySelector(".score").textContent = 0;
    }

    // when guess is too high
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥  You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#e03d3d";
      document.querySelector(".container").style.backgroundColor = "#e03d3d";
      document.querySelector("body").style.color = "#444";
      document.querySelector(".btn").style.color = "#444";
      document.querySelector(".check").style.color = "#444";
      document.querySelector(".number").style.color = "#444";
      document.querySelector(".guess").style.backgroundColor = "#fff";
      document.querySelector(".check").style.backgroundColor = "#fff";
      document.querySelector(".again").style.backgroundColor = "#fff";
      document.querySelector(".number").style.background = "#fff";


    }

    // when guess is too low
  }
});

// // Realod again

document.querySelector(".again").addEventListener("click", function () {
  window.location.reload();
});
