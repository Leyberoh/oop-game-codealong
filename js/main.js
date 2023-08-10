class Player {
  constructor() {
    this.positionX = 50;
    this.positionY = 0;
    this.width = 20;
    this.height = 10;
    this.domElement = null;

    this.createDomElement();
  }
  createDomElement() {
    // create dom element
    this.domElement = document.createElement("div");

    // set id
    this.domElement.id = "player";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";

    //append to the dom
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }
  moveLeft() {
    if (this.positionX >= 0) {
      this.positionX--;
      this.domElement.style.left = this.positionX + "vw";
    }
  }
  moveRight() {
    this.positionX++;
    this.domElement.style.left = this.positionX + "vw";
  }
}

class Obstacle {
  constructor() {
    this.positionX = 50;
    this.positionY = 100;
    this.width = 20;
    this.height = 10;
    this.domElement = null;

    this.createDomElement();
  }
  createDomElement() {
    // create dom element
    this.domElement = document.createElement("div");

    // set id
    this.domElement.className = "obstacle";
    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";
    this.domElement.style.left = this.positionX + "vw";
    this.domElement.style.bottom = this.positionY + "vh";

    //append to the dom
    const parentElm = document.getElementById("board");
    parentElm.appendChild(this.domElement);
  }
  moveDown() {
    this.positionY -= 2;
    this.domElement.style.bottom = this.positionY + "vh";
  }
}

const player = new Player();

const obstaclesArr = []; //will store instances of the class Obstacle

// create enemies
setInterval(() => {
  const newObstacle = new Obstacle();
  obstaclesArr.push(newObstacle);
  console.log("we've created a new obstacle.... ", obstaclesArr.length);
}, 2000);

//
setInterval(() => {
  obstaclesArr.forEach((element) => {
    element.moveDown();
  });
}, 100);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    player.moveLeft();
  } else if (event.key === "ArrowRight") {
    player.moveRight();
  }
});
