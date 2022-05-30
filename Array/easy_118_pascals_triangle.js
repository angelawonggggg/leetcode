let numRows = 5;

var generate = function (numRows) {
  let firstRow = [1];
  let outputArray = [firstRow];

  if(numRows == 0 ) {return []} 

  for (let i = 1; i < numRows; i++) {
    let arrayRow = [1, 1];
    outputArray.push(arrayRow);

    for (let j = 1; j < i; j++) {
      let prev = outputArray[i - 1][j - 1];
      let next = outputArray[i - 1][j];
      let sum = prev + next;

      outputArray[i].splice(j, 0, sum);
    }
  }

  return outputArray;
};

console.log(generate(6));
