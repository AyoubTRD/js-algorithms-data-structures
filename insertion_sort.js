function swap(arr, i1, i2) {
  [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
}

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let swapsMade = 0;
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i - swapsMade] < arr[j])
        swap(arr, i - swapsMade, j) || swapsMade++;
      else break;
    }
  }

  return arr;
}

module.exports = insertionSort;
