let s = "eccbbbbdec";
//"ababcbacadefegdehijhklij"

var partitionLabels = function (s) {
  let startIndices = [];
  let lastIndices = [];

  for (let i = 0; i < s.length; i++) {
    startIndices[s[i]] = s.indexOf(s[i]);
    lastIndices[s[i]] = s.lastIndexOf(s[i]);
  }

  let lastIndex = lastIndices[s[0]];
  let startIndex = 0;
  let result = [];

  for (let i = 0; i < s.length; i++) {
    if (i == lastIndex) {
      result.push(lastIndex - startIndex + 1);
      startIndex = i + 1;
      lastIndex = lastIndices[s[i]];
    } else {
      lastIndex = Math.max(lastIndex, lastIndices[s[i]]);
    }
  }
  return result;
};

console.log(partitionLabels(s));
