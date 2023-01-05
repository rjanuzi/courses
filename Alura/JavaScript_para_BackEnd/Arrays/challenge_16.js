// Desafio 16: médias das turmas
// Com a média de todos os alunos de 3 salas, calcule a média geral de cada sala:

const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calcClassAverage(grades) {
    let sum = grades.reduce((acc, grade) => acc + grade, 0);
    // let sum = grades.reduce((acc, grade) => { return acc + grade }, 0); / Alternative sintax
    return sum / grades.length;
}

let salaJsAvg = calcClassAverage(salaJS);
let salaJavaAvg = calcClassAverage(salaJava);
let salaPythonAvg = calcClassAverage(salaPython);

console.log(`Média da sala de JavaScript: ${salaJsAvg}`);
console.log(`Média da sala de Java: ${salaJavaAvg}`);
console.log(`Média da sala de Python: ${salaPythonAvg}`);