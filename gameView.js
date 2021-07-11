/////////// SELECTING DOM ELEMENTS ///////////
const btnNew = document.querySelector(".btn--new");
const btnMove = document.querySelector(".btn--move");
const btnHunt = document.querySelector(".btn--hunt");
const btnRest = document.querySelector(".btn--rest");
const btnHelp = document.querySelector(".btn--help");
const overlay = document.querySelector(".overlay");
const btnCloseHelp = document.querySelector("#close--help");

/////////// VIEWER CLASS ///////////
class View {
  addHandlerMove(handler) {
    btnMove.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerHunt(handler) {
    btnHunt.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerRest(handler) {
    btnRest.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerHelp(handler) {
    btnHelp.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }

  addHandlerCloseHelp(handler) {
    btnCloseHelp.addEventListener("click", () => handler());
    overlay.addEventListener("click", () => handler());
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") handler();
    });
  }

  addHandlerNewGame(handler) {
    btnNew.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new View();
