for (let i = 100; i <= 500; i += 100) {
    console.log(i);
}

console.log("\n\nOther way to do\n\n");
const values = [100, 200, 300, 400, 500];
for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
}

// Desafio 10: Média
// Calcule a média entre as seguintes notas, usando o for:

// 10
// 6.5
// 8
// 7.5

const grades = [10, 6.5, 8, 7.5];
let sum = 0;
for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
}

console.log(`\n\nSum: ${sum} | Average/Mean: ${sum / grades.length}`);

// For of
sum = 0;
for (let g of grades) {
    sum += g;
}
console.log(`\n\nSum: ${sum} | Average/Mean: ${sum / grades.length}`);

// For each
// Callback function are passed as params
sum = 0;
grades.forEach(g => sum += g);
console.log(`\n\nSum: ${sum} | Average/Mean: ${sum / grades.length}`);

// For each with explicit function
sum = 0;
grades.forEach(function (g) {
    sum += g;
});
console.log(`\n\nSum: ${sum} | Average/Mean: ${sum / grades.length}\n\n`);

// For each with index param
sum = 0;
grades.forEach(function (g, idx) {
    sum += g;
    console.log(`Index: ${idx} | Grade: ${g}`);
});
console.log(`\nSum: ${sum} | Average/Mean: ${sum / grades.length}\n\n`);

// Desafio 13: ponto extra
// Um aluno recebeu um ponto extra nas suas notas. Adicione esse ponto nas notas da seguinte lista:

// Sum 1 to each grade
updatedGrades = grades.map(g => g + 1);
console.log(grades);
console.log(updatedGrades);

// Limit the grade to 10
updatedGrades = grades.map(g => g + 1 >= 10 ? 10 : g + 1);
console.log(grades);
console.log(updatedGrades, "\n\n");

// Desafio 14: padronizando os nomes
// Precisamos padronizar a lista de alunos para conter apenas letras maiúsculas.

// ana Julia
// Caio vinicius
// BIA silva
// Temos uma lista de strings em que os nomes não estão padronizados,
// alguns nomes estão com maiúsculas e outros estão com minúsculas.
// Vamos padronizar para ter maior consistência nos nossos dados.

const names = ["ana Julia", "Caio vinicius", "BIA silva"];
let updatedNames = names.map(name => name.toUpperCase());
console.log(names);
console.log(updatedNames, '\n\n');

// Captalize names
updatedNames = names.map(name => name.toLowerCase());
updatedNames = updatedNames.map(name => name.charAt(0).toUpperCase() + name.slice(1));
console.log(names);
console.log(updatedNames, '\n\n');