const { listaLivros } = require("./arrays2.js");
const { merge } = require("./merge.js");

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  let midIdx = Math.floor(array.length / 2);
  let leftPart = array.slice(0, midIdx);
  let rightPart = array.slice(midIdx);

  return merge(mergeSort(leftPart), mergeSort(rightPart));
}

console.log("Lista de livros: ", listaLivros);
console.log("Lista de livros ordenada: ", mergeSort(listaLivros));
