let strs = ["flower", "flow", "flight"];

var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return "";
  let prefix = strs[0];

  console.log(prefix);
  for (let i = 0; i < strs.length; i++) {
    // string.indexOf returns the index of the first occurence of param
    while (strs[i].indexOf(prefix) != 0) {
      prefix = prefix.substring(0, prefix.length - 1); // flower - flowe - flow  -> "STOP"

      if (!prefix.length) return "";
    }
  }
  return prefix;
};

console.log(longestCommonPrefix(strs));
