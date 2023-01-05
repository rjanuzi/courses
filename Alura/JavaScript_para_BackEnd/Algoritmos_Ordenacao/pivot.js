const { listaLivros } = require("./arrays3.js");

function countLower(pivot, arr) {
  let count = 0;

  for (let obj of arr) {
    if (obj.preco < pivot.preco) {
      count++;
    }
  }

  return count;
}

function swap(arr, from, to) {
  let tmp = arr[from];
  arr[from] = arr[to];
  arr[to] = tmp;
}

function setPivotPosition(pivot, arr) {
  let newPivotPosition = countLower(pivot, arr);
  let pivotCurrentPosition = arr.indexOf(pivot);

  //   Put the pivot in the right position to accomodate all the lower values to the left
  if (pivotCurrentPosition !== newPivotPosition) {
    swap(arr, pivotCurrentPosition, newPivotPosition);
  }
}

function splitAtPivot(arr) {
  let pivotIdx = Math.floor(arr.length / 2);
  let pivot = arr[pivotIdx];
  let lowerCount = countLower(pivot, arr);
  let currentFreeIdx = 0;

  setPivotPosition(pivot, arr);

  for (
    let lowerCandidateIdx = 0;
    currentFreeIdx < lowerCount;
    lowerCandidateIdx++
  ) {
    let lowerCandidate = arr[lowerCandidateIdx];
    if (lowerCandidate.preco < pivot.preco) {
      swap(arr, lowerCandidateIdx, currentFreeIdx);
      currentFreeIdx++;
    }
  }
}

module.exports = { swap };
