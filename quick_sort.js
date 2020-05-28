function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let index = start;
  const element = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (element > arr[i]) {
      index++;
      swap(arr, index, i);
    }
  }
  swap(arr, start, index);
  return index;
}

function quickSort(arr) {
  function helper(start = 0, end = arr.length - 1) {
    if (end - start <= 1) return arr;
    const idx = pivot(arr, start, end);
    helper(idx + 1, end);
    helper(start, idx - 1);
  }
  helper();
  return arr;
}

module.exports = quickSort;
