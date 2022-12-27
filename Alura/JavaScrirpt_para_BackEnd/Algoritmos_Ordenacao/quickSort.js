const { listaLivros } = require("./arrays3.js");
const { swap } = require("./pivot.js");

function partition(arr, leftIdx, rightIdx) {
  let pivotIdx = Math.floor((leftIdx + rightIdx) / 2);
  let pivot = arr[pivotIdx];
  let currentLeftIdx = leftIdx;
  let currentRightIdx = rightIdx;

  while (currentLeftIdx <= currentRightIdx) {
    while (arr[currentLeftIdx].preco < pivot.preco) {
      currentLeftIdx++;
    }

    while (arr[currentRightIdx].preco > pivot.preco) {
      currentRightIdx--;
    }

    if (currentLeftIdx <= currentRightIdx) {
      swap(arr, currentLeftIdx, currentRightIdx);
      currentLeftIdx++;
      currentRightIdx--;
    }
  }

  return currentLeftIdx;
}

function quickSort(arr, leftIdx, rightIdx) {
  if (arr.length <= 1) {
    return arr;
  } else {
    let currentIdx = partition(arr, leftIdx, rightIdx);
    if (leftIdx < currentIdx - 1) {
      quickSort(arr, leftIdx, currentIdx - 1);
    }
    if (currentIdx < rightIdx) {
      quickSort(arr, currentIdx, rightIdx);
    }
  }

  return arr;
}

console.log(listaLivros);
quickSort(listaLivros, 0, listaLivros.length - 1);
console.log(listaLivros);
