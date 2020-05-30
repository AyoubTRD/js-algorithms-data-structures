function merge(arr1, arr2) {
  const arr = [];
  let i = 0;
  let j = 0;
  while (i <= arr1.length && j <= arr2.length) {
    if (arr1[i] < arr2[j] || j === arr2.length) {
      arr.push(arr1[i]);
      i++;
    } else if (arr1[i] >= arr2[j] || i === arr1.length) {
      arr.push(arr2[j]);
      j++;
    }
  }
  arr.pop();
  return arr;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

