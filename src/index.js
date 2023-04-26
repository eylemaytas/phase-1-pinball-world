const gameList = document.querySelector(".game-list");
const gameImage = document.getElementById("detail-image");
const gameName = document.getElementById("detail-title");
const highScore = document.getElementById("detail-high-score");
const highScoreForm = document.getElementById("high-score-form");
const scoreInput = document.getElementById("score-input");
fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((games) => {
    games.forEach((game) => {
      const h5 = document.createElement("h5");
      h5.textContent = game.name + `(${game.manufacturer_name})`;
      gameList.appendChild(h5);
      h5.addEventListener("click", () => {
        displayGameDetails(game);
      });
    });
    displayGameDetails(games[0]);
  });
function displayGameDetails(game) {
  gameImage.src = game.image;
  gameName.textContent = game.name;
  highScore.textContent = game.high_score;
}

highScoreForm.addEventListener("submit", (event) => {
  event.preventDefault()
highScore.textContent = scoreInput.value


});







/*const gameList = document.querySelector(".game-list");
const gameImage = document.getElementById("detail-image");
const gameName = document.getElementById("detail-title");
const score = document.getElementById('detail-high-score')
const scoreForm = document.getElementById('high-score-form')
const scoreInput = document.getElementById('score-input')
fetch("http://localhost:3000/games")
  .then((res) => res.json())
  .then((games) => {
    games.forEach((game) => {
      const h5 = document.createElement("h5");
      h5.textContent = game.name + `(${game.manufacturer_name})`;
      gameList.appendChild(h5);
      h5.addEventListener('click', () => {
        displayGameDetails(game)
      })
    });
    displayGameDetails(games[0])
  });

function displayGameDetails(game){
    gameImage.src = game.image;
    gameName.textContent = game.name;
    highScore.textContent=game.high_score;
}

scoreForm.addEventListener('submit' , (event) => {
    event.preventDefault()
score.textContent = scoreInput.value

})

*/
