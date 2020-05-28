function genArr(length) {
  const arr = [];
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * length));
  }
  return arr;
}

function test(name, fn, ...args) {
  console.time(name);
  fn(...args);
  console.timeEnd(name);
}

// const arr1 = genArr(100);
// const arr2 = genArr(500);
// const arr3 = genArr(1000);
// const arr4 = genArr(5000);
// const arr5 = genArr(10000);
// const arr6 = genArr(20000);
// const arr7 = genArr(100000);
// const arr8 = genArr(500000);

// const linearSearch = require("./linear_search");
// const binarySearch = require("./binary_search");
// const arr = [1, 3, 4, 6, 10, 12, 14, 14, 19, 20];
// console.log(linearSearch(arr, 2));
// console.log(binarySearch(arr, 2));

// const stringSearch = require("./string_search");
// console.log(stringSearch("wowzomgomg", "omg"));

// const bubbleSort = require("./bubble_sort");
// const selectionSort = require("./selection_sort");
// const insertionSort = require("./insertion_sort");
// const mergeSort = require("./merge_sort");
// const quickSort = require("./quick_sort");
// const radixSort = require("./radix_sort");

// test("Merge sort", mergeSort, [...arr1]);
// test("Quick sort", quickSort, [...arr1]);
// test("Bubble sort", bubbleSort, [...arr1]);
// test("Selection sort", selectionSort, [...arr1]);
// test("Radix sort", radixSort, [...arr1]);
// console.log("=".repeat(45));

// test("Merge sort", mergeSort, [...arr2]);
// test("Quick sort", quickSort, [...arr2]);
// test("Bubble sort", bubbleSort, [...arr2]);
// test("Selection sort", selectionSort, [...arr2]);
// test("Radix sort", radixSort, [...arr2]);
// console.log("=".repeat(45));

// test("Merge sort", mergeSort, [...arr3]);
// test("Quick sort", quickSort, [...arr3]);
// test("Bubble sort", bubbleSort, [...arr3]);
// test("Selection sort", selectionSort, [...arr3]);
// test("Radix sort", radixSort, [...arr3]);
// console.log("=".repeat(45));

// test("Merge sort", mergeSort, [...arr4]);
// test("Quick sort", quickSort, [...arr4]);
// test("Bubble sort", bubbleSort, [...arr4]);
// test("Selection sort", selectionSort, [...arr4]);
// test("Radix sort", radixSort, [...arr4]);
// console.log("=".repeat(45));

// test("Merge sort", mergeSort, [...arr5]);
// test("Quick sort", quickSort, [...arr5]);
// test("Bubble sort", bubbleSort, [...arr5]);
// test("Selection sort", selectionSort, [...arr5]);
// test("Radix sort", radixSort, [...arr5]);
// console.log("=".repeat(45));

// test("Merge sort", mergeSort, [...arr6]);
// test("Quick sort", quickSort, [...arr6]);
// test("Bubble sort", bubbleSort, [...arr6]);
// test("Selection sort", selectionSort, [...arr6]);
// test("Radix sort", radixSort, [...arr6]);
// console.log("=".repeat(45));

// test("Merge sort", mergeSort, [...arr7]);
// test("Quick sort", quickSort, [...arr7]);
// test("Bubble sort", bubbleSort, [...arr7]);
// test("Selection sort", selectionSort, [...arr7]);
// test("Radix sort", radixSort, [...arr7]);
// console.log("=".repeat(45));

// test("Merge sort", mergeSort, [...arr8]);
// test("Quick sort", quickSort, [...arr8]);
// test("Bubble sort", bubbleSort, [...arr8]);
// test("Selection sort", selectionSort, [...arr8]);
// test("Radix sort", radixSort, [...arr8]);
// console.log("=".repeat(45));
