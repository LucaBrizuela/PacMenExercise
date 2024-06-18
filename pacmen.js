var pacMen = []; // This array holds all the pacmen
let gameRunning = false;

// This function returns an object with random values
function setToRandom(scale) {
  return {
    x: Math.random() * scale,
    y: Math.random() * scale,
  };
}

// Factory to make a PacMan at a random position with random velocity
function makePac() {
  // returns an object with random values scaled {x: 33, y: 21}
  let velocity = setToRandom(10); // {x:?, y:?}
  let position = setToRandom(200);

  // Return details in an object
  return {
    position,
    velocity,
  };
}

function update() {
  // Loop over pacmen array and move each one
  pacMen.forEach((item) => {
    checkCollisions(item);
    item.position.x += item.velocity.x;
    item.position.y += item.velocity.y;
  });

  // Check if game is running before calling update recursively
  if (gameRunning) {
    setTimeout(update, 20);
  }
}

function checkCollisions(item) {
  // Detect collision with all walls and make pacman bounce
  if (item.position.x + item.velocity.x + 100 >= window.innerWidth || item.position.x + item.velocity.x <= 0) {
    item.velocity.x = -item.velocity.x;
  }
  if (item.position.y + item.velocity.y + 100 >= window.innerHeight || item.position.y + item.velocity.y <= 0) {
    item.velocity.y = -item.velocity.y;
  }
}

function makeOne() {
  pacMen.push(makePac()); // Add a new PacMan
}

function startGame() {
  gameRunning = true; // Set gameRunning to true to start the game
  update(); // Start the update loop
}

// Export necessary functions and variables
module.exports = { checkCollisions, update, pacMen, makeOne, startGame };
