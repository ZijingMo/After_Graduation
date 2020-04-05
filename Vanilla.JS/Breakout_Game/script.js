const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Score variable
let score = 0;
let victory = false;

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
  speed: 10,
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
  ctx.font = '22px Georgia';
  ctx.fillStyle = '#4169e1'
  ctx.fillText(`Score: ${score}`, canvas.width - 100, 30);
}

// Draw win on canvas
const drawVictory = () => {
  ctx.font = '50px Georgia';
  ctx.fillStyle = '#000'
  ctx.fillText(`Great Job!`, canvas.width/2 - 120, canvas.height/2);
}

// Draw bricks on canvas
const drawBricks = () => {
  bricks.forEach(column => {
    column.forEach(brick => {
      ctx.beginPath();
      ctx.rect(brick.x, brick.y, brick.w, brick.h);
      ctx.fillStyle = brick.visible ? '#B22234' : 'transparent'; // #E9141D // Check brick visible condition
      ctx.fill();
      ctx.closePath();
    })
  })
}

// Move paddle on canvas
const movePaddle = () => {
  paddle.x += paddle.dx;

  // Wall detection
  if (paddle.x + paddle.w > canvas.width) {
    paddle.x = canvas.width - paddle.w;
  }

  if (paddle.x < 0) {
    paddle.x = 0;
  }
}

// Move the ball on canvas
const moveBall = () => {
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Wall collision (horizontal)
  if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
    ball.dx *= -1; // Reverse the ball
  }
  // Wall collision (vertical)
  if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
    ball.dy *= -1; // Reverse the ball
  }

  //console.log(ball.x, ball.y);

  // Paddle collision
  if(
    ball.x - ball.size > paddle.x &&             // Compare ball's left end and paddle's left end 
    ball.x + ball.size < paddle.x + paddle.w &&  // Compare ball's right end and paddle's right end 
    ball.y + ball.size > paddle.y                // Compare ball's low side and paddle's low side
  ) {
    ball.dy = -ball.speed; //Bounce the ball
  }

  // Brick collision
  bricks.forEach(column => {
    column.forEach(brick => {
      if(brick.visible) {
        if(
          ball.x - ball.size > brick.x &&           // Compare ball's left end and brick's left end 
          ball.x + ball.size < brick.x + brick.w && // Compare ball's right end and brick's right end 
          ball.y + ball.size > brick.y &&           // Compare ball's top end and brick's top end 
          ball.y - ball.size < brick.y + brick.h    // Compare ball's bottom end and brick's bottom end 
        ) {
          ball.dy *= -1;
          brick.visible = false; // The brick's property is from function drawBricks()
          increaseScore();
        }
      }
    });
  });

  // Hit bottom wall - Reset
  if(ball.y + ball.size > canvas.height) {
    showAllBricks();
    score = 0;
  }
}

// Increase score
const increaseScore = () => {
  score++;
  // Check the winning condition
  if (score % (brickRowCount * brickColumnCount) === 0) {
    victory = true;
    score = 0;
    showAllBricks();
  }
}

// Make all bricks appear
const showAllBricks = () => {
  bricks.forEach(column => {
    column.forEach(brick => (brick.visible = true));
  })
}

// Draw the objects on the screen
const draw = () => {
  // clear canvas and system will draw again
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  drawBall();
  drawPaddle();
  drawScore();
  drawBricks();
  if (victory) {
    drawVictory();
  }
}

// Canvas update function for drawing and animation
const update = () => {
  // Calling moving function
  movePaddle();
  moveBall();

  // Draw everything
  draw();
  requestAnimationFrame(update);
}

update();

// Keydown event
const keyDown = (e) => {
  //console.log(e.key);
  if(e.key === 'ArrowRight' || e.key === 'Right') {
    paddle.dx = paddle.speed;
  } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
    paddle.dx = -paddle.speed;
  }
}

// Keyup event
const keyUp = (e) => {
  //console.log(2);
  if (e.key === 'ArrowRight' ||
      e.key === 'ArrowLeft' ||
      e.key === 'Right' ||
      e.key === 'Left' 
  ) { paddle.dx = 0; }
}


// Keyboard event handlers
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);


// Rules button (open and close) events handlers
rulesBtn.addEventListener('click', () => {
  rules.classList.add('show');
})
closeBtn.addEventListener('click', () => {
  rules.classList.remove('show');
})