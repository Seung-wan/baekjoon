const selectionSort = (array) => {
  const arr = [...array];
  let minIndex, temp;

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
};

console.log(selectionSort([4, 5, 2, 1, 12, 6]));
