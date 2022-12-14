var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map1 = {},
    map2 = {};
  for (let i = 0; i < s.length; i++) {
    map1[s[i]] ? map1[s[i]]++ : (map1[s[i]] = 1);
    map2[t[i]] ? map2[t[i]]++ : (map2[t[i]] = 1);
  }
  for (const [key1, value1] of Object.entries(map1)) {
    if (map2[key1] !== value1) return false;
  }
  return true;
};
console.log(isAnagram("caat", "cata"));

// var isAnagram = function(s, t) {
//   let map1 = [];
//   let map2 = [];
//   for(let i=0; i<s.length;i++) {
//       if(!t.includes(s[i]) || !s.includes(t[i]) || s.length !== t.length) {
//           return false
//       }

//       map1[s[i]] ? map1[s[i]]++ : map1[s[i]] = 1;
//       map2[t[i]] ? map2[t[i]]++ : map2[t[i]] = 1;

//       if(i == s.length - 1 && map1[s[i]] !== map2[s[i]]) { //呢個唔work因為淨係會check最後果個字母
//           console.log('123', map1, map2)
//           return false
//       }
//   }
//   console.log(map1, map2)
//   return true
// };
