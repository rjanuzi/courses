const books = [
  { name: 'Book A', price: 10 },
  { name: 'Book B', price: 5 },
  { name: 'Book C', price: 8 },
  { name: 'Book D', price: 3 }
]

function selectionSort (arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowerIdx = i
    for (let j = i + i; j < arr.length; j++) {
      if (arr[j].price < arr[lowerIdx].price) {
        lowerIdx = j
      }
    }

    // If finded a lower index different of i, swap
    if (lowerIdx != i) {
      let tmp = arr[i]
      arr[i] = arr[lowerIdx]
      arr[lowerIdx] = tmp
    }
  }
}

console.log('Initial array: ', books)
selectionSort(books)
console.log('Sorted array: ', books)
