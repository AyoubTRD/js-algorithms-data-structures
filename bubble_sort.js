function swap(arr, idx1, idx2) {
  // const temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
  let sortedNums = 0;
  let isSorted = false;
  while (sortedNums <= arr.length && !isSorted) {
    isSorted = true;
    for (let i = 1; i < arr.length - sortedNums; i++) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
        isSorted = false;
      }
    }
    sortedNums += 1;
  }
  return arr;
}

module.exports = bubbleSort;
