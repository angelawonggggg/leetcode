const testCase = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];
const lookFor = "ABCCFDAS";

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function (board, word) {
  const width = board[0].length;
  const height = board.length;
  const cache = {};
  const findWord = (index, rowNumber, colNumber, record) => {
    // if word length equal to index, we have found the entire word
    if (word.length == index) return true;

    // basic check if coordinate is valid (in-boundary)
    if (rowNumber < 0) return false;
    if (colNumber < 0) return false;
    if (rowNumber + 1 > height) return false;
    if (colNumber + 1 > width) return false;

    // console.log(index, rowNumber, colNumber, record);

    if (word[index] != board[rowNumber][colNumber]) return false;

    const coordinate = `${rowNumber},${colNumber}`;
    if (record[coordinate]) return false;
    record = { ...record, [coordinate]: true };

    const key = `${index},${rowNumber},${colNumber}`;
    if (cache[key]) return false;
    cache[key] = true;

    if (findWord(index + 1, rowNumber - 1, colNumber, record)) return true;
    if (findWord(index + 1, rowNumber + 1, colNumber, record)) return true;
    if (findWord(index + 1, rowNumber, colNumber - 1, record)) return true;
    if (findWord(index + 1, rowNumber, colNumber + 1, record)) return true;
    return false;
  };
  for (let rowNumber = 0; rowNumber < height; rowNumber++) {
    for (let colNumber = 0; colNumber < width; colNumber++) {
      if (findWord(0, rowNumber, colNumber, {})) {
        return true;
      }
    }
  }
  return false;
};

console.log(exist(testCase, lookFor));
