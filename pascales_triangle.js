let numRows = 5;

// first row = 1;

// Method: adding zero to the left of prev row + add zero to right of prev row
// first    0 1
// second   0 1 1
// third    1 2 1

var triangle = (numRows) => {
  let firstRow = [1];
  let pascal = [firstRow];

  for (let i = 1; i < numRows; i++) {
    const prevRow = pascal[pascal.length - 1];
    let prevLeft = [...prevRow, 0];
    let prevRight = [0, ...prevRow];

    const currentRow = prevLeft.map((left, i) => left + prevRight[i]);
    pascal.push(currentRow);
  }
  return pascal;
};

console.log(triangle(numRows));
