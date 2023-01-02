const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = "assets/images/shadow_dog.png";
const spriteWidth = 575;
const spriteHeight = 523;
let frameX = 0;
let frameY = 4;
let gameFrame = 0;
const adjustFrames = 5;

const spriteAnimations = [];
const animationStates = [
  {
    name: 'idle',
    frames: 7,
  },
  {
    name: 'jump',
    frames: 7,
  },
  {
    name: 'land',
    frames: 7,
  },
  {
    name: 'run',
    frames: 9,
  },
  {
    name: 'stunned',
    frames: 11,
  },
  {
    name: 'sit',
    frames: 5,
  },
  {
    name: 'roll',
    frames: 7,
  },
  {
    name: 'bite',
    frames: 7,
  },
  {
    name: 'prone',
    frames: 12,
  },
  {
    name: 'hit',
    frames: 4,
  }
];


function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  let position = Math.floor(gameFrame/adjustFrames) % 6;
  frameX = spriteWidth * position;
  ctx.drawImage(
    playerImage, 
    frameX, 
    frameY * spriteHeight, 
    spriteWidth,
    spriteHeight, 
    0, 0,
    spriteWidth, 
    spriteHeight
    );

    gameFrame++;
    requestAnimationFrame(animate);
};
animate();
