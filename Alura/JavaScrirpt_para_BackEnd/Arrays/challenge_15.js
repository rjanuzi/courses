// Desafio 15: filtrando por nota
// Depois de calcular a média dos alunos, precisamos mostrar quem está reprovado entre os alunos:

// Ana: 7
// Marcos: 4.5
// Maria: 8
// Mauro: 7, 5

const MINIMUM_GRADE = 7;

const classGrades = [["Ana", "Marcos", "Maria", "Mauro"], [7, 4.5, 8, 7.5]];

let students = classGrades[0];
let grades = classGrades[1];
let approvedStudents = students.filter((_, idx) => grades[idx] >= MINIMUM_GRADE);
let reprovedStudents = students.filter((_, idx) => grades[idx] < MINIMUM_GRADE);

console.log(`Approved students: ${approvedStudents}`);
console.log(`Reproved students: ${reprovedStudents}`);

// The callback function can return boolean explicity
approvedStudents = students.filter((_, idx) => {
    return grades[idx] >= MINIMUM_GRADE
});
reprovedStudents = students.filter((_, idx) => {
    return grades[idx] < MINIMUM_GRADE
});

console.log(`Approved students: ${approvedStudents}`);
console.log(`Reproved students: ${reprovedStudents}`);