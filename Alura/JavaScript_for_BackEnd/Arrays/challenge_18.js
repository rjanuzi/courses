// Um professor acidentalmente adicionou nomes repetidos na lista de chamada:

// Ana
// Clara
// Maria
// Maria
// João
// João
// João
// Remova os nomes repetidos, deixando apenas um de cada.

const names = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

let uniqueNames = new Set(names);
uniqueNames = [...uniqueNames]; // Spread operator also works with Sets

console.log(uniqueNames);