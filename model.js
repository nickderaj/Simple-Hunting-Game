import { STARTING_STAM, STARTING_POS, NUM_TURNS } from "./config.js";

/////////// SELECTING DOM ELEMENTS ///////////
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const stamina0El = document.querySelector("#stamina--0");
const stamina1El = document.querySelector("#stamina--1");
const position0El = document.querySelector("#position--0");
const position1El = document.querySelector("#position--1");
const adjacent0El = document.querySelector("#adjacent--0");
const adjacent1El = document.querySelector("#adjacent--1");
const charEl = document.querySelector(".character");
const turnsEl = document.querySelector(".turns");
const help = document.querySelector("#help");
const overlay = document.querySelector(".overlay");

/////////// DEFINING VARIABLES ///////////
const map = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
const huntingMap = {
  A: ["B", "C", "K"],
  B: ["D", "E"],
  C: ["E", "G", "H"],
  D: ["E", "F"],
  E: ["G", "I", "F"],
  F: ["I", "J"],
  G: ["I", "K"],
  H: ["I", "F"],
  I: ["K"],
  J: ["K"],
  K: [],
};
const boarsRemaining = new Array(Object.keys(huntingMap).length)
  .fill(3)
  .fill(0, -1);
let stamina, scores, position, activePlayer, playing, adjacent, turnsLeft;

/////////// GAME MODEL ///////////
class Model {
  _updateUI() {
    adjacent = [huntingMap[position[0]], huntingMap[position[1]]];
    score0El.textContent = scores[0];
    score1El.textContent = scores[1];
    stamina0El.textContent = stamina[0];
    stamina1El.textContent = stamina[1];
    position0El.textContent = `${position[0]}: ${
      boarsRemaining[map.indexOf(position[0])]
    }`;
    position1El.textContent = `${position[1]}: ${
      boarsRemaining[map.indexOf(position[1])]
    }`;
    adjacent0El.textContent = adjacent[0];
    adjacent1El.textContent = adjacent[1];
    turnsEl.textContent = `Turns Left: ${turnsLeft}`;
  }

  _switchPlayer() {
    this._updateUI();
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
    if (player0El.classList.contains("player--active"))
      charEl.src = "img/Loki.png";
    if (player1El.classList.contains("player--active"))
      charEl.src = "img/Jax.png";
  }

  _victoryConditions() {
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");

    // Draw
    if (scores[0] >= scores[1]) {
      playing = false;
    }
    // Loki Wins
    else if (scores[0] > scores[1]) {
      document.querySelector(`.player--0`).classList.add("player--winner");
      charEl.src = "img/Loki.png";
    }
    // Jax Wins
    else if (scores[0] < scores[1]) {
      document.querySelector(`.player--1`).classList.add("player--winner");
      charEl.src = "img/Jax.png";
    }
  }

  newGame() {
    scores = [0, 0];
    stamina = [STARTING_STAM, STARTING_STAM]; // set up in config file
    position = [STARTING_POS, STARTING_POS]; // set up in config file
    activePlayer = 0;
    playing = true;
    turnsLeft = NUM_TURNS; // set up in config file
    boarsRemaining.fill(3).fill(0, -1);
    this._updateUI();
    charEl.src = "img/Loki.png";
    player0El.classList.add("player--active");
    player1El.classList.remove("player--active");
    player0El.classList.remove("player--winner");
    player1El.classList.remove("player--winner");
  }

  playerMove() {
    if (playing) {
      if (stamina[activePlayer] === 0)
        return alert("No stamina, you need to rest!");
      const destination = prompt(
        "Where do you want to go?",
        `${[...adjacent[activePlayer]]}`
      );
      if (!destination) return;

      // Check if they get to the choppa
      if (
        adjacent[activePlayer].includes(destination.toUpperCase()) &&
        destination.toUpperCase() === "K"
      ) {
        position[activePlayer] = destination.toUpperCase();
        stamina[activePlayer]--;
        turnsLeft = 0;
        this._updateUI();

        // Update UI
        this._victoryConditions();
        return;
      }

      // Otherwise check if they can move
      if (
        adjacent[activePlayer].includes(destination.toUpperCase()) &&
        destination.toUpperCase() !== "K"
      ) {
        position[activePlayer] = destination.toUpperCase();
        stamina[activePlayer]--;
        turnsLeft--;
        this._switchPlayer();
      } else
        alert(
          "Invalid Location! Specify the LETTER of an adjacent node (E.g: B)"
        );
    }
  }

  playerRest() {
    if (playing) {
      if (stamina[activePlayer] === 3)
        return alert("Your stamina is already full!");
      stamina[activePlayer] =
        stamina[activePlayer] === 1 || stamina[activePlayer] === 2 ? 3 : 2;
      document.querySelector(`#stamina--${activePlayer}`).textContent =
        stamina[activePlayer];
      turnsLeft--;
      if (turnsLeft === 0) {
        this._victoryConditions();
        return;
      }
      this._switchPlayer();
    }
  }

  playerHunt() {
    if (playing) {
      // No stamina:
      if (stamina[activePlayer] === 0)
        return alert("No stamina, you need to rest!");
      // Both on the same tile:
      if (position[0] === position[1]) {
        console.log(boarsRemaining[map.indexOf(position[activePlayer])]);
        // Active Player gets a point if possible
        if (boarsRemaining[map.indexOf(position[activePlayer])] >= 1) {
          boarsRemaining[map.indexOf(position[activePlayer])]--;
          scores[activePlayer]++;
          stamina[activePlayer]--;
          turnsLeft--;
        } else
          return alert(
            `${
              stamina[activePlayer] === 0
                ? "Not enough Stamina"
                : "No boars on this tile"
            }`
          );
        // Other Player gets a point if possible
        if (
          stamina[1 - activePlayer] >= 1 &&
          boarsRemaining[map.indexOf(position[activePlayer])] >= 1
        ) {
          boarsRemaining[map.indexOf(position[activePlayer])]--;
          scores[1 - activePlayer]++;
          stamina[1 - activePlayer]--;
        }
        if (turnsLeft === 0) {
          this._victoryConditions();
          return;
        }
        this._switchPlayer();
      }

      // Both on different tiles:
      if (position[0] !== position[1]) {
        // Active Player gets a point if possible
        if (
          stamina[activePlayer] >= 2 &&
          boarsRemaining[map.indexOf(position[activePlayer])] >= 1
        ) {
          boarsRemaining[map.indexOf(position[activePlayer])]--;
          scores[activePlayer]++;
          stamina[activePlayer] -= 2;
          turnsLeft--;
        } else
          return alert(
            `${
              stamina[activePlayer] === 1
                ? "Not enough Stamina"
                : "No boars on this tile"
            }`
          );
        if (turnsLeft === 0) {
          this._victoryConditions();
          return;
        }
        this._switchPlayer();
      }
    }
  }

  openHelp() {
    help.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }

  closeHelp() {
    help.classList.add("hidden");
    overlay.classList.add("hidden");
  }
}

export default new Model();
