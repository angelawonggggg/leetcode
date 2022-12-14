let size = 3;
let mat = [
  [5, 4, 7],
  [1, 3, 8],
  [2, 9, 6],
];

function sortMat(mat, size) {
  let temp = new Array(size * size);
  let k = 0;
  console.log("temp", temp);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      temp[k++] = mat[i][j];
    }
  }
  temp.sort();
  k = 0;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      mat[i][j] = temp[k++];
    }
  }
}

sortMat(mat, size);
