const { listaLivros } = require("./arrayOrdenado");

function binarySearch(target, arr) {
  let midIdx = Math.floor(arr.length / 2);

  if (arr[midIdx] === target) {
    return arr[midIdx];
  } else if (arr[midIdx].preco < target.preco && arr.length > 1) {
    return binarySearch(target, arr.slice(midIdx));
  } else if (arr[midIdx].preco > target.preco && arr.length > 1) {
    return binarySearch(target, arr.slice(0, midIdx));
  } else {
    return null;
  }
}

console.log(listaLivros);
console.log(binarySearch(listaLivros[8], listaLivros));
console.log(binarySearch({ titulo: "Assembly", preco: 48 }, listaLivros));
