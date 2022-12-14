let blocks = "WBWBBBW",
  k = 2;

var minimumRecolors = function (blocks, k) {
  let slidingWindow = "";

  let min = Infinity;

  for (let i = 0; i < blocks.length; i++) {
    if (i >= k - 1) {
      slidingWindow = blocks.substring(i - k + 1, i + 1);
      let count = 0;
      for (let c of slidingWindow) {
        if (c === "W") {
          count++;
        }
      }

      min = Math.min(min, count);
    }
  }

  return min;
};

console.log(minimumRecolors(blocks, k));
