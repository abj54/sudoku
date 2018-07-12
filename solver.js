function checkbox(row, col, num, problem) {
  //var xoff = row % 3;
  //var yoff = col % 3;
  var r = row - row % 3;
  var c = col - col % 3;
  for (var i = r; i < r + 3; i++) {
    for (var j = c; j < c + 3; j++) {
      if (problem[i][j] === num) {
        return true;
      }
    }
  }
  return false;
}


function checkrow(row, num, problem) {
  for (var i = 0; i < cols; i++) {
    if (problem[row][i] === num)
      return true;
  }
  return false;
}

function checkcol(col, num, problem) {
  for (var i = 0; i < cols; i++) {
    if (problem[i][col] === num)
      return true;
  }
  return false;
}

function goodnum(row, col, num, problem) {
  if ((checkrow(row, num, problem) || checkcol(col, num, problem) || checkbox(row, col, num, problem))) {
    return false;
  } else {
    return true;
  }
}

function solve(problem) {
  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      if (problem[row][col] === 0) {
        for (var num = 1; num <= 9; num++) {
          if (goodnum(row, col, num, problem)) {
            problem[row][col] = num;
            if (solve(problem)) {
              return true;
            } else {
              problem[row][col] = 0;
            }
          }
        }
        return false;
      }
    }
  }
  return true;
}
