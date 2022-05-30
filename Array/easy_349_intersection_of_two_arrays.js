let array1 = [1, 2, 2, 1];
let array2 = [2, 3, 1, 0, null];

var intersection = function (array1, array2) {
  let longerArray = array1.length >= array2.length ? array1 : array2;
  let shorterArray = array1.length < array2.length ? array1 : array2;
  let store = [];

  for (let i = 0; i < shorterArray.length; i++) {
    let n = shorterArray[i];

    if (longerArray.includes(n) && store.indexOf(n) == -1) {
      store.push(n);
    }
  }

  return store;
};

console.log(intersection(array1, array2));
