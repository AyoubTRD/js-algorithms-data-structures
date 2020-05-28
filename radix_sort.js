function digitAt(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function countDigits(num) {
  return Math.abs(num).toString().length;
}

function getMaxNumDigits(arr) {
  let max = -Infinity;
  for (let num of arr) {
    if (countDigits(num) > max) max = countDigits(num);
  }
  return max;
}

function radixSort(arr) {
  let buckets = [[], [], [], [], [], [], [], [], [], []];
  const loops = getMaxNumDigits(arr);

  for (let i = 0; i < loops; i++) {
    for (const num of arr) {
      buckets[digitAt(num, i)].push(num);
    }
    arr.length = 0;
    arr.concat(...buckets);
    buckets = [[], [], [], [], [], [], [], [], [], []];
  }
  return arr;
}

module.exports = radixSort;
