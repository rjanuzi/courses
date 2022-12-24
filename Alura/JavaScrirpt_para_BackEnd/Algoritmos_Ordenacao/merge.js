const { edGalho, edFolha } = require("./arrays.js");

function merge(list1, list2) {
  let finalList = [];

  list1Idx = 0;
  list2Idx = 0;
  while (list1Idx < list1.length || list2Idx < list2.length) {
    if (list1Idx === list1.length) {
      finalList.push(list2[list2Idx]);
      list2Idx++;
    } else if (list2Idx === list2.length) {
      finalList.push(list1[list1Idx]);
      list1Idx++;
    } else if (list1[list1Idx].preco < list2[list2Idx].preco) {
      finalList.push(list1[list1Idx]);
      list1Idx++;
    } else {
      finalList.push(list2[list2Idx]);
      list2Idx++;
    }
  }

  return finalList;
}

module.exports = { merge };

// console.log("Ed Galho: ", edGalho);
// console.log("Ed Folha: ", edFolha);
// console.log("Merged: ", merge(edGalho, edFolha));
