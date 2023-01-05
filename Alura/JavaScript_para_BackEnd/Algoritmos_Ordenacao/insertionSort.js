const books = [
  { name: 'Book A', price: 10 },
  { name: 'Book B', price: 5 },
  { name: 'Book C', price: 8 },
  { name: 'Book D', price: 3 }
]

function swap (arr, idx1, idx2) {
  let tmp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = tmp
}

function insertionSort (arr) {
  for (let currentIdx = 0; currentIdx < arr.length; currentIdx++) {
    let sorterdArrIdx = currentIdx
    while (
      sorterdArrIdx > 0 &&
      arr[sorterdArrIdx].price < arr[sorterdArrIdx - 1].price
    ) {
      swap(arr, sorterdArrIdx, sorterdArrIdx - 1)
      sorterdArrIdx--
    }
  }
}

console.log(books)
insertionSort(books)
console.log(books)
