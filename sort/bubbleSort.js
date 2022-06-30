const bubbleSort = (array) => {
  const arr = [...array];
  let temp = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      // arr[j - 1] > arr[j] 의 연산자에 따라 오름차순, 내림차순 결정
      if (arr[j - 1] > arr[j]) {
        temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort([2, 4, 5, 1, 6, 7, 124, 12]));
