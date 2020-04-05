const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Score variable
let score = 0;

// Bricks amount
const brickRowCount = 9;
const brickColumnCount = 5;

// Create ball props
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  size: 10, //It means radius for the ball 
  speed: 4,
  dx: 4,
  dy: -4
}

// Create paddle props
const paddle = {
  x: canvas.width/2 - 40,
  y: canvas.height - 20,
  w: 80,
  h: 10,
  speed: 8,
  dx: 0
}

// Create brick props 
const bricksInfo = {
  w:70,
  h:20,
  padding: 10,
  offsetX: 45, // The x position of first brick
  offsetY: 60, // The y position of first brick
  visible: true // When ball hits the brick, this prop goes to false
}

// Create bricks.. It is similar to build a table
const bricks = [];
for(let i = 0; i < brickRowCount; i++) {
  bricks[i] = [];
  for(let j = 0; j < brickColumnCount; j++) {
    const x = i * (bricksInfo.w + bricksInfo.padding) + bricksInfo.offsetX;
    const y = j * (bricksInfo.h + bricksInfo.padding) + bricksInfo.offsetY;
    // Applying spread 
    bricks[i][j] = { x, y, ...bricksInfo }
  }
}

// console.log(bricks);

// Draw ball on canvas
const drawBall = () => {
  // Using method Drawing path in canvas API
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2);
  ctx.fillStyle = '#3c3b6e';
  ctx.fill();
  ctx.closePath();
}

// Draw paddle on canvas
const drawPaddle = () => {
  ctx.beginPath();
  ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
  ctx.fillStyle = '#3c3b6e'; // #0015BC
  ctx.fill();
  ctx.closePath();
}

// Draw score on canvas
const drawScore = () => {
  ctx.font = '20px Georgia';
  ctx.fillStyle = '#4169e1'
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw bricks on canvas
const drawBricks = () => {
  bricks.forEach(column => {
    column.forEach(brick => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? '#B22234' : 'transparent'; // #E9141D
      ctx.fill();
      ctx.closePath();
    })
  })
}

// Draw the objects on the screen
const draw = () => {
  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
}

draw();


// Rules button (open and close) events handlers
rulesBtn.addEventListener('click', () => {
  rules.classList.add('show');
})
closeBtn.addEventListener('click', () => {
  rules.classList.remove('show');
})