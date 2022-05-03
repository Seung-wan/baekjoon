const checkSameArrayBySquared = (array1, array2) => {
  if (array1.length !== array2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (let arr1 of array1) obj1[arr1] || 0 + 1;
  for (let arr2 of array2) obj2[arr2] || 0 + 1;

  for (let key in obj1) {
    if (!(key ** 2 in obj2)) return false;
    if (obj1[key] !== obj2[key ** 2]) return false;
  }

  return true;
};

const isSameArray = checkSameArrayBySquared([1, 2, 3], [1, 4, 9]);

const validAnagram = (string1, string2) => {
  if (string1.length !== string2.length) return false;

  const obj1 = {};
  const obj2 = {};

  for (char1 of string1) obj1[char1] = obj1[char1] || 0 + 1;
  for (char2 of string2) obj2[char2] = obj2[char2] || 0 + 1;

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(validAnagram('cinema', 'icemana'));
