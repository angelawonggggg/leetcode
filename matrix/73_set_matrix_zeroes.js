let matrix = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];

var setZeroes = function (matrix) {
  let isCol = false;
  let m = matrix.length;
  let n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    // 1. 查第一個cell係咪0， 用isCol記低
    if (matrix[i][0] === 0) {
      isCol = true;
    }

    // 因為已經check咗第一個，所以col同row都由第二個開始
    // 2. 如果果一row有0，就將相應top同left set做0
    for (let j = 1; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0; // top
        matrix[i][0] = 0; // left
      }
    }
  }

  // 3. 如果top同left是但一個係0，就將col變0
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  // 4. check洗唔洗將第一row變0，如果第一粒係0，就需要
  if (matrix[0][0] === 0) {
    for (let i = 0; i < n; i++) {
      matrix[0][i] = 0;
    }
  }

  // 5. 用翻一開頭記低的variable check洗唔洗將第一col變0
  if (isCol) {
    for (let i = 0; i < m; i++) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

console.log(setZeroes(matrix));
