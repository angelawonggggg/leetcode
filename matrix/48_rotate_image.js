let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

var rotate = function (matrix) {
  let m = matrix.length;
  // 平時寫coordination係[x,y], 但係matrix通常係[y,x]， 因為係攞咗col number先
  for (let rowNumber = 0; rowNumber < m / 2; rowNumber++) {
    const row = matrix[rowNumber];
    for (let colNumber = 0; colNumber < m; colNumber++) {
      let element = row[colNumber];
      let temp1 = matrix[colNumber][m - rowNumber - 1];
      matrix[colNumber][m - rowNumber - 1] = element;

      let temp2 = matrix[m - colNumber - 1][m - rowNumber - 1];
      matrix[m - colNumber - 1][m - rowNumber - 1] = temp1;
    }
  }
};

var rotateImage = function (matrix) {
  // m=雙數時：左上的小正方形（4, A）開始先，logic同上面格方法一樣。**搬的同時就係rotate緊
  /////////////
  // A A B B
  // A A B B
  // C C D D
  // C C D D
  /////////////
  // 搬之前要將目的地啲value儲起
  // 之後就可以將目的地轉去佢既目的地，轉之前又係要儲目的地value先
  const m = matrix.length;
  // 除2將大正方形分成小正方形，但係m唔一定係雙數，所以要-0.5去處理單數case
  for (let row_number = 0; row_number < m / 2; row_number++) {
    const row = matrix[row_number];
    for (let col_number = 0; col_number < m / 2 - 0.5; col_number++) {
      const element = row[col_number];
      matrix.map((row) => console.log(row));
      console.log({ row_number, col_number });
      let temp1 = matrix[col_number][m - row_number - 1];
      matrix[col_number][m - row_number - 1] = element;

      let temp2 = matrix[m - row_number - 1][m - col_number - 1];
      matrix[m - row_number - 1][m - col_number - 1] = temp1;

      let temp3 = matrix[m - col_number - 1][row_number];
      matrix[m - col_number - 1][row_number] = temp2;
      matrix[row_number][col_number] = temp3;
    }
  }
  return matrix;
};

var rotateByCreatingNewMatrix = function (matrix) {
  //即係將row number同col number調轉，就係element rotate 90deg既位置，例如2係【2nd row，1st colum】，佢新位置就係【1st row，2nd col】（由右邊數起）
  const new_matrix = matrix.map((row) => row.map((col) => 0));
  const m = matrix.length;
  for (let row_number = 0; row_number < matrix.length; row_number++) {
    const row = matrix[row_number];
    for (let col_number = 0; col_number < row.length; col_number++) {
      const element = row[col_number];
      //   new_matrix[col_number][m - row_number - 1] = element;
      //   new_matrix[col_number][row_number] = element;
      new_matrix[m - row_number - 1][col_number] = element;
    }
  }
};

rotateImage(matrix);
matrix.map((row) => console.log(row));
