//make a grid
////CREATING THE BOARD


function makegrid(rows, cols) {
  var regrid = new Array(rows);
  for (var i = 0; i < rows; i++) {
    regrid[i] = new Array(cols);
  }
  return regrid;
}


var rows = 9;
var grid = [];

var cols = 9;
var w = 50;
var input;
var fromchoose;
var problem = [];
//show the boxes
function show(i, j) {
  this.i = i;
  this.j = j;
  var x = w * this.i;
  var y = w * this.j;
  noFill();
  //input = createInput();
  //input.position(x+5,y+5,w);
  strokeWeight(1);
  //  fill(255);
  rect(x + 5, y + 5, w, w); //just to see line clearly


}

//there must be a better way to do it but for now ---> here we go for separation
// of tables
function boldlines() {
  strokeWeight(4);
  stroke(51);
  line(5, 5, 5, w * 9 + 5);
  line(w * 3 + 5, 5, w * 3 + 5, w * 9 + 5);
  line(w * 6 + 5, 5, w * 6 + 5, w * 9 + 5);
  line(5, w * 9 + 5, w * 9 + 5, w * 9 + 5);
  line(5, 5, w * 9 + 5, 5);
  line(w * 9 + 5, 5, w * 9 + 5, w * 9 + 5);
  line(5, w * 3 + 5, w * 9 + 5, w * 3 + 5);
  line(5, w * 6 + 5, w * 9 + 5, w * 6 + 5);

}

function setup() {
  createCanvas(600, 600);
  fromchoose = makegrid(rows, cols);
  fromchoose = choose();
  problem = makegrid(rows, cols);
  grid = makegrid(rows, cols);
  //grid = makegrid(rows, cols);
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j] = fromchoose[i][j];
      problem[i][j] = fromchoose[i][j];
      numput(i * w, j * w, grid[i][j]);
    }
  }
  button1 = createButton('SOLVE');
  button1.position(100, 500);
  button1.mousePressed(finish);
  button2 = createButton('CHECK');
  button2.position(300, 500);
  button2.mousePressed(check);
}


function check() {
  solve(problem);
  var matchcount = 0;
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      if (grid[i][j] === problem[i][j])
        matchcount++;
    }
  }
  if (matchcount === rows * cols)
    console.log("HURRAY");
  else
    console.log(rows * cols - matchcount + " don't match");

}

function finish() {
  solve(problem);
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      grid[i][j] = problem[i][j];
      fromchoose[i][j] = problem[i][j];
      numput(i * w, j * w, grid[i][j]);
    }
  }
}

function draw() {
  boldlines();
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < cols; j++) {
      show(i, j);
      //console.log(mouseX,mouseY);
    }
  }

}


function numput(x, y, num) {
  //background(0);
  if (num === 0) {
    num = "";
  }
  textSize(30);
  //textAlign(CENTER);
  text(num, x + 30, y + 40);

  strokeWeight(0);
  fill(255, 255, 255);
  rect(x + 4, y + 4, w, w);
  boldlines();
  text(num, x + 30, y + 40);
}



function mousePressed() {
  var mx = mouseX;
  var my = mouseY;
  var i = floor((mx + 5) / w);
  var j = floor((my + 5) / w);
  if (fromchoose[i][j] === 0) {
    if (i >= 0 && j >= 0 && i < rows && j < cols) {
      //console.log(i, j);
      grid[i][j]++; //= num + 1;

      if (grid[i][j] === 10) {
        grid[i][j] = 1;
      }
      numput(i * w, j * w, grid[i][j]);
    }
  }
}
