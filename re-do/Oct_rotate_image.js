let matrix = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
];

var rotate = (matrix) => {
  const m = matrix.length;

  for (let row_number = 0; row_number < m / 2 - 0.5; row_number++) {
    const row = matrix[row_number];
    for (let col_number = 0; col_number < m / 2; col_number++) {
      let element = row[col_number];
      //因為temp1係儲黎for調位，而調咗位col同row係會調轉，所以就on purpose依家調轉先，所以寫matrix[col_number][rowNumber]好過matrix[row_number][col_number]
      let temp1 = matrix[col_number][m - row_number - 1];
      matrix[col_number][m - row_number - 1] = element;

      let temp2 = matrix[m - col_number - 1][m - row_number - 1];
      matrix[m - col_number - 1][m - row_number - 1] = temp1;
    }
  }
};

console.log(rotate(matrix));
