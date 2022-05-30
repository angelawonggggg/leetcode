var getRow = function (rowIndex) {
  let firstRow = [1];
  let outputArray = [firstRow];

  for (let i = 1; i < rowIndex+1; i++) {
    let row = [1, 1];
    outputArray.push(row);

    for (let j = 1; j < i; j++) {
        let prev = outputArray[i-1][j-1];
        let next = outputArray[i-1][j];
        let sum = prev+next;
      outputArray[i].splice(j, 0, sum);
    }
  }

  return outputArray[rowIndex];
};

console.log(getRow(1));
