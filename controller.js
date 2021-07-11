import View from "./gameView.js";
import Model from "./model.js";

("use strict");

/////////// GAME INIT ///////////
Model.newGame();

/////////// CONTROLLERS ///////////
const controlNewGame = function () {
  Model.newGame();
};

const controlHunt = function () {
  Model.playerHunt();
};

const controlMove = function () {
  Model.playerMove();
};

const controlRest = function () {
  Model.playerRest();
};

const controlOpenHelp = function () {
  Model.openHelp();
};

const controlCloseHelp = function () {
  Model.closeHelp();
};

/////////// ADD EVENT HANDLERS ///////////
const addHandlers = function () {
  View.addHandlerMove(controlMove);
  View.addHandlerHunt(controlHunt);
  View.addHandlerRest(controlRest);
  View.addHandlerHelp(controlOpenHelp);
  View.addHandlerCloseHelp(controlCloseHelp);
  View.addHandlerNewGame(controlNewGame);
};
addHandlers();
