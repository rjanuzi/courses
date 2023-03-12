// Desafio 8: Procurando na lista
// Crie uma função que recebe como argumento o nome de um aluno.
// Verifique se o aluno está presente na lista e retorne a média final que se encontra no mesmo índice.
// Caso o nome do aluno não esteja na lista, retorne uma mensagem indicando que o aluno não foi encontrado.
// Para este desafio, usaremos as mesmas listas da aula anterior:

// 'João', 'Juliana', 'Caio', 'Ana'
// 10, 8, 7.5, 9

const grades = [["João", "Juliana", "Caio", "Ana"], [10, 8, 7.5, 9]];

function getStudentGrade(gradesMtx, studentName) {
    // let students = gradesMtx[0];
    // let grades = gradesMtx[1];
    let [students, grades] = gradesMtx; // Simpler way to write the attribution from arrays. It is called "destructuring assignment".
    let studentIdx = students.indexOf(studentName);

    if (studentIdx === -1) {
        return "Student not found";
    } else {
        return grades[studentIdx];
    }
}

console.log(getStudentGrade(grades, "Juliana"));
console.log(getStudentGrade(grades, "Caio"));
console.log(getStudentGrade(grades, "Rafael"));