function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSort(arr) {
  // Loop through every element of `arr`
  for (let i = 0; i < arr.length; i++) {
    // Get the lowest number from the current index to the end of the array
    const min = getMin(arr.slice(i));
    // Swap the current index with the index of the lowest number
    swap(arr, i, min + i);
  }
  return arr;
}

function getMin(arr) {
  let min = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < arr[min]) min = i;
  }
  return min;
}
