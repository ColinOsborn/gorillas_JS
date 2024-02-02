let state = {};

const canvas = document.getElementById('game');

newGame();

function newGame() {
  // initialize game state
  state = {
    phase: 'aiming',
    currentPlayer: 1,
    bomb: {
      x: undefined,
      y: undefined,
      velocity: { x: 0, y: 0 },
    },
    buildings: generateBuildings(),
  };

  initializeBombPosition();

  draw();
};

function draw() {

}

function generateBuildings() {

}

function initializeBombPosition() {
  
}

//Event Handlers

function throwBomb() {

}

function animate(timestamp) {

}
