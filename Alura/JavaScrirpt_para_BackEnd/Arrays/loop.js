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

// For of ("for each")

sum = 0;
for (let g of grades) {
    sum += g;
}
console.log(`\n\nSum: ${sum} | Average/Mean: ${sum / grades.length}`);